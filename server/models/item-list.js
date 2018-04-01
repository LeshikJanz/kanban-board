'use strict';

module.exports = function (ItemList) {
  ItemList.updateOrder = function (ids, cb) {
    ItemList.find({}, function (err, items) {
      items.forEach(function (t) {
        t.order = ids.indexOf(ids.find(i => +i === +t.id))
        ItemList.replaceOrCreate(t, function (err) {
          if (err) {
            console.log(err)
          }
        })
      })
      cb(null, true)
    })
  }

  ItemList.remoteMethod('updateOrder', {
    accepts: [{ arg: 'ids', type: 'array' }],
    returns: { arg: 'ordered', type: 'boolean' }
  })
}
