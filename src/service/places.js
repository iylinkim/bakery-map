import axios from "axios";

class Places {
  constructor(key) {
    this.key = key;
    // this.lat = lat;
    // this.lng = lng;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async getStore(lat, lng) {
    const response = await axios(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&keyword=bakery&key=${this.key}`,
      this.getRequestOptions
    );

    return await response.data;
  }

  async getDetail(placeId) {
    const response = await axios(
      `https://maps.googleapis.com/maps/api/place/details/json?fields=review,business_status,formatted_address,geometry,icon,name,photo,place_id,type,url,rating,formatted_phone_number,opening_hours,website&place_id=${placeId}&key=${this.key}`,
      this.getRequestOptions
    );

    return await response.data.result;
  }

  async getPhotos(photorefenrence) {
    const response = await axios(
      `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photorefenrence}&maxwidth=500&key=${this.key}`,
      this.getRequestOptions
    );
    return response.config.url;
  }
}

export default Places;
