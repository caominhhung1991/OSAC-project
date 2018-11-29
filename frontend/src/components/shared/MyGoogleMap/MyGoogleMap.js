import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

const lat = 10.818100;
const lng = 106.804590;

const MyGoogleMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEXtZ0qkEhNULdRqyGaWHNDAhZ39VnfoY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: lat, lng: lng },
  }), withScriptjs, withGoogleMap)((props) =>
    (<GoogleMap
      defaultZoom={15}
      defaultCenter={props.center}
    >
      <MarkerWithLabel
        position={props.center}
        labelAnchor={new window.google.maps.Point(130, 70)}
        labelStyle={{ backgroundColor: "white", fontSize: "11px", padding: "5px" }}
        onClick={props.onMarkerClick}
      >
        { 
          props.isMarkerClicked ?
          <div>124 Võ Văn Hát, P. Long Trường, Q. 9, Tp.Hồ Chí Minh</div> :
          <div></div>
        }
      </MarkerWithLabel>
      {/* {props.isMarkerShown && <Marker position={props.center} />} */}
    </GoogleMap>)
  )

export default MyGoogleMap