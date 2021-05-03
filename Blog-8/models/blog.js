const mongoose = require('mongoose');

const blog = new mongoose.Schema({
    title: {
        type:String
    },
    story: {
        type: String
    }
})

const Blog = mongoose.model('Blog', blog);

module.exports = Blog;