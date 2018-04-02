import React, { Fragment } from 'react'
import Board from "modules/Board/Board"
import Welcome from "./Welcome"
import '../styles/style.scss'

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
