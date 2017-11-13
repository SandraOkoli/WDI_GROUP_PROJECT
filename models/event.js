const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentsSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

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
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, //changed from string to objectId
  attendees: { type: String },//we may need to change this to an array of users!
  comments: [commentsSchema]
});



module.exports = mongoose.model('Event', eventSchema);
