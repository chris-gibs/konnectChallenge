import {Link} from "react-router-dom"
import {useGlobalState} from "../utils/stateContext"

const Theme = () => {
  const {store, dispatch} = useGlobalState()
  const {themes} = store

  const handleClick = (event) => {
    dispatch({type: 'setTheme', payload: event.target.innerText})
  }

  return (
    <>
      <p id='themeText'>Select a pre-filled time slot or suggest your own.</p>
      <div id='themeContainer'>
        <Link to="/Location">
          {themes.map((theme, index) => 
            <button key={index} className="options" type="button" onClick={handleClick}>{theme}</button>
          )}
        </Link>
      </div>
    </>
  )
}

export default Theme