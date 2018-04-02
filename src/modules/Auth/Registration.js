import React from "react"
import { connect } from "react-redux"
import { registrationRequested } from "./actions"

class Registration extends React.Component {
  state = { email: "", password: "" }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.register(this.state, this.props.history)
  }

  handleChange = ({ target }) =>
    this.setState({ [target.name]: target.value })

  render() {
    const { email, password } = this.state
    return (
      <div>
        <h1>Registration</h1>
        <form className="createItemForm" onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email" name="email"
            value={email}
            onChange={this.handleChange}/>
          <label>Password</label>
          <input
            type="password" name="password"
            value={password}
            onChange={this.handleChange}/>
          <button className="primary" disabled={!(email && password)}>Register</button>
        </form>
        <div className="error">
          {this.props.error && this.props.error.message}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.User.error
})

const mapDispatchToProps = (dispatch) => ({
  register: (user, history) =>
    dispatch(registrationRequested({ user, history }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
