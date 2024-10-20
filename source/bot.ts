import { Bot, InlineKeyboard, } from "@grammyjs/bot";


const bot = new Bot("7593247270:AAF296ILhtKs3fBafeHqR_1XLOLz5Akx7PU"); // <-- put your bot token between the ""

const keyboard = new InlineKeyboard().text("📦", "parcel")


const replies: Record<string, string> = {
    "Привет!": "И тебе привет!",
    "Пока": "Ещё увидимся!",
    "Как дела?": "Всё отлично, а у тебя?",
  };

  bot.command("start", async (ctx) => {
    await ctx.reply("Выберите действие:", {
      reply_markup: keyboard, // Подключаем клавиатуру к сообщению
    });
  });

bot.callbackQuery("parcel", async (ctx) => {
    await ctx.answerCallbackQuery(); // Закрываем всплывающее окно
    await ctx.reply("Вам посылка!");  // Отправляем сообщение
  });



  bot.command("test", async (ctx) => {
    await ctx.replyWithInvoice(
      "Покупка нихуя", // title
      "Купите нихуя за одну звезду!", // description
      "book_purchase_payload", // payload
      "XTR", // currency
      [{ label: "Nothing", amount: 1 }],
    );
  });

bot.callbackQuery("book_purchase_payload", async (ctx) => {
    await ctx.answerPreCheckoutQuery(true);
    await ctx.answerCallbackQuery();
    await ctx.reply("Спасибо за покупку!");
  });

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



bot.start();