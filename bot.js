import {Telegraf} from 'telegraf'
import dotenv from "dotenv";

// Configure 'dotenv'
dotenv.config();

// Create bot instance
const bot = new Telegraf(process.env.BOT_TOKEN);

// Bot 'start' command handler
bot.command('start', (ctx) => {
    // Send message
    ctx.reply('Hello!');
})

// Echo handler
bot.on('text', ctx => {
    // Reply message text
    ctx.reply(ctx.message.text);
})

// Launch bot
bot.launch().then(() => console.log('Bot is ONLINE'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))