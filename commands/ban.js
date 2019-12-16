const user = message.mentions.users.first();
const banReason = args.slice(1).join(' ');
const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '1.0.1';
module.exports = {
    name: 'botinfo',
    description: 'Displays Bot Info',
    execute(message, args){

        if (!user) {
            try {
        
            if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
            
            user = message.guild.members.get(args.slice(0, 1).join(' '));
            user = user.user;
            } catch (error) {
            return message.reply('Couldn\' get a Discord user with this userID!');
            }
            }

            if(user === message.author) return message.channel.send("You can't ban yourself!");
            if(!reason) return message.reply("There must be a reason for this ban!");
            if(!message.guild.member(user).bannable) return message.reply("I cannot ban this person!");

            await message.guild.ban(user);

            const banConformationEmbed = new Discord.RichEmbed()
            .setColor('RED')
            .setDescription(`✅ ${user.tag} has been successfully banned!`);
            message.channel.send({ embed: banConformationEmbed });


            const modlogChannelID = '656168782963671063';
            if(modlogChannelID.length !== 0){
                if(!bot.channels.get(modlogChannelID)) return undefined;

                const banConformationEmbedModlog = new Discord.RichEmbed()
                .setAuthor(`Banned by **${message.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
                .setThumbnail(user.displayAvatarURL)
                .setColor('RED')
                .setTimestamp()
                .setDescription(`**Action**: Ban **User**: ${user.username}#${user.discriminator} (${user.id})
                **Reason**: ${reason}`);
                bot.channels.get(modlogChannelID).send({ embed: banConformationEmbedModlog });
            }

    }
}
