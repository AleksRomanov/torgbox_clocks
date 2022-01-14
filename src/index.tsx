import React from 'react';
import ReactDOM from 'react-dom';
import 'react-clock/dist/Clock.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App name={''} timezone={''}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
