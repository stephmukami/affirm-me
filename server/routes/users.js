const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const authenticateJWT = require('../middlewares/jwt-middleware')

//get a single user?(username or id?)

/* GET all users l */
router.get('/',userController.getUsers)

router.post('/',userController.createUser);

router.put('/:id', authenticateJWT,userController.editUser);

router.delete('/:id', authenticateJWT, userController.deleteUser)

module.exports = router;

