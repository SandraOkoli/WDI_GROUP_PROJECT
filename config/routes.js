const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
// const users = require('../controllers/users');
// const events = require('../controllers/events');

router.route('/register')
  .post(authentications.register);


module.exports = router;
