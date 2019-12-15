module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){
            let PingEmbed = new RichEmbed()
                .setTitle("🏓 Pong!")
                .setColor(0x00FF00)
                .setDescription("Ping: ")
                .setFooter("Message Bot Created By Joshh#0922")
                .setTimestamp(Date.now());
        message.channel.send(PingEmbed);
    }
}