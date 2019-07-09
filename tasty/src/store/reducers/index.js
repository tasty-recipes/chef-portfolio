import { RANDOM_PIC_START, RANDOM_PIC_SUCCESS, RANDOM_PIC_FAILURE } from '../actions';

const initalState = {
    blogs: [],
    token: '',
    pic: '',
    isPicLoading: false,
    isLoggedIn: false,
    isLoggingIn: false,
    error: null,
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case RANDOM_PIC_START:
            return {
                ...state,
                isPicLoading: true,
                error: '',
                pic: '',
            }
        case RANDOM_PIC_SUCCESS:
            return {
                ...state,
                isPicLoading: false,
                error: '',
                pic: action.payload,
            }
        case RANDOM_PIC_FAILURE:
            return {
                ...state,
                isPicLoading: false,
                error: action.payload,
                pic: '',
            }
        default:
            return state;
    }
}

export default reducer;