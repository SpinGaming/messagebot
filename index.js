const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjU1NzQ2MjU4NTIyMDc5MjMy.XfYljw.qHNIFMRzVv6bTS8rECJa90fFvp8";
const PREFIX = "$";

bot.on('ready', () => {
    console.log("The bot is online!");
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('Pong!')
            break;

    }
});
bot.login(process.env.BOT_TOKEN);