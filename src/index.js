import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/index';

// redux & saga
import { Provider} from 'react-redux';
import createNewStore from './redux/createNewStore';
import reducers from './redux/reducers';
import { BrowserRouter, Route } from 'react-router-dom';

// create store
const store = createNewStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
document.getElementById('root')
);