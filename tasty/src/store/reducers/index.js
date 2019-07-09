const initalState = {
    blogs: [],
    token: '',
    isLoggedIn: false,
    isLoggingIn: false,
    error: null,
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;