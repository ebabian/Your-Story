const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');


app.use(express.json());
app.use(express.static('public'));
// app.use(fileUpload())

const db = mongoose.connection
require('dotenv').config()
const PORT = process.env.PORT || 3333
const MONGODB_URI = process.env.MONGODB_URI



const routesController = require('./controllers/routes.js');
app.use('/routes', routesController);

//connect mongoose
mongoose.connect(
    MONGODB_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex: true,
    },
    () => {
        console.log('connected to mongoose');
    }
);

db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))


app.get('/works', (req, res) =>{
  res.send('this works!')
})

app.listen(PORT, () => {
    console.log('listening...');
})
