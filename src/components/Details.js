import {useGlobalState} from "../utils/stateContext"
import {useLocation} from "react-router-dom"

const CurrentView = () => {
  return useLocation().pathname
}

const Details = () => {
  let view = CurrentView()
  const {store} = useGlobalState()
  const {chosenDay, chosenTime, chosenTheme, chosenLocation} = store

  return (
    <>
      {
        view !== '/' ?
        <h1 >
          <p className='details'>Let’s meet up on</p>
          <span className={`details smitten`}>
            {chosenDay && chosenTime ? ` ${chosenDay} ${chosenTime} ` : ' ___ '}
          </span>
          {!view.match(/^(\/Datetime)$/) && 
          <>
            <p className='details'>and go to</p>
            <span className='details smitten'>
              {chosenTheme ? ` ${chosenTheme} ` : ` ___ `}
            </span>
          </>
          }
          {!view.match(/^(\/Datetime|\/Theme)$/) && 
          <>
            <p className='details'>at</p>
            <span className='details smitten'>
              {chosenLocation ? ` ${chosenLocation}` : ` ___`}
            </span>
          </>
          }
        </h1>
        : <h1 id='matchTitle'>It's A Match!</h1>
      }
    </>
  )
}

export default Details