
exports.seed = function(knex, Promise) {
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
          user_id: '1',
          title: 'Vacation Trip',
          description:'Leaving for vacation' ,
          flight_id:'1'
        }

      ]
    );
    });
};
