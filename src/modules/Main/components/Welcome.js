// @flow
import React, { Fragment } from "react"
import "../styles/welcome.scss"
import { isAuthorized } from "utils/auth"

const Welcome = () => (
  <div className="welcomeContainer">
    <h1 className="welcome">Welcome to the Kanban board app</h1>
    {
      isAuthorized() ? (
        <h2 className="emptyBoardTitle">
          There is no one Board List. Tap to the New Button at the top left corner for starting your experience.
        </h2>
      ) : (
        <h2 className="emptyBoardTitle">
          Register your account first or log in if you have one
        </h2>
      )
    }
  </div>
)

export default Welcome
