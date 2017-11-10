const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  //id will be provided by mongo
  name: { type: String, required: true },
  location: { type: String, required: true},
  type: { type: String, required: true },
  description: { type: String },
  dateTime: { type: Date, required: true },
  owner: { type: String, required: true },
  attendees: { type: String }
});

module.exports = mongoose.model('Event', eventSchema);
