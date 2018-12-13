import React from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  mapClicked = (props, marker, e) =>
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      },
      console.log(marker)
    );

  render() {
    const address = "6 Vinal Square, North Chelmsford, MA 01863";
    return (
      <div className="zoomzoom">
        <Map
          google={this.props.google}
          style={{ width: "37.2%", height: "500px", position: "relative" }}
          className={"zoomzoom"}
          initialCenter={{
            lat: 42.637832,
            lng: -71.384754
          }}
          zoom={14}
        >
          <Marker
            title={"Tequila's Grill & Cantina"}
            name={"Tequila's"}
            position={{ lat: 42.637832, lng: -71.384754 }}
            onClick={this.mapClicked}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.title}</h1>
              <small>{address}</small>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDv9AC_rPllgIRWQiuXSK7RsyorJDKFJ60"
})(MapContainer);

// 42.7106304,-71.4719232
