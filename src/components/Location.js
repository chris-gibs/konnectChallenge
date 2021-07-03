import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"
import Map from "../utils/googleMaps"

const Location = () => {
  const {dispatch} = useGlobalState()

  const handleClick = (event) => {
    dispatch({type: 'setLocation', payload: event.target.innerText})
  }

  return (
    <>
      <p>date location.</p>
      <Map />
      <Link to="/Finalise">
        <button type="button" onClick={handleClick}>Grill'd</button>
      </Link>
      <h3 id="searchTitle">Search Location</h3>
      <input type="text"></input>
    </>
  )
}

export default Location