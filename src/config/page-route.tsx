// 라우터 정의

import React from 'react';
import {Redirect} from 'react-router';
import Home from './../pages/home';
import Login from './../pages/login';
import Join from './../pages/join';
import Cart from './../pages/cart';

const router = [
    {
        path:'/',
        exact : true,
        component: () => <Redirect to="/home" />
    },
    {
        path:'/home',
        component: () => <Home />
    },
    {
        path:'/login',
        component: () => <Login />
    },
    {
        path:'/join',
        component: () => <Join />
    },
    {
        path:'/cart',
        component: () => <Cart />
    }
];

export default router;
