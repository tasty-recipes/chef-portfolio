import axios from 'axios';

export const BLOG_START = 'BLOG_START';
export const BLOG_SUCCESS = 'BLOG_SUCCESS';
export const BLOG_FAILURE = 'BLOG_FAILURE';
export const blogLoad = () => dispatch => {
    dispatch({ type: BLOG_START });
    return axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then(res => {
        console.log(res.data.meals);
        dispatch({ type: BLOG_SUCCESS, payload: res.data.meals })
    })
    .catch(err => {
        console.log(err);
    })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = (creds) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://chefio.herokuapp.com/oauth/token', `grant_type=password&username=${creds.username}&password=${creds.password}`, {
        headers: {
            Authorization: `Basic ${btoa('chef-client:chef-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token })
    })
    .catch(err => {
        console.log(err);
    })
}



export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const signUp = (creds) => dispatch => {
    dispatch({ type: SIGN_UP_START });
    return axios.post('https://chefio.herokuapp.com/createnewuser', 'Author')
}

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const signOut = () => dispatch => {
    dispatch({ type: SIGN_OUT_START });
    return axios.get('https://chefio.herokuapp.com/oauth/revoke-token')
    .then(res => {
        console.log(res);
        dispatch({ type: SIGN_OUT_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: SIGN_OUT_FAILURE, payload: err });
    })
}