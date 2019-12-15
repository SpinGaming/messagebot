const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjU1NDMwMTExODc2ODc0Mjcx.XfT-7A.H4QGBDzLKZpfk6tqeraLDwLvb6Q';
const ytdl = require("ytdl-core");

var PREFIX = '|';
var version = '1.0.1';
var servers = {};


bot.on('ready', () => {
    console.log('This Bot Is Online!');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('Pong!')
            break;

        case 'clear':
            if (!args[1]) return message.reply('Error please define the command!')
            message.channel.bulkDelete(args[1]);
            break;

        case 'info':

            const embed = new Discord.RichEmbed()
                .setTitle("Josh's Slave")
                .setColor(0x7289DA)
                .addField('Prefix:', PREFIX)
                .addField('Version:', version)
                .addField('Employed In:', message.guild.name, true)
                .addField('Developer:', '@Joshh#0922', true)
                .setThumbnail("https://cdn-images-1.medium.com/max/1600/1*n4-mfREc-TgooqGwu2YHnw.png")
                .setFooter('ID: '+ bot.user.id +" | Josh's Slave since:")
                .setTimestamp(bot.user.createdAt);
            message.channel.sendEmbed(embed);
            break;

        case 'prefix':
            if (!args[1]) { return message.reply('You need to tell me what to listen for!') } else {
                PREFIX = args[1];
                message.channel.sendMessage('The prefix is now: ' + PREFIX);
            };
            break;
        
    }
})



bot.login(process.env.BOT_TOKEN);