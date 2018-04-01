import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import {
  updateItemsOrderRequested,
  updateItemsOrderSucceded,
  updateItemsOrderFailed,
  updateItemListsOrderRequested,
  updateItemListsOrderSucceded,
  updateItemListsOrderFailed
} from "./actions"
import { updateItemListsOrder, updateItemsOrder } from "api/itemList"

export function* updateItemListsOrderSaga({ payload }): Iterator<Object | Task> {
  try {
    const { ordered } = yield updateItemListsOrder(payload)
    if (!ordered) {
      throw new Error("Ordering failed")
    }

    yield put(updateItemListsOrderSucceded(ordered))
  } catch (error) {
    yield put(updateItemListsOrderFailed(error))
  }
}

export function* updateItemsOrderSaga({ payload }): Iterator<Object | Task> {
  try {
    const { ordered } = yield updateItemsOrder(payload)
    if (!ordered) {
      throw new Error("Ordering failed")
    }

    yield put(updateItemsOrderSucceded(ordered))
  } catch (error) {
    yield put(updateItemsOrderFailed(error))
  }
}

export function* boardSaga() {
  yield [
    takeEvery(updateItemListsOrderRequested().type, updateItemListsOrderSaga),
    takeEvery(updateItemsOrderRequested().type, updateItemsOrderSaga),
  ]
}

