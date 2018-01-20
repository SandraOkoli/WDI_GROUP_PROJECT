const mongoose = require('mongoose');
// const express = require('express');
mongoose.Promise = require('bluebird');

const { env, db } = require('../config/environment');
const User = require('../models/user');
const Event = require('../models/event');
// const app             = express();
// const environment   = app.get('env');

// mongoose.connect(db[env], { useMongoClient: true });
mongoose.connect(db['development'], { useMongoClient: true });

User.collection.drop();
Event.collection.drop();

User.create([
  {
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjuaU0zipmxkwLunwn_H9WMHMWbM4FqwwibmmCveMdoD6DSWN',
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'donald.trump@aol.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    avatar:
      'https://user-images.githubusercontent.com/28314323/32336469-55698e72-bfe7-11e7-9d02-fdabd2a2d95d.jpg',
    firstName: 'Rupesh',
    lastName: 'Bhatti',
    email: 'rupesh.bhatti@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    avatar:
      'https://user-images.githubusercontent.com/28314323/32336479-57410a40-bfe7-11e7-87b9-18688869fa4a.jpg',
    firstName: 'Sandra',
    lastName: 'Okoli',
    email: 'sandra.okoli@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    avatar:
      'https://user-images.githubusercontent.com/28314323/32336499-5e015934-bfe7-11e7-989a-e9460c7f5c45.jpg',
    firstName: 'Nate',
    lastName: 'Lansdell-Welfare',
    email: 'nate.Lansdell-Welfare@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    avatar:
      'https://user-images.githubusercontent.com/28314323/32336531-725b4304-bfe7-11e7-9db0-9d4d4bc81a96.jpg',
    firstName: 'James',
    lastName: 'Tang',
    email: 'james.tang@email.com',
    password: 'password',
    passwordConfirmation: 'password'
  }
])
  .then(users => {
    console.log(`${users.length} users created!`);
    return Event.create([
      {
        name: 'Donald turns 90!',
        location: {
          lat: 51.553797,
          lng: -0.082898
        },
        attendeeLocationPreferences: [
          {
            attendee: [users[0].id],
            location: {
              lat: 50.55223,
              lng: -1.8798
            }
          },
          {
            attendee: [users[1].id],
            location: {
              lat: 50.55,
              lng: 21.8798
            }
          }
        ],
        type: 'Birthday',
        coverImage: 'https://uticket.ie/assets/29/img/background.jpg',
        description: "Donnie boy turns 90. Let's celebrate!",
        dateTime: Date('2017-12-15T19:00:00.000Z'),
        owner: users[0].id,
        attendees: [users[0].id, users[1].id, users[2].id],
        comments: [
          {
            createdBy: users[0].id,
            content: 'Great will be ready in 10 minutes'
          },
          {
            createdBy: users[1].id,
            content: 'OK see you soon'
          }
        ]
      },
      {
        name: 'GA Graduation drinks',
        location: {
          lat: 51.553797,
          lng: -0.082898
        },
        type: 'Party',
        coverImage:
          'https://nourish.schnucks.com/wp-content/uploads/2016/05/Grad6.jpg',
        description: 'Graduation party',
        dateTime: Date('2017-12-15T19:00:00.000Z'),
        owner: users[0].id,
        attendees: [users[0].id],
        comments: [
          {
            createdBy: users[0].id,
            content: 'Great will be ready in 10 minutes'
          },
          {
            createdBy: users[1].id,
            content: 'OK see you soon'
          }
        ]
      }
    ]);
  })
  .then(events => console.log(`${events.length} events created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
