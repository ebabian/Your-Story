const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: String,
    image: String,
    audio: String,
    timePeriod: String,
});

const Story = mongoose.model('Post', storySchema);

module.exports = Story
