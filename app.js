var server = require('./server.js')
var router = require('./router.js')
var handlers = require('./handlers.js')


var handle = {}
handle['/home'] = handlers.home
handle['/review'] = handlers.review


server.startServer(router.route, handle)