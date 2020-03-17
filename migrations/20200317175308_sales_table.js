/**
 * Write a schema file for a sales table. This table should track information on the sale of each car. You may wish to research foreign keys in order to link each sale to the entry in cars which sold.
 */

exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments('sale_id');

    tbl.string('Customer')
    .notNullable();
    
    tbl.integer('Sale_Amount')

    // date stamp for sale
    tbl.timestamp('Sale_Date')
    .notNullable()
    .defaultTo(knex.fn.now())

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
