const { Thought, User} = require('../models')

module.exports = {
  //GET all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
    .then((thoughtData) => res.json(thoughtData))
    .catch((err) => {
      console.log(err)
      res.json(400).json(err)
    })
  },

  // GET thought by id
  getThoughtById(req, res) {
    Thought.findOne({_id: req.params.id})
    .then((thoughtData) => {
      if (!thoughtData) {
        res.status(404).json({message: "No thought with this id"})
        return;
      }
      res.json(thoughtData)
    });
  },

  //POST create thought
  createThought(req, res) {
    Thought.create(req.body)
    .then(({_id}) => {
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        { $push: { thoughts: _id }},
        {new: true}
      )
    })
    .then((thought) => res.json(thought))
    .catch((err) => res.status(400).json(err))
  },

  // POST add reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$push: { reactions: req.body}},
      {new: true}
    )
    .then(thoughtData => {
      if (!thoughtData) {
        res.status(404).json({message: "no reaction with this Id found"})
        return;
      }
      res.json(thoughtData);
    })
    .catch((err) => res.json(err))
  },

  // PUT  update thought by Id
  updateThought(req, res) {
  Thought.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then((thoughtData) => {
    if (!thoughtData) {
      res.status(404).json({ message: "no thoughts found with this id" });
      return;
    }
    res.json(thoughtData);
  })
  .catch((err) => res.status(400).json(err));
  },

//DELETE thought 
  deleteThought(req, res) {
  //deletes the doc while returning its data
  //**use findOneAndRemove
  Thought.findOneAndRemove({_id: req.params.id})
  .then((delThought) => {
    if (!delThought) {
      return res.status(404).json({message: "no thought found with that id"});
    }
    return User.findOneAndUpdate(
      {thoughts: req.params.id},
      {$pull: {thoughts: req.params.id}},
      {new: true}
    );
  })
  .then(thoughtData => {
    if (!thoughtData) {
      res.status(404).json({message: 'thought deleted'});
      return;
    }
  })
  .catch((err) => res.json(err));
  },

  //remove reaction
  removeReaction(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$pull: {reactions: {reactionId: req.params.reactionId}}},
      {new: true}
    )
    .then(thoughtData => res.json({thoughtData}))
      .catch(err => res.json(err));
  }
}