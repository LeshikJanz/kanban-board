import React from 'react'
import TodoTable from "../containers/todoTable"
require('../styles/style.scss')

export const TodoList = () => (
  <div>
    <div className="tableContainer">
      <TodoTable/>
    </div>
  </div>
)
