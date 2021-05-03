const mongoose = require('mongoose');
const Product = require('./models/blog');

const arr = [
    {
        title: "title 1",
        story: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
        title: "title 2",
        story: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        
    },
    {
        title: "title 3",
        story: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",

    }
];



function Dumy() {
    Product.insertMany(arr)
    .then(() => {
        console.log("DB Seeded");
    })
    .catch(err => {
        console.log(err);
    })
}


module.exports = Dumy;