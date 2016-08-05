var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('scripts/db.json')
var parser = require("body-parser")

server.use(jsonServer.defaults())
server.use(parser.json());

server.delete('/todos/completed', function (req, res) {
  router.db.get('todos').remove({ completed: true  }).value()
  res.jsonp({})
})

server.patch('/todos/completed', function (req, res) {
  router.db.get('todos').map((todo) => todo.completed = req.body.value).value()
  res.jsonp({})
})

server.use(router)


console.log('Listening at 4000')
server.listen(4000)
