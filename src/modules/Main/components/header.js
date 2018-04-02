import React, { Fragment } from 'react'
import '../styles/style.scss'
import { Link } from 'react-router-dom'
import urls from "urls"
import LoggedUser from "./LoggedUser"
import { isAuthorized } from "utils/auth"

const Header = () => (
  <div className="headerContainer">
    <div className="actions">
      {
        isAuthorized() &&
        <Fragment>
          <Link to={urls.list}>
            <img src="assets/icons/new-group.png"/>
          </Link>
          <Link to={urls.item}>
            <img src="assets/icons/new-item.png"/>
          </Link>
        </Fragment>
      }
    </div>
    <div className="authContainer">
      <Link to={urls.index} className="indexLink">
        <div className="headerText">Kanban board is implemented by Alex Tereshko</div>
      </Link>
      {isAuthorized() ? <LoggedUser/>
        : (
        <div className="authButtons">
          <Link to={urls.login}>
            <button>Login</button>
          </Link>
          <Link to={urls.register}>
            <button>Registration</button>
          </Link>
        </div>
      )
      }
    </div>
  </div>
)

export default Header
