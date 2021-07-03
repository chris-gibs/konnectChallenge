// import css
import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Match = () => {
  const {store} = useGlobalState()
  const {matchName} = store

  return (
    <>
      <h1 id="titleMatch">It's a Match!</h1>
      <p>
        Let's start creating a date with {matchName.replace(/ .*/,'')} and you.
      </p>
      <Link to="/Datetime">
        <button type="button">Begin!</button>
      </Link>
    </>
  )
}

export default Match