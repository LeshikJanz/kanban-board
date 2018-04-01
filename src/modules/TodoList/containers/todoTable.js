import { connect } from 'react-redux'
import { compose, lifecycle, withState, withHandlers, withProps } from 'recompose'
import {
  deleteTodoInit, fetchTodosInit, updateOrderAction,
  updateTodoInit
} from "../../actions"
import { TodoTable } from "../components/todoTable"
import { push } from 'react-router-redux'
import { urls } from "../../../urls"

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list,
  loading: state.Todos.loading,
  isFinishedList: state.Todos.type === 'finished'
})

export default compose(
  connect(mapStateToProps),
  withState('checkedItems', 'handleCheckedArray', []),
  withHandlers({
    getTodos: ({ dispatch }) => () => dispatch(fetchTodosInit()),
    gotoTodo: ({ dispatch }) => (id) => dispatch(push(urls.todo + '/' + id)),
    handleFinish: ({ dispatch }) => (todo) => {
      todo.isFinished = !todo.isFinished
      dispatch(updateTodoInit(todo))
    },
    updateTodosOrder: ({ dispatch }) => (todoIds) =>
      dispatch(updateOrderAction(todoIds)),
    handleDelete: ({ dispatch }) => (todoId: string) => dispatch(deleteTodoInit(todoId))
  }),
  lifecycle({
    componentDidMount() {
      this.props.getTodos()
      this.props.handleCheckedArray([])
    }
  })
)
(TodoTable)

