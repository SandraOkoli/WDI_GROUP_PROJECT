const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  //id will be provided by mongo
  name: { type: String, required: true },
  location: {
    lat: {type: Number},
    lng: {type: Number}
  },
  type: { type: String, required: true },
  description: { type: String },
  dateTime: { type: Date, required: true },
  owner: { type: String, required: true },
  attendees: { type: String } //we may need to change this to an array of users!
  //add comments here!
});

module.exports = mongoose.model('Event', eventSchema);
