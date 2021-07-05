import './styling/styles.scss';
import React, {useReducer} from 'react'
import Match from './components/Match'
import Datetime from './components/Datetime'
import Theme from './components/Theme'
import Location from './components/Location'
import Finalise from './components/Finalise'
import Avatars from './components/Avatars'
import {StateContext} from './utils/stateContext'
import reducer from './utils/stateReducer'
import initialState from './data/initialState'
import BackButton from './components/BackButton'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{store, dispatch}}>
      <Router>
        <BackButton />
        <Avatars />
        <Details />
        <Switch>
          <Route exact path="/" component={Match}/>
          <Route path="/Datetime" component={Datetime}/>
          <Route path="/Theme" component={Theme}/>
          <Route path="/Location" component={Location}/>
          <Route path="/Finalise" component={Finalise}/>
        </Switch>
      </Router>
    </StateContext.Provider>
  )
}

export default App
