import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Finalise = () => {
  const {store} = useGlobalState()
  const {chosenDay, chosenTime, chosenTheme, chosenLocation} = store

  return (
    <>
      <div id="editContainer">
        <Link to="/Datetime" >
          <button className="edit" id="daytimeEdit" type="button">
            <h1 className='editHeader'>Date & Time</h1>
            <p>{chosenTime} {chosenDay}</p>
            <img src="" alt="Edit"/>
          </button>
        </Link>
        <Link to="/Theme" >
          <button className="edit" id="themeEdit" type="button">
            <h1 className='editHeader'>Date Theme</h1>
            <p>{chosenTheme}</p>
            <img src="" alt="Edit"/>
          </button>
        </Link>
        <Link to="/Location" >
          <button className="edit" id="locationEdit" type="button">
            <h1 className='editHeader'>Location</h1>
            <p>{chosenLocation}</p>
            <img src="" alt="Edit"/>
          </button>
        </Link>
      </div>
      <Link to="/" >
        <button id="slideButton" type="button">Slide To Send</button>
      </Link>
    </>
  )
}

export default Finalise