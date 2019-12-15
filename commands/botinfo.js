const Discord = require('discord.js');
const moment = require('moment')
const bot = new Discord.Client();
var version = '1.0.1';
module.exports = {
    name: 'botinfo',
    description: 'Displays Bot Info',
    execute(message, args){

        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
    
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        let embed = new Discord.RichEmbed()
            .setTitle("Message Bot")
            .setThumbnail("http://icons.iconarchive.com/icons/martz90/hex/512/messages-icon.png")
            .setColor(0x00FF00)
            .addField('Uptime', uptime)
            .addField('Version', version, true)
            .addField('Library', 'index.js',true)
            .addField('Developer', '<@366614368923942912>')
            .setFooter("Message bot 2019")

        message.channel.send({ embed: embed });
    }
}
