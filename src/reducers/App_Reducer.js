import ActionTypes from '../constants/ActionTypes';

const initialState = {
    bars: [62, 45, 62],
  buttons: [-18, -13, 10, 38],
  limit: 230,
  error: null
};

export default function appReducer(state = initialState, action) {

    switch (action.type) {
      case ActionTypes.FETCH_APP_DATA_SUCCESS: {
        return {
          ...state,
          bars: action.payload.appdata.bars,
          buttons: action.payload.appdata.buttons.reverse(),
          limit: action.payload.appdata.limit
        };
      }
      case ActionTypes.ADD_UPDATE_APP_DATA: {
        return {
          ...state,
            bars: action.payload
        };
      }
      case ActionTypes.SUBTRACT_UPDATE_APP_DATA: {
        return {
          ...state,
          bars: action.payload
        };
      }
      case ActionTypes.FETCH_APP_DATA_ERROR: {
        return {
          ...state,
          error: action.payload
        };
      }
      default:
        return state;
    }
}