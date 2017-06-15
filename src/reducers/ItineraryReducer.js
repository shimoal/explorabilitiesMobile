import {
  ITINERARY_NAME_CHANGED,
  CREATE_ITINERARY
} from '../actions/types';

import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
  name: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITINERARY_NAME_CHANGED:
      return { ...state, name: action.payload };
    case CREATE_ITINERARY:
      return INITIAL_STATE;
    default:
      return state;
  }
}