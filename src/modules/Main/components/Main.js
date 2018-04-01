import React, { Fragment } from 'react'
import Board from "modules/Board/Board"
import Welcome from "./Welcome"
import '../styles/style.scss'

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
      <h1>Loading...</h1>
    )
  }

  return (
    <Fragment>
      {
        itemLists ? <Board initial={itemLists}/> : <Welcome/>
      }
    </Fragment>
  )
}

export default Base
