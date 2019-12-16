const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "$";
const moment = require('moment');

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on('ready', () => {
    console.log('I am ready!');
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'ping':
            bot.commands.get('ping').execute(message, args);
            break;

        case 'botinfo':
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
                .setColor(config.color)
                .addField('Uptime', uptime)
                .addField('Version', config.version, true)
                .addField('Library', 'Discord.JS', true)
                .addField('Developer', '<@264384820698677249>')
                .setFooter(`ID: ${bot.user.id} | Bot Created`)
                .setTimestamp(moment.utc(bot.user.createdAt).format('MM.DD.YYYY'));
    
            message.channel.send({ embed: embed });
            break;

        case 'ban':
            bot.commands.get('ban').execute(message, args);
            break;

        case 'kick':
            bot.commands.get('kick').execute(message, args);
            break;

        case 'help':
            const HelpEmbed = new Discord.RichEmbed()
        .setTitle("ℹ️ | Bot Help")
        .setColor('BLUE')
        .addField("Prefix", "$")
        .addField("$ping", "Displays Bot Ping", true)
        .addField("$botinfo", "Displays Bot Info", true)
        .addField("$ban", "Bans a member", true)
        .addField("$kick", "Kicks a member", true)
        .setThumbnail(bot.user.displayavatarURL)
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setTimestamp();
        message.channel.send({ embed: HelpEmbed });
            break;

    }
})

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
