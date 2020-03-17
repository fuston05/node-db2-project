const express= require('express');
const router= express.Router();

const db= require('../connection');

//get all cars
router.get('/', (req, res) => {
  db('cars')
  .then( cars => {
    res.status(200).json({cars})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.get

//get car by id
router.get('/:id', (req, res) => {
  db('cars')
  .where({id: req.params.id})
  .then( car => {
    res.status(200).json({car})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.get



module.exports= router;