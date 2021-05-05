const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Comment = require('../models/comment');


// Display all the products
router.get('/blogs', async(req, res) => {
    
    const products=await Product.find({});

    res.render('products/index',{products});
})


// Get the form for new product
router.get('/blogs/new', (req, res) => {
    res.render('products/new');
})


// Create New Product
router.post('/blogs', async(req, res) => {

    try {
    await Product.create(req.body.product);
    req.flash('success','New Blog Created Succesfully')
    res.redirect('/blogs');
    }
    catch(e) {
        req.flash('error', 'Something Went Wrong');
        res.render('error');

    }
});


// Show particular product
router.get('/blogs/:id', async(req, res) => {
    
    const product=await Product.findById(req.params.id).populate('comments');

   

    res.render('products/show', { product });
})

// Get the edit form
router.get('/blogs/:id/edit', async(req, res) => {

    try {
    const product=await Product.findById(req.params.id);

    res.render('products/edit',{product});
    }
    catch(e) {
        req.flash('error','Cannot  edit')
    }
})

// Upadate the particular product
router.patch('/blogs/:id', async(req, res) => {
    
    try {
    await Product.findByIdAndUpdate(req.params.id, req.body.product);
    
    req.flash('success','Updated Succsfully')
    res.redirect(`/blogs/${req.params.id}`)
    }
    catch(e) {
        req.flash('error', 'Update Failed');
    }
})


// Delete a particular product
router.delete('/blogs/:id', async (req, res) => {
    try {
    await Product.findByIdAndDelete(req.params.id);
    req.flash('success','Succesfully Deleted');
    res.redirect('/blogs');
    }
    catch(e) {
        req.flash('error','Cannot Delete ');
    }
})




// Creating a New Comment on a Product

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