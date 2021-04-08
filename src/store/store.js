import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
  toJS,
} from 'mobx';
import Repository from '../repository/repository';

const repository = new Repository(process.env.REACT_APP_API_KEY);
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
    this._items = [];
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
                this.onItemClick(null);
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
  onItemClick = item => {
    this.item = item;
  };

  @observable
  isload = false;

  @action
  loaded = loaded => {
    if (loaded) {
      this.isload = true;
    } else {
      this.isload = false;
    }
  };
}

export default new Store();
