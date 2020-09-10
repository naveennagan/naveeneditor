import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import MainComponent from './components/Main';

import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider >
  , document.getElementById('root'));