export default function(state = null, action) {
  switch(action.type) {
    case 'CUSTOM_COLORS':
      return (
        {customColors: action.payload}
      )
  }
  return state;
}
