import { BLOG_START, BLOG_SUCCESS, BLOG_FAILURE } from '../actions';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
import { SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from '../actions';
import { NEW_USER_START, NEW_USER_SUCCESS, NEW_USER_FAILURE } from '../actions';

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
            }
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                token: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload,
            }
        case SIGN_OUT_START:
            return {
                ...state,
                isLoggedIn: true,
                error: '',
            }
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
            }
        case SIGN_OUT_FAILURE:
            return {
                ...state,
                isLoggedIn: true,
                error: action.payload,
            }
        case NEW_USER_START:
            return {
                ...state,
                isLoggedIn: false,
                error: '',
                isLoggingIn: true,
            }
        case NEW_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: '',
                isLoggingIn: false,

            }
        case NEW_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;