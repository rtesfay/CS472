var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
//var sessions = require('express-session');


var questions = require('./data');

const ques = questions.questions;
const ans = questions.answers;

app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended:false}));

app.set("view engine","pug");

var count = 0;
var score = 0;

app.use(session({
    secret: "Salt for cookie signing",
    saveUninitialized: true,
    resave: false
}));

app.get('/', (req,res)=>{
    if(req.session.count || req.session.score){
        count = req.session.count;
        score = req.session.score;
    }
    res.render('index',{question:ques[count],score});
})

app.post('/',(req,res)=>{
    if(count != 4){
        if(ans[count] === parseInt(req.body.answer)){
            score++;
        }
        count++
        req.session.count = count;
        req.session.score = score;
        res.render('index',{question:ques[count],score})
    }else{
        if(ans[count] === parseInt(req.body.answer)){
            score++;
        }
        count = 0;
        res.render('score',{score})
        req.session.destroy();
        score = 0;
    }
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

