/* global google */
import React from "react";

class Libraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleMapsReady: false,
    };
  }

  componentDidMount() {
    this.loadGoogleMaps(() => {
      // Work to do after the library loads.
      this.setState({ googleMapsReady: true });
    });
  }

  componentWillUnmount() {
    // unload script when needed to avoid multiple google scripts loaded warning
    this.unloadGoogleMaps();
  }

  loadGoogleMaps = (callback) => {
    const existingScript = document.getElementById("googlePlacesScript");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places&callback=initMap`;
      script.id = "googleMaps";
      document.body.appendChild(script);
      //action to do after a script is loaded in our case setState
      script.onload = () => {
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };

  unloadGoogleMaps = () => {
    let googlePlacesScript = document.getElementById("googleScriptMaps");
    if (googlePlacesScript) {
      googlePlacesScript.remove();
    }
  };

  // initMap = () => {
  //   const sydney = new google.maps.LatLng(-33.867, 151.195);
  //   // infowindow = new google.maps.InfoWindow();
  //   // map = new google.maps.Map(document.getElementById("test"), {
  //   //   center: sydney,
  //   //   zoom: 15,
  //   // });
  //   console.log(window.google.maps.InfoWindow());
  // };
  render() {
    if (!this.state.googleMapsReady) {
      return <p>Loading</p>;
    }

    return <div id='test'>libraries</div>;
    // do something you needed when script is loaded
  }
}

export default Libraries;
