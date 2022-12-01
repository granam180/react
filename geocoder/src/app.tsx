import * as React from 'react';
import {render} from 'react-dom';
import Map from 'react-map-gl';

import GeocoderControl from './geocoder-control';
import ControlPanel from './control-panel';

// eslint-disable-next-line
 const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9leWJib3giLCJhIjoiY2wwOGd0OGxwMDNheDNjcW02MGJ4czEwNSJ9.jtxX-Vu-w3w4dQ4ax5pAdA'; // Set your mapbox token here

export default function App() {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -119.25,
          latitude: 34.448,
          zoom: 13
        }}
        //mapStyle="mapbox://styles/mapbox/streets-v9"
        mapStyle="mapbox://styles/joeybbox/claufvkw6000u14rw1nzkqjoy"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" />
      </Map>
      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
