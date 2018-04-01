// @flow
import React, { Fragment } from "react"
import "../styles/welcome.scss"

const Welcome = () => (
  <div className="welcomeContainer">
    <h1 className="welcome">Welcome to the Kanban board App</h1>
    <h2 className="emptyBoardTitle">
      There is no one Board List. Tap to the New Button at the top left corner for starting your experience.
    </h2>
  </div>
)

export default Welcome
