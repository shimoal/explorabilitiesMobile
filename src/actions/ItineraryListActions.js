import {
  FETCHING_ITINERARIES,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAIL
} from './types';

import firebase from 'firebase';

export const fetchItineraries = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/itineraries`)
      .on('value', snapshot => {
        console.log('inisde on vlaue, snapshot.val:', snapshot.val());
        dispatch({ type: FETCH_ITINERARIES_SUCCESS, payload: snapshot.val() })
      });
  }
}


