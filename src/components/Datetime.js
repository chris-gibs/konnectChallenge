import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Datetime = () => {
  const {store, dispatch} = useGlobalState()
  const {days, times} = store

  const handleClick = (event) => {
    dispatch({type: 'setDatetime', payload: event.target.innerText.split(" ")})
  }

  return (
    <>
      <p>Select a pre-filled time slot or suggest your own.</p>
      <Link to="/Theme">
        {days.map(day => times.map((time, index) => 
          <button key={index} className="" type="button" onClick={handleClick}>{day} {time}</button>
        ))}

        <button className="" type="button">Select Enter</button>
      </Link>
    </>
  )
}

export default Datetime