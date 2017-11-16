const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db } = require('../config/environment');
const User = require('../models/user');
const Event = require('../models/event');

mongoose.connect(db['development'], { useMongoClient: true });

User.collection.drop();
Event.collection.drop();

User
  .create([{
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjuaU0zipmxkwLunwn_H9WMHMWbM4FqwwibmmCveMdoD6DSWN',
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'donald.trump@aol.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    avatar: 'https://user-images.githubusercontent.com/28314323/32336469-55698e72-bfe7-11e7-9d02-fdabd2a2d95d.jpg',
    firstName: 'Rupesh',
    lastName: 'Bhatti',
    email: 'rupesh.bhatti@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    avatar: 'https://user-images.githubusercontent.com/28314323/32336479-57410a40-bfe7-11e7-87b9-18688869fa4a.jpg',
    firstName: 'Sandra',
    lastName: 'Okoli',
    email: 'sandra.okoli@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    avatar: 'https://user-images.githubusercontent.com/28314323/32336499-5e015934-bfe7-11e7-989a-e9460c7f5c45.jpg',
    firstName: 'Nate',
    lastName: 'Lansdell-Welfare',
    email: 'nate.Lansdell-Welfare@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    avatar: 'https://user-images.githubusercontent.com/28314323/32336531-725b4304-bfe7-11e7-9db0-9d4d4bc81a96.jpg',
    firstName: 'James',
    lastName: 'Tang',
    email: 'james.tang@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);
    return Event
      .create([{
        name: 'Donald turns 90!',
        location: {
          lat: 51.553797,
          lng: -0.082898
        },
        type: 'Birthday',
        coverImage: 'http://www.sickchirpse.com/wp-content/uploads/2017/01/Trump-Baked.jpg',
        description: 'Donnie boy turns 90. Let\'s celebrate!',
        dateTime: 'December 13, 2017 20:00:00',
        owner: users[0].id,
        attendees: users[0].id ,
        comments: {
          createdBy: users[0].id,
          content: 'Great will be ready in 10 minutes',
          timeStamp: 'December 13, 2017 20:00:00'
        }
      },{
        name: 'GA Graduation drinks',
        location: {
          lat: 51.553797,
          lng: -0.082898
        },
        type: 'Party',
        coverImage: 'https://uticket.ie/assets/29/img/background.jpg',
        description: 'Graduation party',
        dateTime: 'December 15, 2017 19:00:00',
        owner: users[0].id,
        attendees: users[0].id,
        comments: {
          createdBy: users[0].id,
          content: 'Great will be ready in 10 minutes',
          timeStamp: ''
        }
      }]);
  })
  .then((events) => console.log(`${events.length} events created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
