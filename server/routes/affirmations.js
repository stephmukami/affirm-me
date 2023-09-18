const express = require('express');
const router = express.Router();
const affirmController = require('../controllers/affirm-controller');

router.get('/',affirmController.getAffirmations);
router.post('/',affirmController.createAffirmation);
router.put('/:id',affirmController.updateAffirmation);


module.exports = router ;