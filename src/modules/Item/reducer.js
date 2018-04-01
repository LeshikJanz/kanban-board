import { createReducer } from 'utils/createReducer'
import { changeListType, fetchTodosDone, fetchTodosInit, updateOrderAction, updateTodoDone } from "./actions"
import {
  fetchItemSucceded,
  fetchItemFailed,
} from "./actions"

const initialState = {
  title: "",
  description: "",
  itemListId: ""
}

export default createReducer({
  [fetchItemSucceded().type]: (state, payload) => ({
    ...state,
    ...payload
  }),
  [fetchItemFailed().type]: (state, payload) => ({
    ...state,
    errors: payload
  }),
}, initialState)
