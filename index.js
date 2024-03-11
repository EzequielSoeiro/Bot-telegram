require("dotenv").config();

const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters")

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message("text"), async(ctx) => {
    console.log(ctx.message.text)
})

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
bot.launch();

console.log("Bot is ruuning...")