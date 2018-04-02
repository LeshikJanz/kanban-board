import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { withRouter } from "react-router-dom"
import "./style.scss"
import { logoutRequested } from "modules/Auth/actions"

class LoggedUser extends React.Component {
  logout = () =>
    this.props.logout(this.props.history)

  render() {
    return (
      <div className="loggedContainer">
        Logged as: {localStorage.getItem("email")}
        <button className="primary" onClick={this.logout}>
          Log Out
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: (history) => dispatch(logoutRequested({ history }))
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(LoggedUser)
