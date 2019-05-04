exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('description')
        table.boolean('done').notNull().defaultTo(false)
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tasks');
};