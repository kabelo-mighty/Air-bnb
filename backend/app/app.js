const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require('cors')
const db = require('../controller/controller')

app.use(cors())
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();    
});

app.get(``, (req, res) => { 

    res.json({info:'Node.js,Express, and mysql API'})
 });



// Listen to the specified port 3000
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});


//post
app.post('/register',db.createUser)
app.post('/login',db.login)
app.post('/message',db.message)
app.post('/message',db.message)
app.post('/makeBooking/',db.makeBooking)
app.post('/addroom',db.addroom)
//get
app.get('/rooms',db.rooms)
app.get('/allbooks',db.allbooks)
app.get('/rooms/:id',db.currentrRoom)
app.get('/books',db.books)
app.get('/books/:id',db.currentbook)
app.get('/viewbook/:id',db.viewbook)
app.get('/countbooking',db.countbooking)
app.get('/countcustomer',db.countcustomer)
app.get('/countrooms',db.countrooms)
app.get('/currentUser/:id',db.currentUser)
//count admin
app.get('/book/:id',db.currentbook)
app.get('/viewbook/:id',db.viewbook)
app.get('/books/:id',db.currentbook)
//count user
app.get('/countmybooking/:id',db.countmybooking)
app.get('/countpending/:id',db.countpending)
app.get('/counthistory/:id',db.counthistory)
app.get('/countcancelbooking/:id',db.countcancelbooking)
//put
app.put('/approvebooking/:id',db.approvebooking)
app.put('/updateDate/:id',db.updateDate)
app.put('/updateroom/:id',db.updateroom)
app.put('/updateprofile/:id',db.updateprofile)
app.put('/archiveBooking/:id',db.archiveBooking)
app.put('/cancelBooking/:id',db.cancelBooking)
//delete
app.delete('/removeroom/:id',db.removeroom)
