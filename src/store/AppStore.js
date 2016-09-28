import { EventEmitter } from "events";

class AppStore extends EventEmitter {

constructor(){
  super()
  this.store = {
      title: 1,
};
}

// createApp(text) {
//   const id = Date.now();
//
//   this.store.push({
//   title
//   });
//
//   this.emit("change");
// }
//
getAll() {
  return this.store;
}
//
}

const appStore = new AppStore;
window.appStore = appStore;
export default appStore;
