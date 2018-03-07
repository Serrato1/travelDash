
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips',(table)=>{
    table.increments();
    table.integer('user_id');
    table.string('title');
    table.string('description');
    table.integer('flight_id');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};
