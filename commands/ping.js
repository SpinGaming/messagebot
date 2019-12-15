module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){

        message.channel.send("My ping is: " + message.bot.ping + "ms!");
    }
}