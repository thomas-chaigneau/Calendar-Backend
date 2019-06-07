const router = require('express').Router();

const { getAllEvents, postEvent } = require('../controllers/eventsController')

router.route('/').get(getAllEvents);
router.route('/').post(postEvent);

module.exports = router;