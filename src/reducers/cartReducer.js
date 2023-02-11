import { ADD_ITEM, DELETE_ITEM, GET_PLAYLISTS_SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
  playlists: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    case GET_PLAYLISTS_SUCCESS:
        return {
        ...state,
        playlists: action.payload
        }
    default:
      return state;
  }
};

export default cartReducer;