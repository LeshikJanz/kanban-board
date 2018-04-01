import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import { deleteTodo, fetchTodos, updateTodo, updateOrder } from "api/item"
import {
  createItemRequested,
  createItemSucceded,
  createItemFailed,
  fetchItemRequested,
  fetchItemSucceded,
  fetchItemFailed,
} from "./actions"
import { createItem } from "api/item"
import urls from "urls"
import { fetchItemListsRequested } from "modules/Main/actions"
import { fetchItemById, updateItem, deleteItem } from "api/item"
import {
  updateItemRequested,
  updateItemSucceded,
  updateItemFailed,
  deleteItemRequested,
  deleteItemSucceded,
  deleteItemFailed,
} from "./actions"

export function* createItemSaga({ payload }): Iterator<Object | Task> {
  try {
    const { item, history } = payload
    const resultItemList = yield createItem(item.itemListId, item)
    yield put(fetchItemListsRequested(resultItemList))
    yield history.push(urls.index)
    yield put(createItemSucceded(resultItemList))
  } catch (error) {
    yield put(createItemFailed(error))
  }
}

export function* fetchItemSaga({ payload }): Iterator<Object | Task> {
  try {
    const item = yield fetchItemById(payload)
    yield put(fetchItemSucceded(item))
  } catch (error) {
    yield put(fetchItemFailed(error))
  }
}

export function* updateItemSaga({ payload }): Iterator<Object | Task> {
  try {
    const { item, history } = payload
    const updatedItem = yield updateItem(item)
    history.push(urls.index)
    yield put(updateItemSucceded(updatedItem))
  } catch (error) {
    yield put(updateItemFailed(error))
  }
}

export function* deleteItemSaga({ payload }): Iterator<Object | Task> {
  try {
    const { item, history } = payload
    const result = yield deleteItem(item.id)
    history.push(urls.index)
    yield put(deleteItemSucceded(result))
  } catch (error) {
    yield put(deleteItemFailed(error))
  }
}

export function* itemSaga() {
  yield [
    takeEvery(createItemRequested().type, createItemSaga),
    takeEvery(fetchItemRequested().type, fetchItemSaga),
    takeEvery(updateItemRequested().type, updateItemSaga),
    takeEvery(deleteItemRequested().type, deleteItemSaga),
  ]
}

