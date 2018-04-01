import React from 'react'
import { Header } from "./header"
import Board from "components/Board"
import { authorQuoteMap, generateQuoteMap } from '../data'
const styles = require('../styles/style.scss')
const classNames = require('classnames/bind')
const cx = classNames.bind(styles)

const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500),
};

const initialData = {
  TODO: [
    {
      id: 0,
      title: "first",
      description: "first one description",
    },
    {
      id: 1,
      title: "second",
      description: "second one description",
    }
  ],
  DOING: [
    {
      id: 2,
      title: "third",
      description: "third one description",
    },
    {
      id: 3,
      title: "fourth",
      description: "fourth one description",
    }
  ],
}

export const Base = ({ menuType, handleMenu, backToMainPage, children, location }) => {
  console.log("authorQuoteMap")
  console.log(authorQuoteMap)

  return (
    <div className="main-container">
      <Header/>
      <Board initial={initialData}/>
      <h1 className="welcome">Welcome to the Kanban board App</h1>
      <div className="navMenu" onClick={() => backToMainPage(location.pathname)}>
        <a onClick={handleMenu} className={cx([{ 'active': menuType === 'active' }])}>Active</a>
        <a onClick={handleMenu} className={cx([{ 'active': menuType === 'finished' }])}>Finished</a>
      </div>
      {children}
    </div>
  )
}
