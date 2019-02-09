import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthorizationWrapper from './Components/Authorization/AuthorizationWrapper';

ReactDOM.render(
    <HttpsRedirect>
        <BrowserRouter>
            <Switch>
                <Route path="/authorization" component={AuthorizationWrapper}/>
            </Switch>
        </BrowserRouter>
    </ HttpsRedirect>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
