import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Routes from './Routes';
import store from './redux/store/index';
import { SET_AUTHENTICATED } from '../src/redux/types';
import { logoutUser } from '../src/redux/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const token = localStorage.IdToken;
if (token) {
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = '/auth/login';
	} else {
		store.dispatch({ type: SET_AUTHENTICATED });
		axios.defaults.headers.common['token'] = token;
	}
}

const App = () => {
	useEffect(() => {
		if (!token) {
			window.$crisp = [];
			window.CRISP_WEBSITE_ID = process.env.REACT_APP_CHAT_ID;

			(function () {
				let d = document;
				let s = d.createElement('script');

				s.src = process.env.REACT_APP_CHAT_URL;
				s.async = 1;
				d.getElementsByTagName('head')[0].appendChild(s);
			})();
		}
	});
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default App;
