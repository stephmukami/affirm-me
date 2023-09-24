const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const authenticateJWT = require('../middlewares/jwt-middleware');

// Set up CORS for this specific route
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });


router.get('/',userController.getUsers)

router.get('/:username',userController.getSingleUser)

router.post('/',userController.createUser);

router.put('/:id', authenticateJWT,userController.editUser);

router.delete('/:id', authenticateJWT, userController.deleteUser)

module.exports = router;

