import { todoSaga } from "./Todo/sagas"
import { todoListSaga } from "./TodoList/sagas"
import { mainSaga } from "./Main/sagas"
import { itemListSaga } from "./ItemList/sagas"
import { itemSaga } from "./Item/sagas"

export default function* rootSaga() {
  yield [
    todoSaga(),
    mainSaga(),
    itemListSaga(),
    itemSaga(),
    todoListSaga()
  ]
}
