import {
  ITINERARY_NAME_CHANGED,
  CREATE_ITINERARY
} from './types';
import firebase from 'firebase';

export const changeName = (name) => {
  return { type: ITINERARY_NAME_CHANGED, payload: name };
}

export const saveItinerary = ({ name }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/itineraries`)
      .push({ name })
      .then(() => {
        dispatch({ type: CREATE_ITINERARY });
        Actions.itineraryList({ type: 'reset' });
      });
  }
}