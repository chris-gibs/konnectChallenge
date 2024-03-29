// import css
import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Match = () => {
  const {store} = useGlobalState()
  const {matchDetails} = store

  return (
    <>
      <p id='matchText'>
        Let's start creating a date with {matchDetails.name.replace(/ .*/,'')} and you.
      </p>
      <Link to="/Datetime">
        <button id='begin' type="button">Begin!</button>
      </Link>
    </>
  )
}

export default Match