class Places {
  constructor(key, lat, lng) {
    this.key = key;
    this.lat = lat;
    this.lng = lng;
  }

  async random() {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&radius=5000&keyword=bakery&key=${this.key}`
    );

    return await response.json();
  }
}

export default Places;
