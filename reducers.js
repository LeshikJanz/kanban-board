import { combineReducers } from "redux"
import User from "modules/Auth/reducer"
import Board from "modules/Main/reducer"
import Item from "modules/Item/reducer"
import ItemList from "modules/ItemList/reducer"

export default combineReducers({
  User,
  Board,
  Item,
  ItemList,
})
