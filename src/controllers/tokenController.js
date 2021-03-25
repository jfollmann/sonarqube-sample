const db = require('../database/db.json');
const { generateToken } = require('../helpers/jwt');

module.exports = {
  index: (req, res) => {
    const { login, password } = req.body;

    const [user] = db.filter((item) => item.login === login && item.password === password);

    if (!user)
      return res.status(404).json({ message: 'Registro não encontrado' });

    const token = generateToken(user);
    return res.json({ token })
  }
}