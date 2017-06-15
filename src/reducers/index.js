import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ItineraryReducer from './ItineraryReducer';

export default combineReducers({
  auth: AuthReducer,
  itineraries: ItineraryReducer
});

