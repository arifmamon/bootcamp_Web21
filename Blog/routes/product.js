const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Comment = require('../models/comment');


// Display all the BLogs
router.get('/blogs', async(req, res) => {
    
    const products=await Product.find({});

    res.render('products/index',{products});
})


// Get the form for new Blog
router.get('/blogs/new', (req, res) => {
    res.render('products/new');
})


// Create New Blog
router.post('/blogs', async(req, res) => {


    await Product.create(req.body.product);

    res.redirect('/blogs');
});


// Show particular BLog
router.get('/blogs/:id', async(req, res) => {
    
    const product=await Product.findById(req.params.id).populate('comments');

   

    res.render('products/show', { product });
})

// Get the edit form
router.get('/blogs/:id/edit', async(req, res) => {

    const product=await Product.findById(req.params.id);

    res.render('products/edit',{product});
})

// Upadate the particular blog
router.patch('/blogs/:id', async(req, res) => {
    
    await Product.findByIdAndUpdate(req.params.id, req.body.product);

    res.redirect(`/blogs/${req.params.id}`)
})


// Delete a particular blog
router.delete('/blogs/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/blogs');
})




// Creating a New Comment on a blog

router.post('/blogs/:id/comment', async (req, res) => {
    
    const product = await Product.findById(req.params.id);
    const comment = new Comment(req.body);
    console.log(product);
    console.log(comment);

    product.comments.push(comment);

    await comment.save();
    await product.save();

    res.redirect(`/blogs/${req.params.id}`);
})


module.exports = router;