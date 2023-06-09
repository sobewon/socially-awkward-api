const router = require('express').Router();

//import functions
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  updateThought,
  deleteThought,
  removeReaction
} = require('../../controllers/thoughtController')

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(addReaction)

router.route('/:thoughtId/:reactionId')
  .delete(removeReaction)

module.exports = router;