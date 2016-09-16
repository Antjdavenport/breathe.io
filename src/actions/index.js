

export function inBreathAction(props){

  return {
    type: 'IN_BREATH',
    payload: props,

  };


}

export function outBreathAction(props){

  return {
    type: 'OUT_BREATH',
    payload: props,

  };


}
