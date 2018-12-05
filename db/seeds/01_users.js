
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'test1@test.com', password: 'asdf'},
        {email: 'test2@test.com', password: 'asdf'},
        {email: 'test3@test.com', password: 'asdf'}
      ]);
    });
};
