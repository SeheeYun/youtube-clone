import { action, computed, makeObservable, observable, toJS } from 'mobx';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable
  _data = {};

  @computed
  get data() {
    return toJS(this._data);
  }

  @observable
  item = null;

  @action
  fetchData = params => {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    const requestOptions = { method: 'GET', redirect: 'follow' };
    return fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4&' +
        query,
      requestOptions
    )
      .then(response => response.json())
      .then(json => (this._data = json))
      .then(this.offPlayer)
      .catch(error => console.log('error', error));
  };

  @action
  getPopularItems = () => {
    const params = {
      chart: 'mostPopular',
      regionCode: 'KR',
      part: 'snippet,statistics',
      maxResults: 25,
    };

    this.fetchData(params);
  };

  getItemsId = keyword => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=${keyword}&type=video&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4`,
      requestOptions
    )
      .then(response => response.json())
      .then(json => json.items.map(item => item.id.videoId))
      .then(id => id.join())
      .catch(error => console.log('error', error));
  };

  @action
  getSearchItems = keyword => {
    this.getItemsId(keyword).then(id => {
      const params = {
        part: 'snippet,statistics',
        maxResults: 25,
        id: id,
      };

      this.fetchData(params);
    });
  };

  @action
  getVideo = item => {
    console.log(item);
    this.item = item;
    this.onPlayer();
  };

  onPlayer = () => {
    const content = document.querySelector('.content');
    content.classList.add('on_player');
  };

  offPlayer = () => {
    const content = document.querySelector('.content');
    content.classList.contains('on_player') &&
      content.classList.remove('on_player');
  };
}

export default new Store();
