import { combineReducers } from "redux"
import Board from "modules/Main/reducer"
import Item from "modules/Item/reducer"

export default combineReducers({
  Board,
  Item
})
