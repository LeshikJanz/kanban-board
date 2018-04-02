import { authSaga } from "./Auth/sagas"
import { mainSaga } from "./Main/sagas"
import { itemListSaga } from "./ItemList/sagas"
import { itemSaga } from "./Item/sagas"
import { boardSaga } from "./Board/sagas"

export default function* rootSaga() {
  yield [
    authSaga(),
    mainSaga(),
    itemListSaga(),
    itemSaga(),
    boardSaga(),
  ]
}
