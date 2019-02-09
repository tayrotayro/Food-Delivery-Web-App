import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthorizationWrapper from './Components/AuthorizationWrapper';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/authorization" component={AuthorizationWrapper}/>
            </Switch>
        </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
