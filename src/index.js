import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/index';

// redux & saga
import { Provider} from 'react-redux';
import createNewStore from './redux/createNewStore';

// create store
const store = createNewStore()

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
document.getElementById('root')
);