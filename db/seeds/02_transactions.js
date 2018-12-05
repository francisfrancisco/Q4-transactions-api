
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {user_id: 1, amount: 500, transaction_type: 'online', business_name: 'galvanized'}
      ]);
    });
};
