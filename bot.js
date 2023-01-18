if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', async (ctx) => {
    // resend existing file by file_id
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://fish-text.ru/get", false ); // false for synchronous request
    xmlHttp.send( null );
    let text = JSON.parse(xmlHttp.responseText).text;
    await ctx.replyWithPhoto({
      url: 'https://picsum.photos/300/300/?blur',
      filename: 'kitten.jpg',
    }, {caption: text});
  })

bot.launch();

// Enable graceful stop