const Discord = require('discord.js');
const bot = new Discord.Client();

var PREFIX = '$';
var version = '1.0.1';


bot.on('ready', () => {
    console.log('This Bot Is Online!');
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('Pong!')
            break;
        
    }
});



bot.login(token);
