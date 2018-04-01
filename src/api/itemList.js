// @flow
import type { ItemList } from "types/itemList"
import { request } from "./base"
import { Item } from "types/item"

export const fetchItemLists = () =>
  request
    .get('itemLists?filter={"include": "items"}', {})
    .then((items: Item[]) => items)

export const createItemList = (itemList: ItemList) =>
  request
    .post('itemLists', itemList)
    .then((itemList: ItemList) => itemList)

export const fetchItemListById = (id: string) =>
  request
    .get(`itemLists/${id}`, {})
    .then((item: Item) => item)

export const updateItemList = (item: Item) =>
  request
    .put('items', item)
    .then((res: Item) => res)

export const deleteItem = (id: string) =>
  request
    .delete(`items/${id}`, {})
    .then((res: number) => res)

export const updateItemsOrder = (ids: string[]) =>
  request
    .post(`itemLists/updateItemsOrder`, { ids })
    .then((res: boolean) => res)
