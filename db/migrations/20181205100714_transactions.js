exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', (table) => {
    table.increments();
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .index();
    table.decimal('amount',14,2);
    table.string('transaction_type');
    table.string('business_name');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transactions');
};
