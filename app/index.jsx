import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from './components';
import reducers from './reducers';

const store = createStore(reducers);

render((
  <Provider store={store}>
    <Application />
  </Provider>
), document.getElementById('root'));
