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
                member.kick('You were kicked for trolling!').then(() => {
                    message.reply(`Successfully kicked ${user.tag}`)
                }).catch(err => {
                    message.reply('I was unable to kick the member');
                    console.log(err);
                });
            } else {
                message.reply("That user isn\'t in this server!");
            }
        } else {
            message.reply("You need to specify a person!");
        }

    }
}