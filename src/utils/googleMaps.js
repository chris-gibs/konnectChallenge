import React, {memo} from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import {useGlobalState} from "../utils/stateContext"
import mapStyling from './mapStyling'

const Map = () => {
  const {store} = useGlobalState()
  const {userCoords, matchCoords} = store

  const containerStyle = {
    width: '414px',
    height: '896px'
  }

  const center = {
    lat: (userCoords.lat + matchCoords.lat)/2,
    lng: (userCoords.lng + matchCoords.lng)/2
  }

  const options = {
    styles: mapStyling,
    disableDefaultUI: true,
    keyboardShortcuts: false
  }

  // const marker = new google.maps.Marker({
  //   position: userCoords,
  //   map: map
  // })

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAjk327xifaWF4HbhtzQZqXcrtaKnr3QF4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14.5}
        options={options}
      >
        {/* <Marker
            position={userCoords}
            icon={{
                url: '../assets/images/currentUser.png',
                // scaledSize: new window.google.maps.Size(50,50),
                // origin: new window.google.maps.Point(0,0),
                // anchor: new window.google.maps.Point(25,25)
            }}
        /> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default memo(Map)