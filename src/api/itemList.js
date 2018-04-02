// @flow
import type { ItemList } from "types/itemList"
import { request } from "./base"
import { Item } from "types/item"

export const fetchItemLists = () =>
  request
    .get(`itemLists?filter={"where": { "accountId": ${localStorage.getItem('userId')} },"include": "items"}`, {})
    .then((items: Item[]) => items)

export const createItemList = (itemList: ItemList) =>
  request
    .post('itemLists', { ...itemList, "accountId": localStorage.getItem("userId") })
    .then((itemList: ItemList) => itemList)

export const fetchItemListById = (id: string) =>
  request
    .get(`itemLists/${id}`, {})
    .then((item: Item) => item)

export const updateItemList = (itemList: ItemList) =>
  request
    .put('itemLists', { ...itemList, "accountId": localStorage.getItem("userId") })
    .then((res: Item) => res)

export const deleteItemList = (id: string) =>
  request
    .delete(`itemLists/${id}`, {})
    .then((res: number) => res)

export const updateItemsOrder = (ids: Object) =>
  request
    .post(`itemLists/updateItemsOrder`, { ids })
    .then((res: boolean) => res)

export const updateItemListsOrder = (ids: string[]) =>
  request
    .post(`itemLists/updateItemListsOrder`, { ids })
    .then((res: boolean) => res)
