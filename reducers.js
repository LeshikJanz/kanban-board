import { combineReducers } from "redux"
import Board from "modules/Main/reducer"
import Item from "modules/Item/reducer"
import ItemList from "modules/ItemList/reducer"

export default combineReducers({
  Board,
  Item,
  ItemList,
})
