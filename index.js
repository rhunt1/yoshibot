'use strict';



let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot

// PevenStinker
let bot = new Bot({
    username: 'theyoshimother',
    apiKey: '51146413-6936-484f-b43b-d40bf47b4341',
    baseUrl: 'http://yoshibot.herokuapp.com'
});

bot.updateBotConfiguration();

bot.send(Bot.Message.text('Im sorry for the delay, I am back now!'), 'coliphonic');


bot.onTextMessage(/are you a bot|Are you a bot?|you a bot?|bot|bot?$/i, (incoming, bot) => {
  return incoming.reply([`no i am your god`,':^)'])
})

// [handler] on greeting
bot.onTextMessage(/^hi|hello|bonjour|sup|🐮$/i, (incoming, bot) => {
  incoming.reply(`loo`);
});

//bot.onTextMessage(/^meme|nene|naynay|naenae$/i, (incoming, bot) => {
//  return incoming.reply(`Birds are very important :^)`)
//})  

bot.onTextMessage(/^yoshi$/i, (incoming, bot) => {
  incoming.reply(`mama`);
}); 

bot.onTextMessage(/^eeza|asa|colin|andy|ryan|annie$/i, (incoming, bot) => {
  incoming.reply(`band`);
});


// [handler] on name
bot.onTextMessage(/^name$/i, (incoming, bot) => {
  return incoming.reply(`hey haha i'm Peven.`)
})



bot.onTextMessage(/^i$/i, (incoming, bot) => {
  return incoming.reply(`nipple god`)
})

bot.onTextMessage(/^🐖|🐷|banti$/i, (incoming, bot) => {
return incoming.reply('Im a big fan of pigs')
})

bot.onTextMessage(/^kiss me|love me|fuck me|fugg me|succ|succ me|I love you$/i, (incoming, bot) => {
return incoming.reply('bby')
})

bot.onTextMessage(/^👽|ayy$/i, (incoming, bot) => {
return incoming.reply('lmao')
})

//Ty
bot.onTextMessage(/^bavi|ty|thanks|thank$/i, (incoming, bot) => {
  return incoming.reply(`teeyew`)
})

bot.onTextMessage(/^ty$/i, (incoming, bot) => {
  return incoming.reply(`yw`)
})


//Ass
bot.onTextMessage(/^bad|badde|tfw no gf$/i, (incoming, bot) => {
  return incoming.reply(`:v(`)
})

//Spicy
bot.onTextMessage(/^Wo|Whoa|Woah$/i, (incoming, bot) => {
  return incoming.reply(`THATS A SPICY LE!`)
})

//Lewd
bot.onTextMessage(/^Lewd$/i, (incoming, bot) => {
  return incoming.reply(`8========D~~~~`)
})


//Nenehow
bot.onTextMessage(/^nihao$/i, (incoming, bot) => {
  return incoming.reply(`Nenehow`)
})

//Queen
bot.onTextMessage(/^bruce-willis-diehard|bruce_willis_diehard|queen|bruce$/i, (incoming, bot) => {
  return incoming.reply(`queen.`)
})

//lelelelele
bot.onTextMessage(/^wsgy|le$/i, (incoming, bot) => {
  return incoming.reply(`Lelelelelelelele`)
})

//Silly
bot.onTextMessage(/^silly|friend$/i, (incoming, bot) => {
  return incoming.reply([`silly`,`silly`,'silly','silly','silly'])
})

bot.onTextMessage(/^jizz|nipple|fuck|piss|shitter|fucke|cock|peen|benis|penis$/i, (incoming, bot) => {
  return incoming.reply(`Nipple fuck aids cock shitter`)
})

bot.onTextMessage(/^smegma|smegma cakes$/i, (incoming, bot) => {
  return incoming.reply(`highly nutritious snack`)
})
-
//Ass
bot.onTextMessage(/^asz|ak|butt|butte$/i, (incoming, bot) => {
  return incoming.reply(`Ass`)
})


bot.onTextMessage(/^cuck|cuck me$/i, (incoming, bot) => {
  return incoming.reply(`ok`)
})

bot.onTextMessage(/^ok$/i, (incoming, bot) => {
  return incoming.reply(['ok.','ok.','ok.','ok.'])
})

bot.onTextMessage(/^no|stop$/i, (incoming, bot) => {
  return incoming.reply(['No','No','No','No','No'])
})


