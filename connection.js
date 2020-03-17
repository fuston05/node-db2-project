// import knex
const knex= require('knex');

// imoprt knex file
const knexFile= require('./knexfile');

// connect to config file version (dev, prod etc...)
const knexConfig= knexFile.development;

// export and connect to DB
module.exports= knex(knexConfig);