const mongoose = require('mongoose');
const Comment = require('./comment');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    img: {
        type: String,
    },
    desc: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;