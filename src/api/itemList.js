import { request } from "./base"
import { Item } from "types/item"

export const fetchItemLists = () =>
  request
    .get('items', {})
    .then((items: Item[]) => items)

export const fetchItemListById = (id: string) =>
  request
    .get(`items/${id}`, {})
    .then((item: Item) => item)

export const updateItemList = (item: Item) =>
  request
    .put('items', item)
    .then((res: Item) => res)

export const deleteItem = (id: string) =>
  request
    .delete(`items/${id}`, {})
    .then((res: number) => res)

export const updateOrder = (ids: string[]) =>
  request
    .post(`items/updateOrder`, { ids })
    .then((res: boolean) => res)
