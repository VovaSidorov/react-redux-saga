import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore,applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {spamWordsMiddleware} from "./redux/middleware";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk,spamWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
