const { client, MessageMedia } = require('../server');
const { resolve } = require('path');

const aboutUs = async (msg) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  client.setPrevMessage('aboutUs');
  client.sendMessage(
    msg.from,
    '*PePoll Analytics LLP*' +
      '\n\n PePoll is a dynamic political consulting and political marketing agency hailing from Bengaluru.' +
      '\n We help political leaders to communicate with their people by providing the best research, communication and technical services.' +
      '\n\n\n *WANT TO KNOW MORE?*' +
      '\n\n *1* - Yes' +
      '\n *0* - Back'
  );
};



const downloadPdf = async (msg) => {
  client.setPrevMessage('download');
   msg.reply('Wait, processing the document... 😙');
  const media = MessageMedia.fromFilePath(resolve('public/documents/DossierEnglish.pdf'));
      client.sendMessage(msg.from, media);
};















const choseAboutUs = async (msg) => {
  const media = MessageMedia.fromFilePath(resolve('public/documents/DossierEnglish.pdf'));
  switch (msg.body) {
    case '1':
      msg.reply('Wait, processing the document... 😙');
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
  aboutUs,
  choseAboutUs,
  downloadPdf,
};
