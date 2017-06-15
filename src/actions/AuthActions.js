import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGGING_IN, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL 
} from './types';
import firebase from 'firebase';

export const changeEmail = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const changePassword = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGGING_IN })

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => userSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => userSuccess(dispatch, user))
      .catch((err) => userFail(dispatch, err.message))
    })
  };


};

const userSuccess = (dispatch, userInfo) => {
  dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo });
};

const userFail = (dispatch, errorMessage) => {
  dispatch({ type: USER_LOGIN_FAIL, payload: errorMessage});
};

