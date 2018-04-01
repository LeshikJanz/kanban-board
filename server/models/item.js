'use strict'

module.exports = function (Item) {
  Item.updateOrder = function (ids, cb) {
    Item.find({}, function (err, items) {
      items.forEach(function (t) {
        t.order = ids.indexOf(ids.find(i => +i === +t.id))
        Item.replaceOrCreate(t, function (err) {
          if (err) {
            console.log(err)
          }
        })
      })
      cb(null, true)
    })
  }

  Item.remoteMethod('updateOrder', {
    accepts: [{ arg: 'ids', type: 'array' }],
    returns: { arg: 'ordered', type: 'boolean' }
  })
}
