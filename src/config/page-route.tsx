// 라우터 정의

import React from 'react';
import {Redirect} from 'react-router';
import Home from './../pages/home';

const router = [
    {
        path:'/',
        exact : true,
        component: () => <Redirect to="/home" />
    },
    {
        path:'/home',
        component: () => <Home />
    }
];

export default router;
