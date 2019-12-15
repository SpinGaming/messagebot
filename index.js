const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "$";
const YTDL = require("ytdl-core");

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function(){
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var servers = {};

bot.on('ready', () => {
    console.log('I am ready!');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        
        case 'ping':
            bot.commands.get('ping').execute(message, args);
        break;
        
        case 'botinfo':
            bot.commands.get('botinfo').execute(message, args);
        break;

        case 'play':
            if(!args[1]){
                message.channel.sendMessage("Please provide a link!");
                return;
            }
            if(!message.member.voiceChannel){
                message.channel.sendMessage("You must be in a voice channel!");
                return;
            }
            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });

        break;

        case 'skip':
            var server = servers[message.guild.id];

            if(server.dispatcher) server.dispatcher.end();
        break;

        case 'stop':
            var server = servers[message.guild.id];

            if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
    }
})

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);