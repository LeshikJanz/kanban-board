import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import { deleteTodo, fetchTodos, updateTodo, updateOrder } from "api/item"
import {
  createItemListRequested,
  createItemListSucceded,
  createItemListFailed,
  fetchItemListRequested,
  fetchItemListSucceded,
  fetchItemListFailed,
  updateItemListRequested,
  updateItemListSucceded,
  updateItemListFailed,
  deleteItemListRequested,
  deleteItemListSucceded,
  deleteItemListFailed,
} from "./actions"
import { createItemList } from "api/itemList"
import urls from "urls"
import { fetchItemListById, updateItemList, deleteItemList } from "api/itemList"

export function* createItemListsSaga({ payload }): Iterator<Object | Task> {
  try {
    const { itemList, history } = payload
    const resultItemList = yield createItemList(itemList)
    yield history.push(urls.index)
    yield put(createItemListSucceded(resultItemList))

  } catch (error) {
    yield put(createItemListFailed(error))
  }
}

export function* fetchItemListSaga({ payload }): Iterator<Object | Task> {
  try {
    const item = yield fetchItemListById(payload)
    yield put(fetchItemListSucceded(item))
  } catch (error) {
    yield put(fetchItemListFailed(error))
  }
}

export function* updateItemListSaga({ payload }): Iterator<Object | Task> {
  try {
    const { item, history } = payload
    const updatedItem = yield updateItemList(item)
    history.push(urls.index)
    yield put(updateItemListSucceded(updatedItem))
  } catch (error) {
    yield put(updateItemListFailed(error))
  }
}

export function* deleteItemListSaga({ payload }): Iterator<Object | Task> {
  try {
    const { item, history } = payload
    const result = yield deleteItemList(item.id)
    history.push(urls.index)
    yield put(deleteItemListSucceded(result))
  } catch (error) {
    yield put(deleteItemListFailed(error))
  }
}
export function* itemListSaga() {
  yield [
    takeEvery(createItemListRequested().type, createItemListsSaga),
    takeEvery(fetchItemListRequested().type, fetchItemListSaga),
    takeEvery(updateItemListRequested().type, updateItemListSaga),
    takeEvery(deleteItemListRequested().type, deleteItemListSaga),
  ]
}

