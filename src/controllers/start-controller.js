const { client } = require('../server');

module.exports = async (msg) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();
  client.setPrevMessage('start');

  client.sendMessage(
    msg.from,
    '\n\nHello Im Nibu, your *virtual assistant* at *Pepoll Analytics LLP* 😄' +
    '\n\nI have selected below the main subjects that usually ask me, *type the number* corresponding to the desired option.' +
    '\n\n*1* - About Us' +
    '\n*2* - What We Do' +
    '\n*3* - Download *Company Profile*' +
    '\n*4* - Contact Us'
  );
};
