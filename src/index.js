import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <Route path='/' component={ App } />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
