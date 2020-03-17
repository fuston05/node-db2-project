
/**
 * cars:
 * id, primary key, increments, int
 * Year, string, notNullable
 * Make, string, notNullable indexed
 * Model, string, notNullabel
 * VIN, string, unique
 * Mileage, int null
 * TitleStatus, text, null, 
 *  
 */

exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('ID');

    tbl.string('Year', 255)
      .notNullable();

    tbl.string('Make', 255)
      .notNullable()
      .index();

    tbl.string('Model', 255)
      .notNullable();
      
    tbl.string('VIN', 255)
      .unique()
    
    tbl.integer('Mileage');

    tbl.string('Transmission_Type')
    
    tbl.string('Title_Status', 255);

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
