import { todoSaga } from "./Todo/sagas"
import { todoListSaga } from "./TodoList/sagas"
import { mainSaga } from "./Main/sagas"
import { itemListSaga } from "./ItemList/sagas"
import { itemSaga } from "./Item/sagas"
import { boardSaga } from "./Board/sagas"

export default function* rootSaga() {
  yield [
    todoSaga(),
    mainSaga(),
    itemListSaga(),
    itemSaga(),
    boardSaga(),
    todoListSaga()
  ]
}
