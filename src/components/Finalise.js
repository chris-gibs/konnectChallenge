import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"
import edit from "../assets/images/editIcon.png"

const Finalise = () => {
  const {store} = useGlobalState()
  const {chosenDay, chosenTime, chosenTheme, chosenLocation} = store
  
  const editButtons = [
    {page: "/Datetime", header: "Date & Time", text: `${chosenTime} ${chosenDay}`},
    {page: "/Theme", header: "Date Theme", text: chosenTheme},
    {page: "/Location", header: "Location", text: chosenLocation}
  ]

  return (
    <>
      <div id="editContainer">
        {editButtons.map(({page, header, text}, index) => 
          <Link to={page}>
            <button key={index} className="edit" type="button">
              <h1 className='editHeader'>{header}</h1>
              <p className='editText'>{text}</p>
              <img src={edit} alt="Edit" className='editIcon'/>
            </button>
          </Link>
        )}
      </div>
      <Link to="/" >
        <button id="slideButton" type="button">Slide To Send</button>
      </Link>
    </>
  )
}

export default Finalise