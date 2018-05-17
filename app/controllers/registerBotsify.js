const mongoose = require('mongoose');

const Register = mongoose.model('Register');

module.exports = {
  async create(req, res, next) {
    try {
      const register = await Register.create({ content: ...req.body });
      return res.json(register);
    } catch (err) {
      return next(err);
    }
  },
};
