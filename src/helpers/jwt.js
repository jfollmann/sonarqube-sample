const jwt = require('jsonwebtoken')

const configs = {
  secret: 'ASKn184n14umlk914m88y4**!&$ll',
  exp: Math.floor(Date.now() / 1000) + (60 * 60), //1hr
}

const generateToken = (payload) => {
  const { secret, exp } = configs;

  return jwt.sign({ data: payload, exp }, secret)
}

module.exports = {
  generateToken
}