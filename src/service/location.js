class Location {
  // constructor() {
  //   this.locationInfo = {};
  // }
  getNowLocation() {
    navigator.geolocation.getCurrentPosition(location => {
      // const lat = location.coords.latitude;
      // const lng = location.coords.longitude;
      
      // return (this.locationInfo = {
      //   lat: lat || 0,
      //   lng: lng || 0,
      return location;
      // });
    });
    
  }
}

export default Location;
