
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {Customer: "Donald Trump", Sale_Amount: 30000, Sale_Date: knex.fn.now()},
        {Customer: "Papa Smurf", Sale_Amount: 30000, Sale_Date: knex.fn.now()},
        {Customer: "Bob Marley", Sale_Amount: 30000, Sale_Date: knex.fn.now()}
      ]);
    });
};
