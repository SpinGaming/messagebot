const Discord = require('discord.js');
module.exports = {
    name: 'setup',
    description: 'Displays Setup Help',
    execute(message, args) {

        if (message.member.roles.some(r => ["MessageBot"].includes(r.name))) {

            let messageCount = parseInt(args[1]) || 1;

            var deletedMessages = -1;

            message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
                messages.forEach(m => {
                    if(messages.author.id == bot.user.id){
                        message.delete().catch(console.error);
                        deletedMessages++;
                    }
                });
            }).then(() => {
                if(deletedMessages === -1) deletedMessages = 0
                let embed = new Discord.RichEmbed()
                .setAuthor(bot.user.id, bot.user.avatarURL)
                .setTitle("✅ | Successful Purge!")
                .setColor(0x00FF00)
                .setDescription(`✅ Purged \`${deletedMessages}\` messages.`)
                .setTimestamp();
                message.channel.send({ embed: embed })
                    .then(m => message.delete(2000));
            }).catch(console.error);

        }else {
            message.reply("Insuffiecient Permissions");

        }
    }
}