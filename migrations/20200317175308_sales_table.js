/**
 * Write a schema file for a sales table. This table should track information on the sale of each car. You may wish to research foreign keys in order to link each sale to the entry in cars which sold.
 */
const shortid= require('shortId');

exports.up =  function(knex) {
  // const randId= Math.floor( Math.random()*10 )

  return knex.schema.createTable('sales', tbl => {
    tbl.increments('Sale_ID');

    tbl.string('Customer')
    
    tbl.integer('Sale_Amount')
    .notNullable().defaultTo(0)

    // date stamp for sale
    tbl.timestamp('Sale_Date')
    .notNullable()
    .defaultTo(knex.fn.now())

    tbl.foreign('Sale_ID').references('ID').inTable('cars')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
