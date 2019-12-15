const Discord = require('discord.js');
const bot = './index.js/';
var version = './index.js/';
module.exports = {
    name: 'botinfo',
    description: 'Displays Bot Info',
    execute(message, args){

        let embed = new Discord.RichEmbed()
            .setColor(0x00FF00)
            .addField('Version', version, true)
            .addField('Library', 'index.js',true)
            .addField('Developer', '<@366614368923942912>')
            .setFooter(`ID: ${bot.user.id} | Bot Created`)
            .setTimestamp(moment.utc(bot.user.createdAt).format('MM.DD.YYYY'));
    
        message.channel.send({ embed: embed });
    }
}