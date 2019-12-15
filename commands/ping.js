module.exports = {
    name: 'ping',
    description: 'Says pong!',
    execute(message, args){
        const apiPing = Math.round(message.bot.ping); // This will round the api ping of the client
        const responseTime = Math.round(Date.now() - message.createdTimestamp); // This will round the response time between when the message was received and when the message was sent

        message.channel.send("**" + "My ping is: " + apiPing + "ms" + "**");
    }
}