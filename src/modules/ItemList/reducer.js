import { createReducer } from 'utils/createReducer'
import {
  fetchItemListSucceded,
  fetchItemListFailed,
} from "./actions"

const initialState = {
  name: "",
}

export default createReducer({
  [fetchItemListSucceded().type]: (state, payload) => ({
    ...state,
    ...payload
  }),
  [fetchItemListFailed().type]: (state, payload) => ({
    ...state,
    errors: payload
  }),
}, initialState)
