'use strict';
const express    = require('express');        

const app        = express();                 

const router = require('./router');

const mongoose   = require('mongoose');
// connect
mongoose.connect('mongodb+srv://admin:admin@cluster0-bhsym.mongodb.net/test?retryWrites=true&w=majority',
					{useNewUrlParser: true, useUnifiedTopology: true});

//this is the first connection we use by default
let db = mongoose.connection;
db.on('error',  err=>console.log(err));
db.on('open', ()=>console.log('database opened'));
db.on('close', ()=>console.log('database closed'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req,res,next)=>{console.log('request: ', req.method, ' ', req.url); next();});

const port = process.env.PORT || 4000;    

app.use('/api', router);

app.get('/', (req, res) => {
                res.json({ message: 'hooray! welcome to our home!' });   
});

app.listen(port, () => {
                console.log('Magic happens on port ' + port)}
);

