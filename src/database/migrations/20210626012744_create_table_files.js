
exports.up = knex => {
	return knex.schema.createTable('files', table => {
		table.increments('id')
		table.integer('number').notNullable()
		table.string('name', 40).notNullable()
		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
	}) 
}

exports.down = knex => {
	return knex.schema.dropTable('files') 
}
