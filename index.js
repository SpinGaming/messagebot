const Discord = require('discord.js');
const bot = new Client();
const token = "NjU1NzQ2MjU4NTIyMDc5MjMy.XfYljw.qHNIFMRzVv6bTS8rECJa90fFvp8"
const PREFIX = "$";

bot.on('ready', () => {
    console.log("The bot is online!");
});

bot.login(process.env.BOT_TOKEN);