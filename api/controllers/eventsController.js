const Models = require('../models/')

const { Events } = Models 

exports.getAllEvents  = (req, res) => {
	try {
        Events
        .findAll({})
        .then((events) => {
            console.log('events---', events)
            res.status(200).json(events)
        })
	} catch (err) {
        console.log(err)
		res.status(400).send(err)
	}
}

exports.postEvent = (req, res) => {
    const event = req.body
    try {
        Events
        .create(event)
        .then(() => res.status(200).send(event))
    } catch (err) {
        console.log('ERROR IN POST EVENT:', err)
        res.status(400).send(err)
    }
}