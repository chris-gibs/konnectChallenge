import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Datetime = () => {
  const {store, dispatch} = useGlobalState()
  const {dateTimes} = store

  const handleClick = (event) => {
    dispatch({type: 'setDatetime', payload: event.currentTarget.value.split(" ")})
  }
  

  return (
    <>
      <div id="datetimeContainer">
        <p id="datetimeText">Select a pre-filled time slot or suggest your own.</p>
        <Link to="/Theme">
          {dateTimes.map((dateTime, index) => 
            <button key={index} className="options" type="button" value={dateTime} onClick={handleClick}>
              {dateTime.split(" ").map((data, index) =>
                <span key={index} className={index === 0 ? 'day' : undefined}>{data}</span>
              )}
            </button>
          )}
        </Link>
      </div>
    </>
  )
}

export default Datetime