import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import contentReducer from './contentReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  content: contentReducer,
});
