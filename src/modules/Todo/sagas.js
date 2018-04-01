import { put, select, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import { createTodoDone, createTodoError, createTodoInit, fetchTodoByIdDone, fetchTodoByIdInit } from "../actions"
import { fetchTodoById, updateTodo } from "../../api/item"
import { urls } from "../../urls"
import { push } from "react-router-redux"
import { initialize } from "redux-form"

const getTodoForm = (state: any) => state.form.todoForm.values

export function* createTodoSaga(): Iterator<Object | Task> {
  try {
    const todoForm = yield select(getTodoForm)

    const Todo = yield updateTodo(todoForm)
    yield put(createTodoDone(Todo))

    yield put(push(urls.index))
  } catch (error) {
    yield put(createTodoError(error))
  }
}

export function* fetchTodoByIdSaga({ payload }): Iterator<Object | Task> {
  try {
    const Todo = yield fetchTodoById(payload)
    yield put(fetchTodoByIdDone(Todo))
    yield put(initialize('todoForm', Todo))
  } catch (error) {
    yield put(createTodoError(error))
  }
}

export function* todoSaga() {
  yield [
    takeEvery(createTodoInit().type, createTodoSaga),
    takeEvery(fetchTodoByIdInit().type, fetchTodoByIdSaga),
  ]
}

