module.exports = {
  port: process.env.PORT || 4000,
  'secret': process.env.SECRET || 'wdi-project-3',
<<<<<<< HEAD
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/wdip3-development',
    test: 'mongodb://localhost/wdip3-test'
  }
=======
  // db: {
  //   production: process.env.MONGODB_URI,
  //   development: 'mongodb://localhost/wdip3-development',
  //   test: 'mongodb://localhost/wdip3-test'
  // }
  db: 'mongodb://localhost:27017/wdip3-api'
>>>>>>> 6e84bf546a4ba3f8c6cbb3841fc54a2a6f311c5a
};
