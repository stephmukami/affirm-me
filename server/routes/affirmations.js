const express = require('express');
const router = express.Router();
const affirmController = require('../controllers/affirm-controller');
const authenticateJWT = require('../middlewares/jwt-middleware')


router.get('/',affirmController.getAffirmations);

router.post('/',affirmController.createAffirmation);

router.put('/:id',authenticateJWT,affirmController.updateAffirmation);

router.delete('/:id',authenticateJWT,affirmController.deleteAffirmation);


module.exports = router ;