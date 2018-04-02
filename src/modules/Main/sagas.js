import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import {
  fetchItemListsRequested,
  fetchItemListsSucceded,
  fetchItemListsFailed,
} from "./actions"
import { fetchItemLists } from "api/itemList"

export function* fetchItemListsSaga(): Iterator<Object | Task> {
  try {
    const itemLists = yield fetchItemLists()
    yield put(fetchItemListsSucceded(itemLists))
  } catch (error) {
    yield put(fetchItemListsFailed(error))
  }
}

export function* mainSaga() {
  yield [
    takeEvery(fetchItemListsRequested().type, fetchItemListsSaga),
  ]
}

