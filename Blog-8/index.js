const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res) => {

    res.render('index')
    

})






app.listen(3000,() => {
    
    console.log("http://localhost:3000/")
    console.log('Happy Coding 🐱‍🚀');
})