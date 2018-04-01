import { todoSaga } from "./Todo/sagas"
import { todoListSaga } from "./TodoList/sagas"

export default function* rootSaga() {
  yield [
    todoSaga(),
    todoListSaga()
  ]
}
