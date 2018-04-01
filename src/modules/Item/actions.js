import { createAction } from "utils/createAction"

export const createItemRequested = createAction('CREATE_ITEM_REQUESTED')
export const createItemSucceded = createAction('CREATE_ITEM_SUCCEDED')
export const createItemFailed = createAction('CREATE_ITEM_FAILED')
