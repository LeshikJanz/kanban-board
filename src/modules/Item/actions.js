import { createAction } from "utils/createAction"

export const createItemRequested = createAction('CREATE_ITEM_REQUESTED')
export const createItemSucceded = createAction('CREATE_ITEM_SUCCEDED')
export const createItemFailed = createAction('CREATE_ITEM_FAILED')

export const fetchItemRequested = createAction('FETCH_ITEM_REQUESTED')
export const fetchItemSucceded = createAction('FETCH_ITEM_SUCCEDED')
export const fetchItemFailed = createAction('FETCH_ITEM_FAILED')

export const updateItemRequested = createAction('UPDATE_ITEM_REQUESTED')
export const updateItemSucceded = createAction('UPDATE_ITEM_SUCCEDED')
export const updateItemFailed = createAction('UPDATE_ITEM_FAILED')

export const deleteItemRequested = createAction('DELETE_ITEM_REQUESTED')
export const deleteItemSucceded = createAction('DELETE_ITEM_SUCCEDED')
export const deleteItemFailed = createAction('DELETE_ITEM_FAILED')
