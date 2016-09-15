import { EventEmitter } from "events";

class AppStore extends EventEmitter {

constructor(){
  super()
  this.store = {


      inBreath: 3,
      title: 2,


};
}

getAll() {
  return this.store;
}

}

const appStore = new AppStore;

export default appStore;
