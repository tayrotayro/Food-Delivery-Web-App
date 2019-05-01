import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import * as serviceWorker from './serviceWorker';
import AuthenticationWrapper from './Components/Authentication/AuthenticationWrapper';
import UserLayout from './Components/UserView/UserLayout';
import DriverLayout from './Components/DriverView/DriverLayout';
import OwnerLayout from './Components/OwnerView/OwnerLayout';
import ViewPicker from './Components/ViewPicker';

ReactDOM.render(
    <HttpsRedirect>
        <BrowserRouter>
            <Switch>
                {/* USER VIEW ROUTES */}
                <Route exact path="/" component={UserLayout} />
                <Route path="/search" component={UserLayout} />
                <Route path="/orders" component={UserLayout} />
                <Route path="/cart" component={UserLayout} />
                <Route path="/profile" component={UserLayout} />
                <Route path="/restaurant-menu" component={UserLayout} />
                {/* DRIVER VIEW ROUTES */}
                <Route path="/driver-home" component={DriverLayout} />
                <Route path="/driver-active" component={DriverLayout} />
                <Route path="/driver-past" component={DriverLayout} />
                <Route path="/driver-profile" component={DriverLayout} />
                {/* OWNER VIEW ROUTES */}
                <Route path="/owner-home" component={OwnerLayout} />
                <Route path="/owner-menu" component={OwnerLayout} />
                <Route path="/owner-active" component={OwnerLayout} />
                <Route path="/owner-past" component={OwnerLayout} />
                <Route path="/owner-profile" component={OwnerLayout} />
                <Route path="/owner-create-restaurant" component={OwnerLayout} />
                <Route path="/owner-create-menu-item" component={OwnerLayout} />
                {/* AUTHENTICATION ROUTE */}
                <Route path="/authentication" component={AuthenticationWrapper} />
                <Route path="/view-picker" component={ViewPicker} />
            </Switch>
        </BrowserRouter>
    </HttpsRedirect>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
