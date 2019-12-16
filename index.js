const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "$";


const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


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

        case 'ban':
            bot.commands.get('ban').execute(message, args);
            break;

        case 'kick':
            bot.commands.get('kick').execute(message, args);
            break;

        case 'help':
            bot.commands.get('help').execute(message, args);
            break;

    }
})

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
