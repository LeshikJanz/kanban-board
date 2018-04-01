import React from 'react'
import '../styles/style.scss'
import { Field, reduxForm } from 'redux-form'

let TodoForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="formElement">
      <label htmlFor="title">Title</label>
      <Field name="title" required component="input" type="text"/>
    </div>
    <div className="formElement">
      <label htmlFor="description">Description</label>
      <Field name="description" required component="textarea" rows="10" type="text"/>
    </div>
    <button>Save</button>
  </form>
)


TodoForm = reduxForm({
  enableReinitialize: true,
  form: 'todoForm'
})(TodoForm)

export default TodoForm
