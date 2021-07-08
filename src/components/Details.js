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
      {view !== '/' ?
        <div id='detailsContainer'>
          <h1 className='details'>Let’s meet up on</h1>
          <span className='details smitten'>
            {chosenDay && chosenTime ? ` ${chosenDay} ${chosenTime} ` : ' ___ '}
          </span>
          {!view.match(/^(\/Datetime)$/) && 
            <>
              <h1 className='details'>and go to</h1>
              <span className='details smitten'>
                {chosenTheme ? ` ${chosenTheme} ` : ` ___ `}
              </span>
            </>
          }
          {!view.match(/^(\/Datetime|\/Theme)$/) && 
            <>
              <h1 className='details'>at</h1>
              <span className='details smitten'>
                {chosenLocation ? ` ${chosenLocation}` : ` ___`}
              </span>
            </>
          }
        </div>
        : <h1 id='matchTitle'>It's A Match!</h1>
      }
    </>
  )
}

export default Details