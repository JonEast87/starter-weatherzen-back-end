const express = require('express')
const cors = require('cors')

const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')
const observationRouter = require('./observations/observations.router')

const app = express()

app.use(cors())
app.use(express.json())

// repalcing this block

let nextId = 1
app.post('/observations', (req, res) => {
	const newObservation = req.body.data

	newObservation.observation_id = nextId++

	res.status(201).json({
		data: newObservation,
	})
})

app.use('/observations', observationRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
