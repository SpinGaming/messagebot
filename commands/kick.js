const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '1.0.1';
module.exports = {
    name: 'kick',
    description: 'Kicks a person',
    execute(message, args) {

        const user = message.mentions.users.first();

        if (user) {
            const member = member.guild.member(user);

            if (member) {
                member.kick().then(() => {
                    message.reply(`Successfully kicked ${user.tag}`)
                }).catch(err => {
                    message.reply('Error2');
                    console.log(err);
                });
            } else {
                message.reply("Error3");
            }
        } else {
            message.reply("Error4");
        }

    }
}