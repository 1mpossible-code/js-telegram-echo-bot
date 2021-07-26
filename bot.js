import {Telegraf} from 'telegraf'
import dotenv from "dotenv";

// Configure 'dotenv'
dotenv.config();

// Create bot instance
const bot = new Telegraf(process.env.BOT_TOKEN);

// Text handler. Send reply message
// with the same text each time
bot.on('text', ctx => ctx.reply(ctx.message.text))

// Launch bot
bot.launch().then(() => console.log('Bot is ONLINE'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))