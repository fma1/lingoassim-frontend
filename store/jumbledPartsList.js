const GET_JUMBLED_PARTS = 'GET_JUMBLED_PARTS';
const GET_JUMBLED_PART = 'GET_JUMBLED_PART';
const TAKE_JUMBLED_PART = 'TAKE_JUMBLED_PART';

export const getJumbledParts = (jumbledParts) => ({ type: GET_JUMBLED_PARTS, jumbledParts });
export const getJumbledPart = (jumbledPart, index) => ({ type: GET_JUMBLED_PART, payload: { jumbledPart, index } });
export const takeJumbledPart = (jumbledPart, index) => ({ type: TAKE_JUMBLED_PART, payload: { jumbledPart, index } });

export const getJumbledPartThunker = (part) =>
  (dispatch, getState) =>
    dispatch(getJumbledPart(part, getState().questionIndex));

export const takeJumbledPartThunker = (part) =>
  (dispatch, getState) =>
    dispatch(takeJumbledPart(part, getState().questionIndex));

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_JUMBLED_PARTS:
      return action.jumbledParts;
    case GET_JUMBLED_PART:
      return [
        ...state.slice(0, action.payload.index),
        [...state[action.payload.index], action.payload.jumbledPart],
        ...state.slice(action.payload.index + 1)
      ];
    case TAKE_JUMBLED_PART:
      return [
        ...state.slice(0, action.payload.index),
        state[action.payload.index].filter(part => part !== action.payload.jumbledPart),
        ...state.slice(action.payload.index + 1)
      ];
    default:
      return state;
  }
};

export default reducer;
