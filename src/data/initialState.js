import currentUserImg from '../assets/images/currentUser.png'
import matchImg from '../assets/images/matchUser.png'

const initialState = {
  currentUserImg: currentUserImg,
  currentUserCoords: {lat: -27.455741, lng: 153.042377},
  matchName: 'Charlotte King',
  matchImg: matchImg,
  matchCoords: {lat: -27.455325874374758, lng: 153.04392266275087},
  days: ["Saturday", "Sunday"],
  times: ["6:30", "7:30", "8:30"],
  themes: ["Dinner", "Drinks", "Dessert", "Trivia", "Movies", "Custom"],
  chosenDay: null,
  chosenTime: null,
  chosenTheme: null,
  chosenLocation: null
}

export default initialState