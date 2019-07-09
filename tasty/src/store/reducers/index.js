import { BLOG_START, BLOG_SUCCESS, BLOG_FAILURE } from '../actions';

const initalState = {
    blogs: [],
    token: '',
    isLoggedIn: false,
    isLoggingIn: false,
    error: null,
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case BLOG_START:
            return {
                ...state,
                blogs: [],
                error: '',
                pic: '',
            }
        case BLOG_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
                error: '',
            }
        case BLOG_FAILURE:
            return {
                ...state,
                error: action.payload,
                pic: '',
            }
        default:
            return state;
    }
}

export default reducer;