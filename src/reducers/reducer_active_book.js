// State argument is not the application state, only the state
// this reducer is responsible for.

export default function(state = null, action) {
  // state = null is ES6 syntax. It defaults to null if the argument that
  // comes in is undefined
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

}

  return state

}
