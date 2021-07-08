import React, {memo} from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {useGlobalState} from "../utils/stateContext"
import mapStyling from './mapStyling'

const Map = () => {
  const {store} = useGlobalState()
  const {userCoords, userImg, matchCoords, matchImg} = store
  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  // })

  // const mapRef = useMapRef

  const mapContainer = {
    width: '414px',
    height: '857px',
    zIndex: -1
  }

  const options = {
    styles: mapStyling,
    center: {
      lat: (userCoords.lat + matchCoords.lat)/2,
      lng: (userCoords.lng + matchCoords.lng)/2
    },
    disableDefaultUI: true,
    keyboardShortcuts: false
  }


  const userMarker = {
    url: userImg,
    borderRadius: '50%',
    // objectPosition: '50%',
    // objectFit: 'cover',
    // width: '33px',
    // height: '33px',
    // border: '4px solid $white'
  }
  // const matchMarker = new google.maps.Marker({
  //   position: matchCoords,
  //   map: map
  // })

  const styling = {
    borderRadius: '50%',
    objectPosition: '50%',
    objectFit: 'cover',
    width: '33px',
    height: '33px',
    border: '4px solid $white'
  }

  // if you cant create a rounded image with border then use a second marker that is a circle at the same coords

  // const circle 

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapContainer}
        zoom={16}
        options={options}
      >
        <Marker
          icon={userMarker}
          position={userCoords}
          options={styling}
          
        />
        <Marker
          icon={matchImg}
          position={matchCoords}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default memo(Map)