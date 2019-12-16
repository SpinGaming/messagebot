const Discord = require('discord.js');
module.exports = {
    name: 'ded',
    description: 'Says ded',
    execute(message, args){
        
        startTime = Date.now();
    message.delete();
    message.channel.send("Checking. . .").then((message) => {
        endTime = Date.now();

        let ping = Math.round(endTime - startTime)
        let rounded = ping / 1000
        let member = message.author

        let embed = new Discord.RichEmbed()
        .setTitle('⚰️ Ded!')
        .setColor(0xFFFF0000)
        .addField("You're Ded!")
        .setDescription(`Current ping: **${ping}ms**`)
        .setTimestamp();

        message.edit({ embed: embed })
    });
    }
}
