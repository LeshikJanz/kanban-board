import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import Todos from "modules/TodoList/reducers/todoListReducer"
import { routerReducer } from "react-router-redux"

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  Todos
})
