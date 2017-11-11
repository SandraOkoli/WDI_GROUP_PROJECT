const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/environment');

function authenticationsRegister(req, res) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ userId: user.id }, secret, {expiresIn: '1hr'});

      return res.status(201).json({
        message: `Welcome ${user.firstName}`,
        token,
        user
      });
    })
    .catch(()=> res.status(500).json({
      message: 'Something went wrong!'
    }));
}


module.exports = {
  register: authenticationsRegister
};
