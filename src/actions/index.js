

export function inBreathAction(props){

  if (!props){
    return {
      type: 'IN_BREATH',
      payload: 3,

    };
  }
  return {
    type: 'IN_BREATH',
    payload: props,

  };


}

export function outBreathAction(props){

if (!props){
  return {
    type: 'OUT_BREATH',
    payload: 3,

  };
}
  return {
    type: 'OUT_BREATH',
    payload: props,

  };


}

export function isChecked(props){

  return {
    type: 'IS_CHECKED',
    payload: props,

  };


}

export function colorInputs(props){

  return {
    type: 'CUSTOM_COLORS',
    payload: props,
  };
}
