const express= require('express');
const router= express.Router();

const db= require('../connection');

//get all sales
router.get('/', (req, res) => {
  db('sales')
  .then( sales => {
    res.status(200).json({sales})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.get

//get sale by id
router.get('/:id', (req, res) => {
  db('sales')
  .where({sale_id: req.params.id})
  .then( sale => {
    res.status(200).json({sale})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.get by id

// add a new sale
router.post('/', (req, res) => {
  db('sales')
  .insert(req.body, 'id')
  .then( ids => {
    res.status(201).json({message: 'Sale successfully added'})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.post

//update a sale by id
router.put('/:id', (req, res) => {
  db('sales')
  .where({sale_id: req.params.id})
  .update(req.body)
  .then( updateRes => {
    res.status(200).json({message: 'Sale was successfully updated'})
  } )
  .catch(error => {
    res.status(500).json({error: 'Server error'})
  })
})//end router.put

//delte a car
router.delete('/:id',(req, res) => {
  db('sales')
  .where({sale_id: req.params.id})
  .del()
  .then( delRes => {
    res.status(200).json({message: `Sale ID:${req.params.id} was successfully deleted`})
  } )
  .catch(error => {
    res.status(500).json({errro: "Could not process your request"})
  })
})// end delete

module.exports= router;