import React, {memo, useRef, useCallback} from 'react'
import {
  GoogleMap, useLoadScript, Marker
} from '@react-google-maps/api'
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng
// } from 'use-places-autocomplete'
// import {
//   Combobox, ComboboxInput, ComboboxPopover,
//   ComboboxList, ComboboxOption
// } from '@reach/combobox'
import {useGlobalState} from "../utils/stateContext"
import mapStyling from './mapStyling'
// import Search from './Search'


const libraries = ["places"]

const Map = () => {
  const {store, dispatch} = useGlobalState()
  const {userDetails, matchDetails, map, places, themes, chosenTheme} = store

  
  const mapContainerStyle = {
    width: '414px',
    height: '857px',
    zIndex: -5
  }
  const center = {
    lat: (userDetails.coords.lat + matchDetails.coords.lat)/2,
    lng: (userDetails.coords.lng + matchDetails.coords.lng)/2
  }
  const options = {
    styles: mapStyling,
    disableDefaultUI: true,
    keyboardShortcuts: false
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries
  })

  const mapRef = useRef()
  const onLoad = useCallback(
    (mapInstance) => {
      mapRef.current = mapInstance
      dispatch({type: 'setMap', payload: mapInstance})

      const service = new window.google.maps.places.PlacesService(mapInstance)
      service.nearbySearch({
          location: center,
          radius: '1000',
          type: [themes[chosenTheme]],
          openNow: true
      }, (places) => dispatch({type: 'setPlaces', payload: places}))
    }, []
  )

  const renderPlaces = () => {
    return places.map((place) =>
      <Marker
        key={place.place_id}
        position={place.geometry.location}
        icon={{url: place.icon}}
        onClick={() => {
          console.log("Click")
          // dispatch({type: 'setLocation', payload: this.value})
        }}
      />
    )
  }
  
  // {
  //   url: '../assets/images/foodIcon.svg',
  //   scaledSize: new window.google.maps.Size(50,50),
  //   origin: new window.google.maps.Point(0,0),
  //   anchor: new window.google.maps.Point(25,25)
  // }

  if(loadError) return "Error loading map"
  if(!isLoaded) return "Loading map"

  return (
    <>
    {/* <Search /> */}
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      options={options}
      onLoad={onLoad}
    >
      {places && console.log(places[0])}
      {places && renderPlaces()}
    </GoogleMap>
    </>
  )

  //Try SVG styling
  // const styling = {
  //   borderRadius: '50%',
  //   objectPosition: '50%',
  //   objectFit: 'cover',
  //   width: '33px',
  //   height: '33px',
  //   border: '4px solid $white'
  // }
}

export default memo(Map)