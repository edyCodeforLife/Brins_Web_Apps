import React  from 'react';
import ReactDOM  from 'react-dom';
import render from 'react-dom';
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import './src/style/style.css';
import './node_modules/jquery/dist/jquery';
import './node_modules/bootstrap/dist/js/bootstrap';
import './node_modules/popper.js';
import './node_modules/bootstrap/js/dist/util';
import App from './src/components/app';
import { Route,BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import reduxPromise from 'redux-promise';
import axiosMiddleWare from './src/middleware/auth';
const store = createStore(
    reducers,
    applyMiddleware(reduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)