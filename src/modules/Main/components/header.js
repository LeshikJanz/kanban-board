import React from 'react'
import '../styles/style.scss'
import { Link } from 'react-router-dom'
import urls from "urls"
import LoggedUser from "./LoggedUser"

const Header = () => (
  <div className="headerContainer">
    <div className="actions">
      <Link to={urls.list}>
        <img src="assets/icons/new-group.png"/>
      </Link>
      <Link to={urls.item}>
        <img src="assets/icons/new-item.png"/>
      </Link>
    </div>
    <Link to={urls.index}>
      <div className="headerText">Kanban board implemented by Alex Tereshko</div>
    </Link>
    {localStorage.getItem("email") ? <LoggedUser/>
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
)

export default Header
