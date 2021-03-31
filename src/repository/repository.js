class Repository {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  fetchData = async (params, pageToken) => {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=20&key=${this.key}&` +
          query +
          (pageToken ? `&pageToken=${pageToken}` : ''),
        this.getRequestOptions
      );
      return await response.json();
    } catch (error) {
      return console.log('error', error);
    }
  };

  getItemsId = async (keyword, pageToken) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${keyword}&type=video&key=${this.key}` +
          (pageToken ? `&pageToken=${pageToken}` : ''),
        this.getRequestOptions
      );
      return await response.json();
    } catch (error) {
      return console.log('error', error);
    }
  };
}

export default Repository;
