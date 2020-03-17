const express= require('express');
const cors= require('cors');
const helmet= require('helmet');

const server= express();

//define the router
const carsRouter= require('../data/carsRouter');

// middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

//assign the router
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).json('<h1>Welcome to my humble server!</h1>');
})//end server.get

// fallback case
server.use(function notFound() {
  res.status(404).json({error: "Could not process your request"})
})//end fallback case


module.exports= server;