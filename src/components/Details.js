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
      {view !== '/' && <h1>
        Let’s meet up on
        {chosenDay && chosenTime ? ` ${chosenDay} ${chosenTime} ` : ' ___ '}
        {!view.match(/^(\/Datetime)$/) && ` and go to ${chosenTheme ? ` ${chosenTheme} ` : ` ___ `}`}
        {!view.match(/^(\/Datetime|\/Theme)$/) && ` at ${chosenLocation ? ` ${chosenLocation}` : ` ___`}`}
      </h1>}
    </>
  )
}

export default Details