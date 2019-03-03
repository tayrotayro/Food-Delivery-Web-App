import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthenticationWrapper from './components/Authentication/AuthenticationWrapper';
import UserLayout from './components/UserView/Layout';

ReactDOM.render(
    <HttpsRedirect>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserLayout} />
                <Route path="/search" component={UserLayout} />
                <Route path="/orders" component={UserLayout} />
                <Route path="/cart" component={UserLayout} />
                <Route path="/profile" component={UserLayout} />
                <Route path="/authentication" component={AuthenticationWrapper} />
            </Switch>
        </BrowserRouter>
    </ HttpsRedirect>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
