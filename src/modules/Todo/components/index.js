import React from "react"
import '../styles/style.scss'
import TodoForm from "./todoForm"

export const ItemTodo: any = ({ handleSubmit }) => (
  <div className="todoContainer">
    <TodoForm onSubmit={handleSubmit}/>
  </div>
)
