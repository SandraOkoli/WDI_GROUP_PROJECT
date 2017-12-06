const Event = require('../models/event');

function eventsIndex(req, res) {
  Event.find()
    .exec()
    .then(events => res.status(200).json(events))
    .catch(err => res.status(500).json(err));
}

function eventsCreate(req, res) {
  Event.create(req.body)
    .then(event => res.status(201).json(event))
    .catch(err => res.status(500).json(err));
}

function eventsShow(req, res) {
  Event.findById(req.params.id)
    .populate('owner')
    .populate('attendees')
    .populate('comments.createdBy')
    .exec()
    .then(event => {
      if (!event) {
        return res.status(404).json({ message: 'Event not Found' });
      }
      return res.status(200).json(event);
    })
    .catch(err => res.status(500).json(err));
}

function eventsDelete(req, res) {
  Event.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err));
}

function eventsUpdate(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(event => res.status(200).json(event))
    .catch(err => res.status(500).json(err));
}

function commentsCreate(req, res, next) {
  Event.findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(event => {
      if (!event) return res.notFound();

      event.comments.push(req.body);
      event.save();

      return res.status(201).json(event);
    })
    .catch(next);
}

function commentsDelete(req, res, next) {
  Event.findById(req.params.id)
    .exec()
    .then(event => {
      if (!event) return res.notFound();
      // if (!event.belongsTo(req.user)) return res.unauthorized('You do not have permission to delete this comment');
      event.comments.id(req.params.commentId).remove();

      return event.save();
    })
    .then(event => {
      return res.status(201).json(event);
    })
    .catch(next);
}

function addAttendeeLocationPreference(req, res, next) {
  Event.findById(req.params.id)
    .exec()
    .then(event => {
      if (!event) return res.notFound();

      event.attendeeLocationPreferences.push(req.body);
      event.save();
    })
    .then(event => {
      return res.status(201).json(event);
    })
    .catch(next);
}

function deleteAttendeeLocationPreference(req, res, next) {
  Event.findById(req.params.id)
    .exec()
    .then(event => {
      if (!event) return res.notFound();
      event.attendeeLocationPreferences.id(req.params.suggestionId).remove();

      return event.save();
    })
    .then(event => {
      return res.status(201).json(event);
    })
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  create: eventsCreate,
  show: eventsShow,
  delete: eventsDelete,
  update: eventsUpdate,
  createComment: commentsCreate,
  deleteComment: commentsDelete,
  addAttendeeLocPref: addAttendeeLocationPreference,
  deleteAttendeeLocPref: deleteAttendeeLocationPreference
};
