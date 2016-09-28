export default function(state = null, action) {
  switch(action.type) {
    case 'IS_CHECKED':
      return (
        action.payload
      )
  }
  return state;
}
