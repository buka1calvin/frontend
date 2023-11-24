import { combineReducers } from 'redux';
import auth from './authReducer';
import ui from './uiReducer';
import users from './userReducer';
import newsReducer from './newsReducer';
import commentReducer from './commentReducer';
import eventReducer from './eventReducer';
import contact from './contactReducer';
import publicationReducer from './publicationReducer';
import maillistReducer from './maillistReducer';
import toursReducer from './toursReducer';

export default combineReducers({
	auth,
	ui,
	users,
	newsReducer,
	commentReducer,
	eventReducer,
	contact,
	publicationReducer,
	maillistReducer,
	toursReducer,
});
