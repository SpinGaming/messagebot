const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays Help Message',
    execute(message, args){

        const HelpEmbed = new Discord.RichEmbed()
        .setTitle("ℹ️ | Bot Help")
        .addField("Prefix", "$")
        .addField("$ping", "Displays Bot Ping", true)
        .addField("$botinfo", "Displays Bot Info", true)
        .addField("$ban", "Bans a member", true)
        .addField("$kick", "Kicks a member", true)
        .setThumbnail(bot.user.displayavatarURL)
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setTimestamp();
        message.channel.send({ embed: HelpEmbed });
    }
}