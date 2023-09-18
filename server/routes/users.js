const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller')

//get a single user?(username or id?)

/* GET all users l */
router.get('/',userController.getUsers)

router.post('/',userController.createUser);

router.put('/:id',userController.editUser);

router.delete('/:id',userController.deleteUser);

module.exports = router;

