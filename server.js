    
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var multer = require('multer');
const passport = require("passport");
const users = require("./routes/users");
const path = require('path')
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Mobiles = require("./models/Mobile")
app.use(express.static('public'))
// DB Config
const dba = require("./config/dbconnection").mongoURI;
// Connect to MongoDB
mongoose
  .connect(

 dba,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  
//session setup
var db = mongoose.connection;
db.on('error',console.error.bind(console,'#MongoDB connection error'));
app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave:false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2}, // 2 days in milliseconds
  store: new MongoStore({mongooseConnection:db, ttl: 2 * 24 * 60 * 60})
  //ttl: 2 days * 24 hours * 60 minutes * 60 seconds
}))

  // SAVE SESSION CART API
  app.post('/cart', function(req, res){
    var cart = req.body;
    req.session.cart = cart;
    req.session.save(function(err){
      if(err){
        throw err;
      }
      res.json(req.session.cart);
    })
  });
  // GET SESSION CART API
  app.get('/cart', function(req, res){
    if(typeof req.session.cart !== 'undefined'){
      res.json(req.session.cart);
    }
  }); 

//POST mobiles
app.post('/mobiles', function(req, res){
  var mobile = req.body;

  Mobiles.create(mobile, function(err, mobiles){
    if(err){
      throw err;
    }
    res.json(mobiles);
  })
});

//----->>>> GET mobiles <<<---------
app.get('/mobiles', function(req, res){
  Mobiles.find(function(err, mobiles){
    if(err){
      throw err;
    }
    res.json(mobiles)
  })
});

//---->>> DELETE mobiles <<<------
app.delete('/mobiles/:_id',function(req,res){
  var query = {_id: req.params._id};

Mobiles.findByIdAndRemove(query, function(err, mobiles){
  if(err){
    console.log("# API DELETE BOOKS: ", err);
  }
  res.json(mobiles);
})
});





//---->>> UPDATE mobiles <<<------
app.put('/mobiles/:_id', function(req, res){
  var mobile = req.body;
  var query = req.params._id;
  // if the field doesn't exist $set will set a new field
  var update = {
    '$set':{
      model:mobile.model,
      weight:mobile.weight,
      os:mobile.os,
      internalmemory:mobile.internalmemory,
      ram:mobile.ram,
      camera:mobile.camera,
      battery:mobile.battery,
      color:mobile.color,
      // image:mobile.image,
      price:mobile.price
    }
  };
    // When true returns the updated document
    var options = {new: true};

    Mobiles.findOneAndUpdate(query, update, options, function(err, mobiles){
      if(err){
        throw err;
      }
      res.json(mobiles);
    })

})


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passpost")(passport);
// Routes
app.use("/users", users);

if(process.env.NODE_ENV==='production'){
app.use(express.static('client/build'));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','build','index.html'));
})
}

const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
