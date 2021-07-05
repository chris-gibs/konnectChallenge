import userImg from '../assets/images/currentUser.png'
import matchImg from '../assets/images/matchUser.png'

const initialState = {
  userImg: userImg,
  userCoords: {lat: -27.455741, lng: 153.042377},
  matchName: 'Charlotte King',
  matchImg: matchImg,
  matchCoords: {lat: -27.455325874374758, lng: 153.04392266275087},
  dateTimes: ["Saturday 6:30", "Saturday 7:30", "Sunday 6:30", "Sunday 7:30", "Sunday 8:30", "Select Enter"],
  themes: ["Dinner", "Drinks", "Dessert", "Trivia", "Movies", "Custom"],
  chosenDay: null,
  chosenTime: null,
  chosenTheme: null,
  chosenLocation: null
}

export default initialState