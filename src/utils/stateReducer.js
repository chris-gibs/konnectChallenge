const reducer = (state, action) => {
  switch(action.type) {
    case 'setDatetime': {
      return {
        ...state,
        chosenDay: action.payload[0],
        chosenTime: action.payload[1]
      }
    }
    case 'setTime': {
      return {
        ...state,
        chosenTime: action.payload
      }
    }
    case 'setTheme': {
      return {
        ...state,
        chosenTheme: action.payload
      }
    }
    case 'setLocation': {
      return {
        ...state,
        chosenLocation: action.payload
      }
    }
    case 'setMap': {
      return {
        ...state,
        map: action.payload
      }
    }
    default: return state
  }
}

export default reducer