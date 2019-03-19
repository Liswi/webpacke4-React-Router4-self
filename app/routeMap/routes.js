import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Setting from '../view/setting';
import Home from '../view/home';
import WrongPath from '../view/wrongPath';

const staticRouteMap = [
    {
        path: '',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/setting',
        component: Setting
    },
    {
        path: '/error',
        component: WrongPath
    }

]

export default <Switch>
    {
        staticRouteMap
            .map(
                route => <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                />)
    }
    <Redirect path="*" to="/error" />
</Switch>