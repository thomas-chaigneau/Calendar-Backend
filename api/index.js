const router = require('express').Router()

router.use('/events', require('./routes/eventsRoute'))

module.exports = router