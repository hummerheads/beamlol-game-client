import { Telegraf } from 'telegraf';

const bot = new Telegraf('7474422454:AAE9xa-0_YXi9VaOtcR1AudDmX8MniOygrg'); // Replace with your bot token
const webLink = "https://astounding-licorice-1ef290.netlify.app/";

bot.start((ctx) => {
    const userId = ctx.from.id; // Get the user's Telegram ID

    ctx.reply('Welcome! Click the button below to visit our site:', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Play", 
                        web_app: { url: `${webLink}?user_id=${userId}` } // Pass user ID as a query parameter
                    }
                ]
            ]
        }
    });
});

bot.launch();