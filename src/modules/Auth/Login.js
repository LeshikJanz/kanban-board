import React from "react"
import { connect } from "react-redux"
import { loginRequested } from "./actions"

class Login extends React.Component {
  state = { email: "", password: "" }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state, this.props.history)
  }

  handleChange = ({ target }) =>
    this.setState({ [target.name]: target.value })

  render() {
    const { email, password } = this.state
    return (
      <div>
        <h1>Authorization</h1>
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
          <button className="primary" disabled={!(email && password)}>Log In</button>
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
  login: (user, history) =>
    dispatch(loginRequested({ user, history }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
