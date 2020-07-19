const express = require('express');
const router = express.Router();
const Story = require('../models/posts.js')

//post
router.post('/', (req, res) => {
  Story.create(req.body, (err, createdStory) => {
    res.json(createdStory)
  })
})

//delete
router.delete('/:id', (req, res) => {
  Story.findByIdAndRemove(req.params.id, (err, deletedStory) => {
    res.json(deletedStory);
  })
})

//put - edit
router.put('/:id', (req, res) => {
  Story.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedStory) => {
      res.json(updatedStory)
    }
  )
})

//get
router.get('/', (req, res) => {
  Story.find({}, (err, foundStory) => {
    res.json(foundStory)
  })
})

module.exports = router;
