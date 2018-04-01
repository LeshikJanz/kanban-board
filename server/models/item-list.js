'use strict';

module.exports = function (ItemList) {

  ItemList.updateItemsOrder = function (listsIds, cb) {
    const Item = this.app.models.Item;
    // search by ItemList
    ItemList.find({}, function (err, lists) {
      lists.forEach(function (t) {
        const listsIdsArray = Object.keys(listsIds)
        t.order = listsIdsArray.indexOf(Object.keys(listsIds).find(i => i === t.name))


        // search by items
        Item.find({}, function (err, items) {
          const updatedItems = listsIds[t.name].map((id, index) => {
            const curItem = items && items.find(item => item.id === id)
            const listId = lists && lists.find(list => list.name === t.name).id
            return Object.assign({}, curItem.__data, { itemListId: listId, order: index })
          })

          updatedItems.forEach(updatedItem => {
            Item.replaceOrCreate(updatedItem, function (err) {
              if (err) {
                console.log(err)
              }
            })
          })
        })

        ItemList.replaceOrCreate(t, function (err) {
          if (err) {
            console.log(err)
          }
        })
      })
      cb(null, true)
    })
  }

  ItemList.remoteMethod('updateItemsOrder', {
    accepts: [{ arg: 'ids', type: 'object' }],
    returns: { arg: 'ordered', type: 'boolean' }
  })
}
