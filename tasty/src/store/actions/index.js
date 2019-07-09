import axios from 'axios';

export const RANDOM_PIC_START = 'RANDOM_PIC_START';
export const RANDOM_PIC_SUCCESS = 'RANOM_PIC_SUCCESS';
export const RANDOM_PIC_FAILURE = 'RANDOM_PIC_FAILURE';
export const randomPic = () => dispatch => {
    dispatch({ type: RANDOM_PIC_START });
    return axios.get('https://source.unsplash.com/featured/?fresh,food')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}