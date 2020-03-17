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
})//end router.get by id

// add a new car
router.post('/', (req, res) => {
  db('cars')
  .insert(req.body, 'id')
  .then( ids => {
    res.status(201).json({message: 'Car successfully added'})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.post

//update car by id
router.put('/:id', (req, res) => {
  db('cars')
  .where({id: req.params.id})
  .update(req.body)
  .then( car => {
    res.status(200).json({message: 'Car successfully updated'})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.put

//delte a car
router.delete('/:id',(req, res) => {
  db('cars')
  .where({id: req.params.id})
  .del()
  .then( delRes => {
    res.status(200).json({message: `Car ID:${req.params.id} was successfully deleted`})
  } )
  .catch(error => {
    res.status(500).json({errro: "Could not process your request"})
  })
})// end delete

module.exports= router;