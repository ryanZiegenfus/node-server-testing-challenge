const express = require('express')
const StudentRouter = require('../data/routers/student-router')
const server = express();

server.use(express.json());
server.use('/api/students', StudentRouter)

module.exports = server;