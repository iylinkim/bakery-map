class GoogleMap {
  constructor(key) {
    this.key = key;
  }

  async getMap() {
   
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/js?key=${this.key}&callback=initMap`
    );

   
    const result = await response.json();
    return result;
  }
}

export default GoogleMap;
