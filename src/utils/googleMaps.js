import React, {memo} from 'react';
import {
  GoogleMap, useLoadScript, Marker
} from '@react-google-maps/api';
import {useGlobalState} from "../utils/stateContext"
import mapStyling from './mapStyling'

const Map = () => {
  const {store} = useGlobalState()
  const {userDetails, matchDetails} = store
  
  var markers = [
    userDetails,
    matchDetails
  ]

  //MAP SETTINGS
  const libraries = ["places"]
  const mapContainerStyle = {
    width: '414px',
    height: '857px',
    zIndex: -1
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

  if(loadError) return "Error loading map"
  if(!isLoaded) return "Loading map"

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={center}
      options={options}
    >
      {markers.map((marker, index) =>
        <Marker
          key={index}
          position={marker.coords}
          icon={marker.img}
        />
      )}
    </GoogleMap>
  )

  


  // const userMarker = {
  //   url: userImg,
  //   borderRadius: '50%',
    // objectPosition: '50%',
    // objectFit: 'cover',
    // width: '33px',
    // height: '33px',
    // border: '4px solid $white'
  // }
  // const matchMarker = new google.maps.Marker({
  //   position: matchCoords,
  //   map: map
  // })

  // const styling = {
  //   borderRadius: '50%',
  //   objectPosition: '50%',
  //   objectFit: 'cover',
  //   width: '33px',
  //   height: '33px',
  //   border: '4px solid $white'
  // }

  // if you cant create a rounded image with border then use a second marker that is a circle at the same coords
}

export default memo(Map)