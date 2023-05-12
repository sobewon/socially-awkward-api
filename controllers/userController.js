const { ObjectId } = require('mongoose').Types;

const { User } = require('../models')

module.exports = {
  //get all users
  getAllUsers(req, res) {
    User.find()
      .then(async (users) => {
        res.json(users)
      })
      .catch((err) => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  //get user by ID
  getUserById(req, res) {
    User.findOne({_id: req.params.id})
    .then((userInfo) => {
      if (!userInfo){
        res.status(404).json({ messasge: "no user with this id found."})
        return
      }
      res.json(userInfo)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
  },

  // post new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //put update user
  updateUser(req, res) {
    const { id } = req.params;
    const updatedUserData = req.body;
  
    User.findOneAndUpdate(
      { _id: id },
      { $set: updatedUserData },
      { new: true }
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // delete user
  deleteUser(req,res) {
    User.findOneAndRemove({_id: req.params.id})
      .then((user) => {
      !user
        ? res.status(404).json({message: 'No user exists'})
        : res.json({message: "user successfully deleted"})
      })
      .catch(err => res.status(400).json(err));
  },

  //post add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.id},
      {$addToSet: {friends: req.params.friend.Id}},
      {new:true}
    )
    .then((user) =>
      !user
        ? res
          .status(404)
          .json({message: 'Nouser with that Id'})
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },

  // delete remove friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.id },
      {$pull: { friends: params.friendId}},
      {new: true}
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
  },
}