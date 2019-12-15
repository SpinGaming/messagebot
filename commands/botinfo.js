const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: 'botinfo',
    description: 'Displays Bot Info',
    execute(message, args){

        let embed = new Discord.RichEmbed()
            .setAuthor(bot.user.username, bot.user.displayAvatarURL)
            .setColor(0x00FF00)
            .addField('Version', version, true)
            .addField('Library', 'index.js',true)
            .addField('Developer', '<@366614368923942912>')
            .setFooter(`ID: ${bot.user.id} | Bot Created`)
            .setTimestamp(moment.utc(bot.user.createdAt).format('MM.DD.YYYY'));
    
        message.channel.send({ embed: embed });
    }
}