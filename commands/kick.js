const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '1.0.1';
module.exports = {
    name: 'kick',
    description: 'Kicks a person',
    execute(message, args) {

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick(`Kicked by: ${message.author.tag}`).then(() => {
                    const KickSuccess = new Discord.RichEmbed()
                    .setTitle("✅ Successful Kick")
                    .setDescription(`Successfully kicked ${user.tag}`)
                    .setColor(0x00FF00)
                    .setTimestamp();
                    message.channel.send({ embed: KickSuccess});
message.delete();

                }).catch(err => {
                    const KickFailed = new Discord.RichEmbed()
                    .setTitle("❌ Failed Kick")
                    .setDescription(`Unable to kick ${user.tag}`)
                    .setColor('RED')
                    .setTimestamp();
                    message.channel.send({ embed: KickFailed});
message.delete();
                    console.log(err);
                });
            } else {
                message.reply("Must specify a person");
            }
        } else {
            message.reply("Must specify a person");
        }

    }
}
