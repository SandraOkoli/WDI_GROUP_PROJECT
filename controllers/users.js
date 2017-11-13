const User = require('../models/user');


function usersShow(req, res){
  User
    .findById(req.params.id)
    .exec()
    .then(user => res.status(200).json(user))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersUpdate(req,res){
  User
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .exec()
    .then(user => res.status(200).json(user))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersDelete(req,res){
  User
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json({message: 'Something went wrong.'}));
}

module.exports = {
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
