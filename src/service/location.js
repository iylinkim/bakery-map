class Location {
  constructor() {
    this.locationInfo = {};
  }
  getNowLocation() {
    // console.log('before');
    navigator.geolocation.getCurrentPosition(location => {
      const lat = location.coords.latitude;
      const lng = location.coords.longitude;
      // console.log(lat, lng);
      return (this.locationInfo = {
        lat: lat || 0,
        lng: lng || 0,
      });
    });
    // navigator.geolocation.getCurrentPosition(location => location);
  }
}

export default Location;
