const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Iam Online Now!!!')
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '-';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0]
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'hello') {
        message.channel.send('Hello Human');
    }
})

bot.login("ODI3MDI5NjI1OTc2NTIwNzE0.YGVFXA.Kz7OSPSTUDgYf4oStdaHHB8jCJA")
