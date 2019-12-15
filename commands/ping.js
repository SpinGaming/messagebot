module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){
        const apiPing = Math.round(message.bot.ping); // This will round the api ping of the client

        message.channel.send("**" + "My ping is: " + apiPing + "ms" + "**");
    }
}