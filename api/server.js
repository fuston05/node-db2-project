const express= require('express');
const cors= require('cors');
const helmet= require('helmet');

const server= express();

// middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('<h1>Welcome to my humble server!</h1>');
})//end server.get

// fallback case


module.exports= server;