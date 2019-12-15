const Discord = require('discord.js');
module.exports = {
    name: 'botinfo',
    description: 'Displays Bot Info',
    execute(message, args){

        function convertMS(ms) {
            var d, h, m, s;
            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            d = Math.floor(h / 24);
            h = h % 24;
            return {
                d: d
                , h: h
                , m: m
                , s: s
            };
        };
    
        let u = convertMS(bot.uptime);
        let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"
    
        const duration = moment.duration(bot.uptime)
    
        let member = message.guild.member
        user = member.user;
    
        let embed = new Discord.RichEmbed()
            .setAuthor(bot.user.username, bot.user.displayAvatarURL)
            .setColor(0x00FF00)
            .addField('Uptime', uptime)
            .addField('Version', version, true)
            .addField('Library', 'index.js',true)
            .addField('Developer', '<@366614368923942912>')
            .setFooter(`ID: ${bot.user.id} | Bot Created`)
            .setTimestamp(moment.utc(bot.user.createdAt).format('MM.DD.YYYY'));
    
        message.channel.send({ embed: embed });
    }
}