
exports.seed = function(knex, Promise) {
  return knex('flight').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight').insert([
        {
          start: 'Phoenix , AZ',
          destination: 'Los Angeles , CA',
          airline_id:'1'
        }

      ]
    );
    });
};
