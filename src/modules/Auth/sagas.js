import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import { push } from "react-router-redux"
import urls from "urls"
import {
  registrationRequested,
  registrationSucceded,
  registrationFailed,
  loginRequested,
  loginSucceded,
  loginFailed,
  logoutRequested,
  logoutSucceded,
  logoutFailed
} from "./actions"
import { register, login, logout } from "api/auth"

export function* registrationSaga({ payload }): Iterator<Object | Task> {
  try {
    const { user, history } = payload
    const newUser = yield register(user)
    history.push(urls.login)
    yield put(registrationSucceded(newUser))
  } catch (error) {
    yield put(registrationFailed(error))
  }
}

export function* loginSaga({ payload }): Iterator<Object | Task> {
  try {
    const { user, history } = payload
    const loggedUser = yield login(user)
    localStorage.setItem('Token', loggedUser.id)
    localStorage.setItem('email', user.email)
    history.push(urls.index)
    yield put(loginSucceded(loggedUser))
  } catch (error) {
    yield put(loginFailed(error))
  }
}

export function* logoutSaga({ payload }): Iterator<Object | Task> {
  try {
    console.log("payload")
    console.log(payload)
    const { history } = payload
    yield logout()
    localStorage.removeItem('Token')
    localStorage.removeItem('email')
    history.push(urls.index)
    yield put(logoutSucceded())
  } catch (error) {
    console.log("error")
    console.log(error)
    yield put(logoutFailed(error))
  }
}

export function* authSaga() {
  yield [
    takeEvery(registrationRequested().type, registrationSaga),
    takeEvery(loginRequested().type, loginSaga),
    takeEvery(logoutRequested().type, logoutSaga),
  ]
}

