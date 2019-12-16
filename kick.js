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
                member.kick('You were kicked').then(() => {
                    message.reply(`Successfully kicked ${user.tag}`)
                }).catch(err => {
                    message.reply('Unable to kick user');
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