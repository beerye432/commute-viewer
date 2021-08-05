import React from "react";
import GoogleMapReact from 'google-map-react';
import MapMarker from "./MapMarker";

const Map = () => {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/locations")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const defaultProps = {
    center: {
      lat: 34.00454419125286,
      lng: -118.2783285902106
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCScdHksyJg9OaRhgHvAg3lz1jM7YzeE1U" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {data.map(point => 
          <MapMarker 
            key={point.name} 
            lat={parseFloat(point.coordinates.split(',')[0])} 
            lng={parseFloat(point.coordinates.split(',')[1])} 
            text={point.name} 
          />
        )}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
