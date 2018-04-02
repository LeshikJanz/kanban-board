import { createReducer } from 'utils/createReducer'
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
