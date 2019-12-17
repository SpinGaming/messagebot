const Discord = require('discord.js');
module.exports = {
    name: 'setup',
    description: 'Displays Setup Help',
    execute(message, args) {

            let embed = new Discord.RichEmbed()
                .setTitle('ℹ️ | Setup Help')
                .setColor('BLUE')
                .addField("Kick & Ban Perms", "To give a member kick or ban permission, you must create a role named 'MessageBot' and give that role to the member. The bot will only accept this role as a valid admin.")
                .setTimestamp();

            message.send({ embed: embed })
            message.delete();
        
    }
}