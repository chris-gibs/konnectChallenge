import React, {memo} from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import {useGlobalState} from "../utils/stateContext"
import mapStyling from './mapStyling'

const Map = () => {
  const {store} = useGlobalState()
  const {currentUserCoords, matchCoords} = store

  const containerStyle = {
  width: '414px',
  height: '896px'
  }

  const center = {
  lat: (currentUserCoords.lat + matchCoords.lat)/2,
  lng: (currentUserCoords.lng + matchCoords.lng)/2
  }

  const options = {
    styles: mapStyling,
    disableDefaultUI: true,
    keyboardShortcuts: false
  }

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
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default memo(Map)