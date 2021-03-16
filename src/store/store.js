import { action, computed, makeObservable, observable, toJS } from 'mobx';

class Store {
  constructor() {
    makeObservable(this);
    this.popular = {
      part: 'snippet,statistics',
      maxResults: 20,
      chart: 'mostPopular',
      regionCode: 'KR',
    };
    this.search = {
      part: 'snippet,statistics',
      maxResults: 20,
      id: null,
    };
  }

  @observable.ref
  _items = [];

  @computed
  get items() {
    return toJS(this._items);
  }

  @observable
  nextPageToken = null;

  @observable
  item = null;

  @action
  fetchData = (params, pageToken) => {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4&' +
        query +
        (pageToken ? `&pageToken=${pageToken}` : ''),
      requestOptions
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));
  };

  @action
  addPage = keyword => {
    !keyword
      ? this.fetchData(this.popular) //
          .then(json => {
            this._items = json.items;
            this.nextPageToken = json.nextPageToken;
          })
      : this.getItemsId(keyword) //
          .then(id => {
            this.search.id = id;
            this.fetchData(this.search)
              .then(json => (this._items = json.items))
              .then(this.offPlayer());
          });
  };

  @action
  addNextPage = keyword => {
    !keyword
      ? this.fetchData(this.popular, this.nextPageToken) //
          .then(json => {
            this._items = this._items.concat(json.items);
            this.nextPageToken = json.nextPageToken;
          })
      : this.getItemsId(keyword, this.nextPageToken) //
          .then(id => {
            this.search.id = id;
            this.fetchData(this.search) //
              .then(json => (this._items = this._items.concat(json.items)));
          });
  };

  @action
  getItemsId = (keyword, pageToken) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${keyword}&type=video&key=AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4` +
        (pageToken ? `&pageToken=${pageToken}` : ''),
      requestOptions
    )
      .then(response => response.json())
      .then(json => {
        this.nextPageToken = json.nextPageToken;
        return json.items.map(item => item.id.videoId);
      })
      .then(id => id.join())
      .catch(error => console.log('error', error));
  };

  @action
  getVideo = item => {
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
