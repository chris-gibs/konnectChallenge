import {useGlobalState} from "../utils/stateContext"
import {useLocation} from "react-router-dom"

const CurrentView = () => {
  return useLocation().pathname
}

const Details = () => {
  let view = CurrentView()
  const {store} = useGlobalState()
  const {matchDetails, chosenDay, chosenTime, chosenTheme, chosenLocation} = store

  const details = [
    {
      page: "/",
      header: "It's A Match!",
      span: null,
      text: `Let's start creating a date with ${matchDetails.name.replace(/ .*/,'')} and you.`
    },
    {
      page: "/Datetime",
      header: "Let’s meet up on",
      span:
        <span className='smitten'>
          {chosenDay && chosenTime ? ` ${chosenDay} ${chosenTime} ` : ' ___ '}
        </span>,
      text: "Select a pre-filled time slot or suggest your own."
    },
    {
      page: "/Theme",
      header: "and go to",
      span:
        <span className='smitten'>
          {chosenTheme ? ` ${chosenTheme} ` : ` ___ `}
        </span>,
      text: "Select a pre-filled date idea or suggest your own idea."
    },
    {
      page: "/Location",
      header: "at",
      span: 
        <span className='smitten'>
          {chosenLocation ? ` ${chosenLocation}` : ` ___`}
        </span>,
      text: "Select a pre-filled date location or suggest another date location."
    }
  ]

  return (
    <>
      <div id='detailsContainer'>
        <h1 id={view === "/" ? "matchHeader" : "details"}>
          {!view.match(/^(\/Datetime)$/) && }
        </h1>
        <p id="text">{text}</p>
      </div>
{/* {view !== '/' ?
    
    
    {!view.match(/^(\/Datetime|\/Theme)$/) && 
      <>
        <h1 className='details'>at</h1>
        <span className='details smitten'>
          {}
        </span>
      </>
    }
  </div>
  : 
}

  Let’s meet up on
  
</h1>


          
<p id="text">Select a pre-filled time slot or suggest your own.</p>

<p id="text"></p>

<h1 id='matchTitle'></h1>
<p id="text"></p> */}
    </>
  )
}

export default Details