import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
  toJS,
} from 'mobx';
import repository from '../repository/repository';

class Store {
  constructor() {
    makeObservable(this);
    this.popular = {
      chart: 'mostPopular',
      regionCode: 'KR',
    };
    this.search = {
      id: null,
    };
    this.nextPageToken = null;
  }

  @observable.ref
  _items = [];

  @computed
  get items() {
    return toJS(this._items);
  }

  @observable.ref
  item = null;

  @action
  addPage = keyword => {
    !keyword
      ? repository.fetchData(this.popular).then(json => {
          runInAction(() => {
            this._items = json.items;
            this.nextPageToken = json.nextPageToken;
          });
        })
      : repository
          .getItemsId(keyword)
          .then(json => {
            runInAction(() => {
              this.nextPageToken = json.nextPageToken;
            });
            return json.items.map(item => item.id.videoId).join();
          })
          .then(id => {
            this.search.id = id;
            repository.fetchData(this.search).then(json => {
              runInAction(() => {
                this._items = json.items;
                this.offPlayer();
              });
            });
          });
  };

  @action
  addNextPage = keyword => {
    !keyword
      ? repository.fetchData(this.popular, this.nextPageToken).then(json => {
          runInAction(() => {
            this._items = this._items.concat(json.items);
            this.nextPageToken = json.nextPageToken;
          });
        })
      : repository
          .getItemsId(keyword, this.nextPageToken)
          .then(json => {
            runInAction(() => {
              this.nextPageToken = json.nextPageToken;
            });
            return json.items.map(item => item.id.videoId).join();
          })
          .then(id => {
            this.search.id = id;
            repository.fetchData(this.search).then(json =>
              runInAction(() => {
                this._items = this._items.concat(json.items);
              })
            );
          });
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
