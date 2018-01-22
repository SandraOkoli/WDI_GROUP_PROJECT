const mongoose = require('mongoose');
// const express = require('express');
mongoose.Promise = require('bluebird');

const { db } = require('../config/environment');
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
      'http://82772485410a5117eda7-792156a48c7991e3bdc7f9c2a0b3b66e.r34.cf3.rackcdn.com/1406_t_d591d119-d3d9-43ad-9a5c-dad89874639e.jpg',
    firstName: 'Camille',
    lastName: 'Rowe',
    email: 'camille@rowe.com',
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
        name: "Camille's 25th Birthday",
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
        description: "Camille is turning 25. Let's celebrate!",
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
        name: "Cam's gig",
        location: {
          lat: 51.521179,
          lng: -0.072823
        },
        type: 'Gig',
        coverImage:
          'https://cdn-images-1.medium.com/max/1920/0*E1GExV0leeKogRgd.',
        description: "Cam's first big gig",
        dateTime: Date('2017-02-1T19:00:00.000Z'),
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
      },
      {
        name: "Fran's hen party",
        location: {
          lat: 51.514105,
          lng: -0.145477
        },
        type: 'Hen Party',
        coverImage:
          'https://garethrhodes.files.wordpress.com/2014/01/f4133_bridesmaids-1-912409.jpeg',
        description: "Fran's getting married!",
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
      },
      {
        name: 'After work drinks',
        location: {
          lat: 51.510903,
          lng: -0.124801
        },
        type: 'Cocktail night',
        coverImage:
          'http://cdn.skim.gs/images/sangria-cocktail_e9s3m1/3-spiced-rum-cocktails',
        description: 'Drinks and catch up after work',
        dateTime: Date('2018-01-23T19:00:00.000Z'),
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
      },
      {
        name: 'Crazy golf',
        location: {
          lat: 51.514105,
          lng: -0.145477
        },
        type: 'Activities',
        coverImage: 'https://pbs.twimg.com/media/CrREcBQVUAAVqVw.jpg',
        description: 'Fancy playing so crazy golf!',
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
