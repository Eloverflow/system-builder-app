import {
  FETCH_SOFTWARES_BEGIN,
  FETCH_SOFTWARES_SUCCESS,
  FETCH_SOFTWARES_FAILURE
} from '../actions/softwareActions';

const initialState = {
  softwares: [],
  loading: false,
  error: null
};

export default function softwareReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SOFTWARES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SOFTWARES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        softwares: action.payload.softwares
      };

    case FETCH_SOFTWARES_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        softwares: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}