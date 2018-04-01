import { createAction } from "utils/createAction"

export const createItemListRequested = createAction('CREATE_ITEM_LIST_REQUESTED')
export const createItemListSucceded = createAction('CREATE_ITEM_LIST_SUCCEDED')
export const createItemListFailed = createAction('CREATE_ITEM_LIST_FAILED')

export const fetchItemListRequested = createAction('FETCH_ITEM_LIST_REQUESTED')
export const fetchItemListSucceded = createAction('FETCH_ITEM_LIST_SUCCEDED')
export const fetchItemListFailed = createAction('FETCH_ITEM_LIST_FAILED')

export const updateItemListRequested = createAction('UPDATE_ITEM_LIST_REQUESTED')
export const updateItemListSucceded = createAction('UPDATE_ITEM_LIST_SUCCEDED')
export const updateItemListFailed = createAction('UPDATE_ITEM_LIST_FAILED')

export const deleteItemListRequested = createAction('DELETE_ITEM_LIST_REQUESTED')
export const deleteItemListSucceded = createAction('DELETE_ITEM_LIST_SUCCEDED')
export const deleteItemListFailed = createAction('DELETE_ITEM_LIST_FAILED')
