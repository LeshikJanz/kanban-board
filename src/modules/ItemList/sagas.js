import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import { deleteTodo, fetchTodos, updateTodo, updateOrder } from "api/item"
import {
  createItemListRequested,
  createItemListSucceded,
  createItemListFailed,
} from "./actions"
import { createItemList } from "api/itemList"
import urls from "urls"
import { fetchItemListsRequested } from "modules/Main/actions"

export function* createItemListsSaga({ payload }): Iterator<Object | Task> {
  try {
    const { itemList, history } = payload
    const resultItemList = yield createItemList(itemList)
    yield put(fetchItemListsRequested())
    history.push(urls.index)
    yield put(createItemListSucceded(resultItemList))

  } catch (error) {
    yield put(createItemListFailed(error))
  }
}

export function* itemListSaga() {
  yield [
    takeEvery(createItemListRequested().type, createItemListsSaga),
  ]
}

