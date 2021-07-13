import React, {memo, useRef, useCallback} from 'react'
import {useHistory} from "react-router-dom"
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
  const {userDetails, matchDetails, places, themes, chosenTheme} = store
  const users = [userDetails, matchDetails]
  
  const mapContainerStyle = {
    width: '414px',
    height: '802px',
    top: '55px',
    left: 0,
    position: 'absolute',
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
          type: chosenTheme && [themes[chosenTheme].type],
          openNow: true
      }, (places) => dispatch({type: 'setPlaces', payload: places}))
    }, []
  )

  const renderUsers = () => {
    return users.map((user, index) =>
      <Marker
        key={index}
        position={user.coords}
        icon={{
          url: user.img,
          scaledSize: new window.google.maps.Size(35,35),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(25,25)
        }}
        zIndex={-1}
      />
    )
  }
  //Try SVG styling
  // const styling = {
  //   borderRadius: '50%',
  //   objectPosition: '50%',
  //   objectFit: 'cover',
  //   width: '33px',
  //   height: '33px',
  //   border: '4px solid $white'
  // }
  const history = useHistory()

  const renderPlaces = () => {
    return places.map((place) =>
      <Marker
        key={place.place_id}
        position={place.geometry.location}
        icon={{
          url: chosenTheme && themes[chosenTheme].icon,
          scaledSize: new window.google.maps.Size(35,35),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15,15),
          labelOrigin: new window.google.maps.Point(20,45)
        }}
        label={place.name}
        labelOrigin={new window.google.maps.Point(0,0)}
        onClick={() => {
          dispatch({type: 'setLocation', payload: place.name})
          history.push("/Finalise")
        }}
        zIndex={-1}
      />
    )
  }

  if(loadError) return "Error loading map"
  if(!isLoaded) return "Loading map"

  return (
    <>
      {/* <Search /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        options={options}
        onLoad={onLoad}
        zIndex={-2}
      >
        {renderUsers()}
        {places && renderPlaces()}
      </GoogleMap>
    </>
  )
}

export default memo(Map)