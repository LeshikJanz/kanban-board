import { createAction } from "../utils/createAction"

export const fetchTodosInit = createAction('FETCH_TODOS_INIT')
export const fetchTodosDone = createAction('FETCH_TODOS_DONE')
export const fetchTodosError = createAction('FETCH_TODOS_ERROR')

export const changeListType = createAction('CHANGE_LIST_TYPE')

export const updateOrderAction = createAction('UPDATE_ORDER_ACTION')

export const createTodoInit = createAction('CREATE_TODO_INIT')
export const createTodoDone = createAction('CREATE_TODO_DONE')
export const createTodoError = createAction('CREATE_TODO_ERROR')

export const updateTodoInit = createAction('UPDATE_TODO_INIT')
export const updateTodoDone = createAction('UPDATE_TODO_DONE')
export const updateTodoError = createAction('UPDATE_TODO_ERROR')

export const fetchTodoByIdInit = createAction('FETCH_TODO_BY_ID_INIT')
export const fetchTodoByIdDone = createAction('FETCH_TODO_BY_ID_DONE')
export const fetchTodoByIdError = createAction('FETCH_TODO_BY_ID_ERROR')

export const deleteTodoInit = createAction('DELETE_TODO_INIT')
export const deleteTodoDone = createAction('DELETE_TODO_DONE')
export const deleteTodoError = createAction('DELETE_TODO_ERROR')


