import React from 'react'
import { Header } from "./Header"
import Board from "modules/Board/Board"
import Welcome from "./Welcome"
import { authorQuoteMap, generateQuoteMap } from '../data'
import '../styles/style.scss'

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

const Base = ({ itemLists, loading }) => {
  if (loading) {
    return (
      <div className="mainContainer">
        <Header/>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="mainContainer">
      <Header/>
      {
        itemLists ? <Board initial={itemLists}/> : <Welcome/>
      }
    </div>
  )
}

export default Base
