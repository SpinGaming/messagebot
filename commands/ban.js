const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '1.0.1';
module.exports = {
    name: 'ban',
    description: 'Bans a person',
    execute(message, args){

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.ban(`Banned by: ${message.author.tag}`).then(() => {
                    const BanSuccess = new Discord.RichEmbed()
                    .setTitle("✅ Successful Ban")
                    .setDescription(`Successfully banned ${user.tag}`)
                    .setColor(0x00FF00)
                    .setTimestamp();
                    message.channel.send({ embed: BanSuccess});

                }).catch(err => {
                    const BanFailed = new Discord.RichEmbed()
                    .setTitle("❌ Failed Ban")
                    .setDescription(`Unable to ban ${user.tag}`)
                    .setColor('RED')
                    .setTimestamp();
                    message.channel.send({ embed: BanFailed});
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
