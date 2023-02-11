import axios from "axios";
import { ADD_ITEM, DELETE_ITEM, GET_PLAYLISTS_SUCCESS } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const getPlaylistSuccess = (payload) => {
    return {
       type: GET_PLAYLISTS_SUCCESS,
       payload: payload,
    }
}

const getPlaylists = () => async (dispatch) => {

    try {
        const response = await axios.get('https://mychannel.nunchee.tv/api/generic/playlists/details/62ed078f15f4850026b193bd?itemsPerPage=10');
        const items = response.data
        dispatch(getPlaylistSuccess(items.data.items))
      } catch (error) {
        console.error(error)
      }
    };



export { addItem, deleteItem, getPlaylists, getPlaylistSuccess};