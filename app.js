const express= require('express');


//express app

const app = express();
app.set('view engine','ejs');


app.listen(2000);

app.get('/index', (req,res)=>{
    res.render('index',{});

});

app.get('/thank-you',(req,res)=>{
    const list=[
        {title:'Bathroom essentials', snippet:'Soaps,Shampoo,Detergent'},
        {title:'Kitchen essentials', snippet:'utensils,Dish-washer'},
        {title:'other imp things', snippet:'watch,charger,iron'},
    ];
    res.render('thank-you',{list});
} )

app.get('/404',(req,res)=>{
    res.render('404');

});

