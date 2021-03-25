const db = require('../database/db.json');

module.exports = {
  index: (_req, res) => {
    return res.json(db);
  },
  show: (req, res) => {
    const { id } = req.params;

    const [user] = db.filter((item) => item.id === Number(id));
    if (!user)
      return res.status(404).json({ message: 'Registro não encontrado' });

    return res.json(user);
  }
}