import {
  FETCHING_ITINERARIES,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAIL,
  SAVE_ITINERARY
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ITINERARIES_SUCCESS:
      return action.payload;
    case SAVE_ITINERARY:
      return state;
    default: 
      return state;
  }
}