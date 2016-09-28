export default function(state = null, action) {
  switch(action.type) {
    case 'IN_BREATH':
      return (
        {inBreath: action.payload}
      )
  }
  return state;
}
