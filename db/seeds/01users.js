
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Catherine',
          email: 'catherine.luse@gmail.com',
          password: 'cat'
        }
      ]
    );
    });
};
