import { createAction } from "utils/createAction"

export const fetchItemListsRequested = createAction('FETCH_ITEM_LIST_REQUESTED')
export const fetchItemListsSucceded = createAction('FETCH_ITEM_LIST_SUCCEDED')
export const fetchItemListsFailed = createAction('FETCH_ITEM_LIST_FAILED')
