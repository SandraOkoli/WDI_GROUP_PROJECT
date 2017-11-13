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

function eventsShow(req, res){
  Event
    .findById(req.params.id)
    .exec()
    .then(event =>{
      if(!event){
        return res.status(404).json({ message: 'Event not Found'});
      }
      return res.status(200).json(event);
    })
    .catch(err => res.status(500).json(err));
}

function eventsDelete(req, res){
  Event
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err));
}

function eventsUpdate(req, res){
  Event
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .exec()
    .then(event => res.status(200).json(event))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  index: eventsIndex,
  create: eventsCreate,
  show: eventsShow,
  delete: eventsDelete,
  update: eventsUpdate

};
