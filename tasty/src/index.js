import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './store/reducers';
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, Logger))
);

const AppwithRouter = withRouter(App);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppwithRouter />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
