const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '1.0.1';
module.exports = {
    name: 'ban',
    description: 'Bans a person',
    execute(message, args){

if(member.hasPermissions('BAN_MEMBERS')){

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
message.delete();

                }).catch(err => {
                    const BanFailed = new Discord.RichEmbed()
                    .setTitle("❌ Failed Ban")
                    .setDescription(`Unable to ban ${user.tag}`)
                    .setColor('RED')
                    .setTimestamp();
                    message.channel.send({ embed: BanFailed});
message.delete();
                    console.log(err);
                });
            } else {
                message.reply("Must specify a person");
message.delete();
            }
        } else {
            message.reply("Must specify a person");
message.delete();
        }
} else {
message.reply("Insuffiecient Permissions");

    }
}
