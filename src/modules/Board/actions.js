import { createAction } from "utils/createAction"

export const updateItemsOrderRequested = createAction('UPDATE_ITEMS_ORDER_REQUESTED')
export const updateItemsOrderSucceded = createAction('UPDATE_ITEMS_ORDER_SUCCEDED')
export const updateItemsOrderFailed = createAction('UPDATE_ITEMS_ORDERS_FAILED')

export const updateItemListsOrderRequested = createAction('UPDATE_ITEM_LISTS_ORDER_REQUESTED')
export const updateItemListsOrderSucceded = createAction('UPDATE_ITEM_LISTS_ORDER_SUCCEDED')
export const updateItemListsOrderFailed = createAction('UPDATE_ITEM_LISTS_ORDERS_FAILED')
