// import css
import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Match = () => {
  const {store} = useGlobalState()
  const {matchDetails} = store

  return (
    <>
      
      <Link to="/Datetime">
        <button id='begin' type="button">Begin!</button>
      </Link>
    </>
  )
}

export default Match