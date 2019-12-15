module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){

        message.channel.send("**" + "My ping is: " + Math.round(message.bot.ping) + "ms" + "**");
    }
}