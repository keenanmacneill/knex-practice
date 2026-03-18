exports.up = function (knex) {
    return knex.schema.createTable('pet_type', table => {
        table.increments(); // adds an auto incrementing PK column
        table.string('name').notNullable(); // equivalent of varchar(255)
        table.timestamps(true, true); // utility columns, adds created_at and updated_at
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pet_type');
};
