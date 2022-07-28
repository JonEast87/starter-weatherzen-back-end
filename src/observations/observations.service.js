const knex = require('../db/connection')

function create(newObservation) {
	return knex('observations').insert(newObservation).returning('*')
}

module.exports = {
	create,
}
