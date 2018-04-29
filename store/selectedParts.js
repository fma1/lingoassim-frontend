
const GET_SELECTED_PARTS = 'GET_SELECTED_PARTS';
const GET_SELECTED_PART = 'GET_SELECTED_PART';
const TAKE_SELECTED_PART = 'TAKE_SELECTED_PART';

export const getSelectedParts = (jumbledParts) => ({ type: GET_SELECTED_PARTS, jumbledParts });
export const getSelectedPart = (jumbledPart) => ({ type: GET_SELECTED_PART, jumbledPart });
export const takeSelectedPart = (jumbledPart) => ({ type: TAKE_SELECTED_PART, jumbledPart });

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SELECTED_PARTS:
      return action.jumbledParts;
    case GET_SELECTED_PART:
      return [...state, action.jumbledPart];
    case TAKE_SELECTED_PART:
      return state.filter(part => part !== action.jumbledPart);
    default:
      return state;
  }
};

export default reducer;
