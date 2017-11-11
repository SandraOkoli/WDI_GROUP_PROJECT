const Event = require('../models/event');

function eventsIndex(req, res){
  Event
    .find()
    .exec()
    .then(events => res.status(200).json(events))
    .catch(err => res.status(500).json(err));
}

function eventsCreate(req, res){
  Event
    .create(req.body.event)
    .then(event => res.status(201).json(event))
    .catch(err => res.status(500).json(err));

}

module.exports = {
  index: eventsIndex,
  create: eventsCreate
};
