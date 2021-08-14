const { client, MessageMedia } = require('../server');
const { resolve } = require('path');

const whatWe = async (msg) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  client.setPrevMessage('whatWeDo');
  client.sendMessage(
    msg.from,
    '*PePoll Analytics LLP*' +
      '\n\n PePoll is a dynamic political consulting and political marketing agency hailing from Bengaluru.' +
      '\n We help political leaders to communicate with their people by providing the best research, communication and technical services.' +
      '\n\n\n *Social Media Marketing*' +
      '\n\n *Systematic Research and Analysis*' +
      '\n\n *Mass Media and Public Relations*' +
      '\n\n *Strategy at Constituency Level*' +
      '\n\n *War Room*' +
      '\n *0* - Back'
  );
};


module.exports = {
  whatWe,
};
