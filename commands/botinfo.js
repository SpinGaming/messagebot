const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '1.0.1';
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
            
        message.channel.send({ embed: embed });
    }
}