import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ItineraryListReducer from './ItineraryListReducer';
import ItineraryReducer from './ItineraryReducer';

export default combineReducers({
  auth: AuthReducer,
  itineraries: ItineraryListReducer,
  currentItinerary: ItineraryReducer
});

