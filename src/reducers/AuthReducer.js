import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGGING_IN
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  errorMessage: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGGING_IN:
      return { ...state, loading: true }
    case USER_LOGIN_SUCCESS:
      Actions.main();
      return { INITIAL_STATE, user: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, errorMessage: action.payload, loading: false};
    default:
      return state; 
  }
};