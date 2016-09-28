export default function(state = null, action) {
  switch(action.type) {
    case 'OUT_BREATH':
      return (
        {outBreath: action.payload}
      )
  }
  return state;
}
