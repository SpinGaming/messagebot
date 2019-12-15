const Discord = require('discord.js');
const moment = require('moment')
var version = '1.0.1';
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
            .setTitle("Message Bot")
            .setThumbnail("http://icons.iconarchive.com/icons/martz90/hex/512/messages-icon.png")
            .setColor(0x00FF00)
            .addField('Uptime', uptime)
            .addField('Version', version, true)
            .addField('Library', 'index.js',true)
            .addField('Developer', '<@366614368923942912>')
            .setFooter("Message bot 2019")
            
        message.channel.send({ embed: embed });
    }
}