import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga"
import {
  updateItemsOrderRequested,
  updateItemsOrderSucceded,
  updateItemsOrderFailed
} from "./actions"
import { updateItemsOrder } from "api/itemList"

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
    takeEvery(updateItemsOrderRequested().type, updateItemsOrderSaga),
  ]
}

