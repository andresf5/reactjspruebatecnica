import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

 
const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
