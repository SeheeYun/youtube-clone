import { makeObservable, observable } from 'mobx';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable data = {
    name: 'sehee',
  };
}

export default new Store();
