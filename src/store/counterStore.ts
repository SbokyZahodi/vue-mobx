import { makeAutoObservable } from "mobx";
class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}
export default new CounterStore();
