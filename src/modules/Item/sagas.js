import { put, call, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import { deleteTodo, fetchTodos, updateTodo, updateOrder } from "api/item"
import {
  createItemRequested,
  createItemSucceded,
  createItemFailed,
} from "./actions"
import { createItem } from "api/item"
import urls from "urls"
import { fetchItemListsRequested } from "modules/Main/actions"

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

export function* itemSaga() {
  yield [
    takeEvery(createItemRequested().type, createItemSaga),
  ]
}

