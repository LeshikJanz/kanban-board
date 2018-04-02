import { createReducer } from 'utils/createReducer'
import {
  registrationSucceded,
  registrationFailed,
  loginSucceded,
  loginFailed,
  logoutSucceded,
  logoutFailed
} from "./actions"

const initialState = {
  email: "",
}

export default createReducer({
  [registrationSucceded().type]: (state, payload) => ({
    ...state,
    ...payload,
    error: null
  }),
  [registrationFailed().type]: (state, { error }) => ({
    ...state,
    error
  }),
  [loginSucceded().type]: (state, payload) => ({
    ...state,
    error: null
  }),
  [loginFailed().type]: (state, { error }) => ({
    ...state,
    error
  }),
  [logoutSucceded().type]: (state, payload) => ({
    ...state,
    error: null
  }),
  [logoutFailed().type]: (state, { error }) => ({
    ...state,
    error
  }),
}, initialState)
