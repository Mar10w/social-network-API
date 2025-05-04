const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Routes for thoughts
router.route('/')
  .get(getThoughts) // GET all thoughts
  .post(createThought); // POST a new thought

router.route('/:thoughtId')
  .get(getSingleThought) // GET a single thought by ID
  .put(updateThought) // PUT to update a thought by ID
  .delete(deleteThought); // DELETE a thought by ID

// Routes for reactions
router.route('/:thoughtId/reactions')
  .post(addReaction); // POST to add a reaction to a thought

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE a reaction by reactionId

module.exports = router;