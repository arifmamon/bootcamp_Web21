const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');


const productRoutes = require('./routes/product');

mongoose.connect('mongodb://localhost:27017/blogDatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    
    res.render('index');
})

app.use(productRoutes);


app.listen(3000, () => {
    console.log("Started at http://localhost:3000/");
})