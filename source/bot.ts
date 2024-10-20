import { Bot } from "@grammyjs/bot";


const bot = new Bot("7593247270:AAF296ILhtKs3fBafeHqR_1XLOLz5Akx7PU"); // <-- put your bot token between the ""

const replies: Record<string, string> = {
    "Привет!": "И тебе привет!",
    "Пока": "Ещё увидимся!",
    "Как дела?": "Всё отлично, а у тебя?",
  };

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

// bot.on("message:text", async (ctx) => {
//     if (ctx.message.text === "Покажи стикер") {
//       // Ответить стикером
//       await ctx.replyWithSticker("CAACAgIAAxkBAAMLZxUZga2vQ_6WRs2XWwb_hEL773AAAvkHAAJFUZMOYcv-eWLVIEY2BA");
//     }
//   });

  bot.on("message:text", async (ctx) => {
    const message = ctx.message.text;
  
    if (message === "Покажи стикер") {
        await ctx.replyWithSticker("CAACAgIAAxkBAAMLZxUZga2vQ_6WRs2XWwb_hEL773AAAvkHAAJFUZMOYcv-eWLVIEY2BA");
        return;
    }
    // Проверяем, есть ли ответ на данное сообщение
    const reply = replies[message];
    
    if (reply) {
      await ctx.reply(reply); // Отправляем ответ
    } else {
      await ctx.reply("Я не знаю, что ответить на это сообщение."); // Ответ по умолчанию
    }
  });


// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();