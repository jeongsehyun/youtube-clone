import axios from "axios";

class Youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "KR",
        maxResults: 30,
      },
    });

    return response.data.items;
  }
}

export default Youtube;
