const mongoose = require('mongoose');


const commentSchma = new mongoose.Schema({
    users: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const Comment = mongoose.model('Comment',commentSchma);

module.exports = Comment;