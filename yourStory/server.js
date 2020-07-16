const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');


app.use(express.json());
app.use(express.static('public'));

const routesController = require('./controllers/routes.js');
app.use('/routes', routesController);

mongoose.connect('mongodb://localhost:27017/yourstory', {useNewUrlParser:true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});

app.get('/works', (req, res) =>{
  res.send('this works!')
})

app.listen(3000, () => {
    console.log('listening...');
})
