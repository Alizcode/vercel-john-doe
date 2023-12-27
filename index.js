const express = require('express');
const app = express();
const env = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 4500;
const emailSender = require('./models/emailSender');

// middleware

app.use(express.static('public'));



app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: false}));

app.set('port', port)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/resume', (req, res) => {
    res.render('resume')
});
app.get('/contact-me', (req, res) => {
    res.render('contact-me')
});


app.post('/contact-me', (req, res)=>{
    console.log(req.body);
    emailSender.sendEmail(req.body, (data)=> {
            res.json(data);
            //res.json({result: 'error'})
            console.log('Thank you')
        })
    });

app.get('/travel-planner', (req, res) => {
    res.render('travel-planner')
});
app.get('/flight-data', (req, res) => {
    res.render('flight-data')
});
app.get('/card-game', (req, res) => {
    res.render('card-game')
});
app.get('/portfolio-item-d', (req, res) => {
    res.render('portfolio-item-d')
});
app.get('/lorem-tech', (req, res) => {
    res.render('lorem-tech')
});
app.get('/rock-paper', (req, res) => {
    res.render('rock-paper')
});
app.get('/todo', (req, res) => {
    res.render('todo')
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio')
});



app.listen(port, ()=>{
    console.log('listening on port:', port)
});