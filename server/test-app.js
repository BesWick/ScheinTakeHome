var app = require('./server')
var request = require('supertest')
module.exports = request(app)
