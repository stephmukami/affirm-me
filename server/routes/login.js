const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local").Strategy;
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Set up CORS for this specific route
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
router.get('/', function(req, res, next) {
  res.render('log-in');
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});


router.post('/', (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: 'An error occurred while attempting to authenticate' });
      }
  
      if (!user) {
        return res.status(500).json({ message: info.message });
      }
  
      // Generate a JWT with relevant user information
      const token = jwt.sign({ user_id: user.id, username: user.username }, process.env.JWT_SECRET,{expiresIn:'1d'}); 
  
      // Send the JWT to the client
      return res.status(200).json({ message: 'User logged in', token });
    })(req, res, next);
  });

module.exports = router;