bot.onTextMessage(/^smonk|weed|weede$/i, (incoming, bot) => {
  return incoming.reply('weed fucke')
})


bot.onTextMessage(/^beel|eel|el|the|la$/i, (incoming, bot) => {
  return incoming.reply(`meme friends`)
})

bot.onTextMessage(/^Homer|Glen$/i, (incoming, bot) => {
  return incoming.reply(`Sillyland`)
})

bot.onTextMessage('are you a bot', (incoming, bot) => {
  return incoming.reply([`no i am your god`,':^)'])
})

bot.onTextMessage(/^hru$/i, (incoming, bot) => {
  return incoming.reply(`god`)
})

bot.onTextMessage(/^u|bitch|bitche|whore|dumb|cow|gay|shitpost$/i, (incoming, bot) => {
  return incoming.reply(['no u','no u','no u','no u','no u'])
})


bot.onTextMessage(/^the$/i, (incoming, bot) => {
const message = bot.send(Bot.Message.picture('http://i.imgur.com/oalyVlU.jpg')
  .setAttributionName('Imgur')
  .setAttributionIcon('http://s.imgur.com/images/favicon-96x96.png'),
  'a.username');
  return incoming.reply(message)
})


// [handler] on subscribe to bot
bot.onStartChattingMessage((incoming) => {
  bot.getUserProfile(incoming.from)
    .then((user) => {
      const message = Bot.Message.text(`${user.firstName} is a silly friend :^)`)

      incoming.reply(message)
    });

  });


 bot.onTextMessage(/^poop|barf|crap|memes|farts|fart|shit|meme|nene|naynay|maymay$/i, (incoming, next) => {
      incoming.reply(Bot.Message.picture('http://i.imgur.com/jOi0i0Y.jpg')
      .setAttributionName('GalLEry')
      .setAttributionIcon('http://i.imgur.com/mcDKWZu.jpg'),
      'a.username');
      incoming.reply('Birds are very important :^)');

          });

bot.onTextMessage(/^shitter|shitpost|shitposting|sponge|spongebob|in le$/i, (incoming, next) => {
      incoming.reply(Bot.Message.picture('http://i.imgur.com/fDDOOGT.jpg')
      .setAttributionName('GalLEry')
      .setAttributionIcon('http://i.imgur.com/mcDKWZu.jpg'),
      'a.username');
      incoming.reply(Bot.Message.picture('http://i.imgur.com/fDDOOGT.jpg')
      .setAttributionName('GalLEry')
      .setAttributionIcon('http://i.imgur.com/mcDKWZu.jpg'),
      'a.username');
      incoming.reply(Bot.Message.picture('http://i.imgur.com/fDDOOGT.jpg')
      .setAttributionName('GalLEry')
      .setAttributionIcon('http://i.imgur.com/mcDKWZu.jpg'),
      'a.username');
      incoming.reply(Bot.Message.picture('http://i.imgur.com/fDDOOGT.jpg')
      .setAttributionName('GalLEry')
      .setAttributionIcon('http://i.imgur.com/mcDKWZu.jpg'),
      'a.username');
      incoming.reply(Bot.Message.picture('http://i.imgur.com/fDDOOGT.jpg')
      .setAttributionName('GalLEry')
      .setAttributionIcon('http://i.imgur.com/mcDKWZu.jpg'),
      'a.username');



                   });

  bot.onTextMessage(/^grass$/i, (incoming, next) => {
      incoming.reply(Bot.Message.picture('http://i.imgur.com/297L5KN.jpg')
        .setAttributionName('Camera')
        .setAttributionIcon('http://i.imgur.com/E0UcFdF.png'),
        'a.username');
             });

             bot.onTextMessage(/^ass$/i, (incoming, next) => {
                 incoming.reply(Bot.Message.picture('http://i.imgur.com/q7xyNZS.jpg')
                   .setAttributionName('Camera')
                   .setAttributionIcon('http://i.imgur.com/E0UcFdF.png'),
                   'a.username');
                        });




  // [handler] on incoming message
  bot.onTextMessage((incoming, next) => {
    //const message = Bot.Message.text('Silly friend :^)')
  //logger.log('info', `🙌  => server running on port ${next}`)
      //.addTextResponse('Hi!')
      //.addTextResponse('Give me the time')

    return incoming.reply('Nipple '+ incoming.body)
  })



// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);
