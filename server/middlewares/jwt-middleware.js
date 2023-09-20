const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
        console.log(err);
        console.log(process.env.JWT_SECRET)
      return res.status(403).json({ message: 'Authentication failed: Invalid token' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
