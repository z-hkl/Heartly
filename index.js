const TelegramApi = require('node-telegram-bot-api')

const token = '7664779874:AAHDQguSqAUovVUwkbUoTETxmnPvo_CRFIY'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', msg => {
    console.log(msg)
})