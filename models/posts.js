const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    text: String,
    timePeriod: String,
});

const Story = mongoose.model('Post', storySchema);

module.exports = Story
