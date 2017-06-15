import {
  FETCHING_ITINERARIES,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAIL
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ITINERARIES_SUCCESS:
      return action.payload;
    default: 
      return state;
  }
}