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
      {/* <div id='map'></div> */}
      <p id="locationText">Select a pre-filled date location or suggest another date location.</p>
      <Map />
      <Link to="/Finalise">
        <button type="button" onClick={handleClick}>Grill'd</button>
      </Link>
      <h1 id="searchTitle">Search Location</h1>
      <input type="text"></input>
    </>
  )
}

export default Location