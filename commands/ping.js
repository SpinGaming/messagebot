module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){
        const embed = new Discord.RichEmbed()
                .setTitle("🏓 Pong!")
                .setColor(0x7289DA)
                .setDescription("Ping")
                .setThumbnail("http://icons.iconarchive.com/icons/martz90/hex/512/messages-icon.png")
                .setFooter('ID: '+ bot.user.id +" | Message Bot By <@366614368923942912>")
                .setTimestamp(Date.now());
            message.channel.sendEmbed(embed);
    }
}