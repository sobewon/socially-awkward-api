const router = require('express').Router();

//import functions
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController')

// set up GET all user and post at /api/users
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// set up get one, put and delete at /api/user/:id
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Set up routes for '/api/users/:id/friends/:friendId'
router.route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;