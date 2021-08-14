const { client, MessageMedia } = require('../server');
const { resolve } = require('path');

const contact = async (msg) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  client.setPrevMessage('contact');
  client.sendMessage(
    msg.from,
    '*Pepoll Analytics LLP*' +
      '\n\n 558 3rd Floor VBR Ruddhi, 9th Cross Rd, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560076' +
      '\n☎️ *telephone* - +91 98448 93339 ' +
      '\n✉️ *E-mail* - pepollanalytics@gmail.com' +
      '\n *0* - Back'
  );
};

const choseContact = async (msg) => {
  const media = MessageMedia.fromFilePath(resolve('public/images/mapa.jpg'));
  switch (msg.body) {
    case '1':
      msg.reply('Wait, processing the image... 😙');
      client.sendMessage(msg.from, media);
      break;
    default:
      client.sendMessage(
        msg.from,
        'OPSS! 😅 I apologize. but you typed something invalid, type *BACK* if you have any questions'
      );
  }
};

module.exports = {
  contact,
  choseContact
};
