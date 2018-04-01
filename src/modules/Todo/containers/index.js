import { connect } from 'react-redux'
import { Todo } from "../components/index"
import { createTodoInit, fetchTodoByIdInit } from "../../actions"
import { compose, lifecycle, withState } from 'recompose'

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list,
  todo: state.form.todoForm && state.form.todoForm.values
})

const mergeProps: any = (props, { dispatch }, ownProps): any => ({
  ...props,
  ...ownProps,
  handleSubmit: () => dispatch(createTodoInit()),
  fetchTodo: (id: string) => dispatch(fetchTodoByIdInit(id)),
})

export default compose(
  connect(mapStateToProps, null, mergeProps),
  lifecycle({
    componentDidMount() {
      const todoId = this.props.params && +this.props.params.id
      if (todoId) {
        this.props.fetchTodo(todoId)
      }
    }
  })
)(Todo)
