import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthorizationWrapper from './Components/Authorization/AuthorizationWrapper';
import Dashboard from './Components/Dashboard/DashboardWrapper';
import RestaurantView from './Components/RestaurantView/RestaurantView';

ReactDOM.render(
    <HttpsRedirect>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/authorization" component={AuthorizationWrapper}/>
                <Route path="/restaurant-view" component={RestaurantView} />
            </Switch>
        </BrowserRouter>
    </ HttpsRedirect>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
