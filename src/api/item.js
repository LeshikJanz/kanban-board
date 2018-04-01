import { request } from "./base"
import { Item } from "types/item"

export const fetchItems = () =>
  request
    .get('items', {})
    .then((items: Item[]) => items)

export const fetchItemById = (id: string) =>
  request
    .get(`items/${id}`, {})
    .then((item: Item) => item)

export const updateItem = (item: Item) =>
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
