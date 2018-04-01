import React from 'react'
import '../styles/style.scss'
import { Link } from 'react-router-dom'
import { urls } from "../../../urls"

export const Header = () => (
  <div className="headerContainer">
    <div className="actions">
      <Link to={urls.todo}>
        <img src="assets/icons/new-group.png"/>
      </Link>
      <Link to={urls.todo}>
        <img src="assets/icons/new-item.png"/>
      </Link>
    </div>
    <div className="headerText">Kanban board implemented by Alex Tereshko</div>
    <h1 className="login">Login, Registration</h1>
  </div>
)
