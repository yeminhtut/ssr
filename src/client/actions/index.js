import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const COOKIE_DOMAIN = { domain: '', path: '/' };

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  console.log('api', api);
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

//portfolio
export const FETCH_CONTENT = 'fetch_content';
export const fetchContent = (data) => async (dispatch, getState) => {
  console.log('there', data);
  const res = await axios.get(`http://dev-west-api.content.co/api/v1//portfolios/ymh`);
  dispatch({
    type: FETCH_CONTENT,
    payload: res.data
  });

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  const data = {username: username, password, password}
  console.log('then',data);

};

export const LOGIN_USER = 'login_user';
export const loginUser = (data) => async (dispatch, getState) => {
  axios.post('http://dev-west-api.content.co/api/v1/accounts/login/', data)
  .then(function (resp) {
    cookies.set('token', resp.data.key, COOKIE_DOMAIN);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
