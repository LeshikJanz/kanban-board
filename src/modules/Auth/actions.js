import { createAction } from "utils/createAction"

export const registrationRequested = createAction('REGISTRATION_REQUESTED')
export const registrationSucceded = createAction('REGISTRATION_SUCCEDED')
export const registrationFailed = createAction('REGISTRATION_FAILED')

export const loginRequested = createAction('LOGIN_REQUESTED')
export const loginSucceded = createAction('LOGIN_SUCCEDED')
export const loginFailed = createAction('LOGIN_FAILED')

export const logoutRequested = createAction('LOGOUT_REQUESTED')
export const logoutSucceded = createAction('LOGOUT_SUCCEDED')
export const logoutFailed = createAction('LOGOUT_FAILED')
