const express = require('express');
const app = express();
const Dumy = require('./Dumy')
const mongoose = require('mongoose');
const Blog = require('./models/blog');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/',async(req,res) => {

    const blogs=await Blog.find({});
    res.render('index', { blogs })
    

})
mongoose.connect('mongodb://localhost:27017/blogDatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("Connection Error");
        console.log(err);
    });
Dumy();




app.listen(3000,() => {
    
    console.log("http://localhost:3000/")
    console.log('Happy Coding 🐱‍🚀');
})