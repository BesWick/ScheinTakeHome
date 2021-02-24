var express = require('express')
var config = require('./config')
var bodyParser = require('body-parser')
const app = express()
app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Load the routes
app.use('/api', require('./person/router'))

//listen for connections only when server.js file is called directly by node
if (require.main === module) {
    app.listen(config.express.port, config.express.ip, function (error) {
        if (error) {
            console.log('Error: Unable to listen for connections', error)
            process.exit(10)
        }
        console.log(
            'server is listening on http://' +
                config.express.ip +
                ':' +
                config.express.port,
        )
    })
}

module.exports = app
