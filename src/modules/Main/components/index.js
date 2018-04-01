import React from 'react'
import { Header } from "./Header"
import Board from "components/Board"
import Welcome from "./Welcome"
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

class Base extends React.Component {
  render() {
    const { menuType, handleMenu, backToMainPage, children, location } = this.props

    return (
      <div className="main-container">
        <Header/>
        {
          !initialData && <Welcome/>
        }
        <Board initial={initialData}/>
      </div>
    )
  }
}

export default Base
