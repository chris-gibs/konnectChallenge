import userImg from '../assets/images/currentUser.png'
import matchImg from '../assets/images/matchUser.png'
import food from '../assets/images/foodIcon.svg'

const initialState = {
  userDetails: {
    img: userImg,
    coords: {lat: -27.455741, lng: 153.042377}
  },
  matchDetails: {
    img: matchImg,
    coords: {lat: -27.455073, lng: 153.036391},
    name: 'Charlotte King'
  },
  dateTimes: ["Saturday 6:30", "Saturday 7:30", "Sunday 6:30", "Sunday 7:30", "Sunday 8:30", "Select Enter"],
  themes: {"Dinner": {type: "restaurant", icon: food}, "Drinks": {type: "bar", icon: food}, "Dessert": {type: "bakery", icon: food}, "Trivia": {type: "restaurant", icon: food}, "Movies": {type: "movie_theater", icon: food}, "Custom": {type: "bowling_alley", icon: food}},
  chosenDay: null,
  chosenTime: null,
  chosenTheme: null,
  chosenLocation: null,
  map: null,
  places: null
}

export default initialState