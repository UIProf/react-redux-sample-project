import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';
import { API_PATH } from '../constants/Path';

export function fetchAppData(){
    return function (dispatch) {
        axios.get(API_PATH)
        .then(response => {
            console.log(response.data);
            dispatch(fetchAppSuccess(response.data));
          })
          .catch(err => {
              dispatch(fetchAppError(err));
          });
    }
    
}



export const fetchAppSuccess = appdata => ({
    type: ActionTypes.FETCH_APP_DATA_SUCCESS,
    payload: { appdata }
});

export const fetchAppError = error => ({
    type: ActionTypes.FETCH_APP_DATA_ERROR,
    payload: { error }
});


export function updateAddedBarArray(newArray) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.ADD_UPDATE_APP_DATA, payload: newArray });
    }
}

export function updateSubtractBarArray(newArray) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.SUBTRACT_UPDATE_APP_DATA, payload: newArray });
    }
}