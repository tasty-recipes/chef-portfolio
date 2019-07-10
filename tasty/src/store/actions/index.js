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