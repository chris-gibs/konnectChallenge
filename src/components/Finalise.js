import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Finalise = () => {
  const {store} = useGlobalState()
  const {chosenDay, chosenTime, chosenTheme, chosenLocation} = store

  return (
    <>
      <Link to="/Datetime" >
        <button className="" type="button">
          <p>Date & Time</p>
          {chosenTime} {chosenDay}
          <img src="" alt="Edit"/>
        </button>
      </Link>
      <Link to="/Theme" >
        <button className="" type="button">
          <p>Date Theme</p>
          {chosenTheme}
          <img src="" alt="Edit"/>
        </button>
      </Link>
      <Link to="/Location" >
        <button className="" type="button">
          <p>Location</p>
          {chosenLocation}
          <img src="" alt="Edit"/>
        </button>
      </Link>

      <Link to="/" >
        <button className="" type="button">Slide To Send</button>
      </Link>
    </>
  )
}

export default Finalise