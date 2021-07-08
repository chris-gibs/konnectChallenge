import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"
import edit from "../assets/images/editIcon.png"

const Finalise = () => {
  const {store} = useGlobalState()
  const {chosenDay, chosenTime, chosenTheme, chosenLocation} = store

  return (
    <>
      <div id="editContainer">
        <Link to="/Datetime" >
          <button className="edit" type="button">
            <h1 className='editHeader'>Date & Time</h1>
            <p className='editText'>{chosenTime} {chosenDay}</p>
            <img src={edit} alt="Edit" className='editIcon'/>
          </button>
        </Link>
        <Link to="/Theme" >
          <button className="edit" type="button">
            <h1 className='editHeader'>Date Theme</h1>
            <p className='editText'>{chosenTheme}</p>
            <img src={edit} alt="Edit" className='editIcon'/>
          </button>
        </Link>
        <Link to="/Location" >
          <button className="edit" type="button">
            <h1 className='editHeader'>Location</h1>
            <p className='editText'>{chosenLocation}</p>
            <img src={edit} alt="Edit" className='editIcon'/>
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