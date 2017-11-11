const Event = require('../models/event');

function eventsIndex(req, res){
  Event
    .find()
    .exec()
    .then(events => res.status(200).json(events))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

module.exports = {
  index: eventsIndex
};
