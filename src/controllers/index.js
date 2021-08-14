const startController = require('./start-controller');
const { clientUser, choseClientUser } = require('./client-user-controller');
const { newUser, choseNewUser } = require('./new-user-controller');
const { aboutUs, choseAboutUs, downloadPdf } = require('./about-controller');
const { contact, choseContact } = require('./contact-controller');
const { whatWe } = require('./whatwedo-controller');

module.exports = {
  startController,
  clientUser,
  choseClientUser,
  newUser,
  choseNewUser,
  aboutUs,
  choseAboutUs,
  contact,
  choseContact,
  whatWe,
  downloadPdf,

};
