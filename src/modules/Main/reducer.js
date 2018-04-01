import { createReducer } from 'utils/createReducer'
import { changeListType, fetchTodosDone, fetchTodosInit, updateOrderAction, updateTodoDone } from "./actions"
import {
  fetchItemListsRequested,
  fetchItemListsSucceded,
  fetchItemListsFailed,
} from "./actions"

const initialState = {
  lists: [],
  loading: false
}

export default createReducer({
  [fetchItemListsRequested().type]: (state) => ({
    ...state,
    loading: true
  }),
  [fetchItemListsSucceded().type]: (state, payload) => ({
    ...state,
    loading: false,
    lists: payload.sort((list1, list2) => list1.order - list2.order)
  }),
  [fetchItemListsFailed().type]: (state, payload) => ({
    ...state,
    loading: false,
    errors: payload
  }),
}, initialState)
