const moment = require('moment')
const { Events } = require('../models/')

exports.postEvent = (req, res, next) => {
    const event = req.body
    console.log('------POST------')
    console.log(event)
    console.log('------POST END------')

    try {
        if (event.frequency === 'daily') {
            const endingDate = moment(event.startingDate).add(event.amount, event.unitOfTime);
            const repetitionTimes = endingDate.diff(event.startingDate, 'days');
            const promises = Array(repetitionTimes).fill(0).map((_, index) => Events.create({
                ...event,
                startingDate: moment(event.startingDate, 'YYYY-MM-DD').add(index, 'days').format('YYYY-MM-DD')
            }));

            return Promise.all(promises)
                .then(events => res.send(events))
                .catch(err => next(err))

        } else {
            Events
            .create(event)
            .then(() => res.status(200).send([event]))
        }

    } catch (err) {
        console.log('ERROR IN POST EVENT:', err)
        res.status(400).send(err)
    }
}

exports.getAllEvents  = (req, res) => {
	try {
        Events
        .findAll({})
        .then((events) => {
            res.status(200).json(events)
        })
	} catch (err) {
        console.log(err)
		res.status(400).send(err)
	}
}

