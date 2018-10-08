import React from 'react'
import Link from 'gatsby-link'
import Map from '../components/googleMaps'

const center = { lat: 52.5305383, lng: 13.428189900000007 }

const mapProps = {
    options: {
        center,
        zoom: 14,
        
    },
    onMount: map => {
        const marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(52.5305383,13.428189900000007)
        });
        
        const infowindow = new window.google.maps.InfoWindow({
            content:'<strong>Musikbrauerei</strong><br> Greifswalder Str. 23A, 10405 Berlin<br>'
        })

        infowindow.open(map, marker)
        
        new window.google.maps.Marker({
            position: center,
            map,
            title: 'Europe',
        })
    },
}

const Algorave2 = () =>  (
    <div>
      <h1>Berlin Algorave 26th October 2018</h1>
      <p>At Musikbrauerei</p>
      <p>Door opens 19.00</p>
      <Map id="contactMap" {...mapProps} />
      <Link to="/">Go back to the homepage</Link>
    </div>
)

export default Algorave2
