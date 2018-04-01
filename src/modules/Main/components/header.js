import React from 'react'
import '../styles/style.scss'
import { Link } from 'react-router-dom'
import urls from "urls"

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
    <div className="authButtons">
      <button>Login</button>
      <button>Registration</button>
    </div>
  </div>
)

export default Header
