'use strict'

module.exports = function (Todo) {
  Todo.updateOrder = function (ids, cb) {
    Todo.find({}, function (err, todos) {
      todos.forEach(function (t) {
        t.order = ids.indexOf(ids.find(i => +i === +t.id))
        Todo.replaceOrCreate(t, function (err) {
          if (err) {
            console.log(err)
          }
        })
      })
      cb(null, true)
    })
  }

  Todo.remoteMethod('updateOrder', {
    accepts: [{ arg: 'ids', type: 'array' }],
    returns: { arg: 'ordered', type: 'boolean' }
  })
}
