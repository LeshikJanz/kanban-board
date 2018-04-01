import { todoSaga } from "./Todo/sagas"
import { todoListSaga } from "./TodoList/sagas"
import { itemListSaga } from "./Main/sagas"

export default function* rootSaga() {
  yield [
    todoSaga(),
    itemListSaga(),
    todoListSaga()
  ]
}
