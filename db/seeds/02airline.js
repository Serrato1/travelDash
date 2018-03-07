
exports.seed = function(knex, Promise) {
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {
          name: 'Delta',
          description: 'Delta Air Lines, Inc. (NYSE: DAL), commonly referred to as Delta, is a major American airline, with its headquarters and largest hub at Hartsfield–Jackson Atlanta International Airport in Atlanta, Georgia.'
        }
      ]
    );
    });
};
