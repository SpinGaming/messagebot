module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setColor(0x00FF00)
        .addField("Ping: ")
        .addField('Developer', '<@366614368923942912>')
        .setFooter(`ID: ${bot.user.id} | Bot Created`)
        .setTimestamp(moment.utc(bot.user.createdAt).format('MM.DD.YYYY'));

    message.channel.send({ embed: embed });
    }
}