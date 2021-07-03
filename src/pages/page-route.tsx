// 라우터 정의

import React from 'react';
import {Redirect} from 'react-router';
import Home from './librarypage/Home';

import Login from './loginpage/Login';
import Join from './loginpage/Join';
import IdpwFind from './loginpage/IdPwFind';
import IdFindEnd from './loginpage/IdFind-End';
import PwFindEnd from './loginpage/PwFind-End';

import Cart from './cartpage/Cart';
import Pay from './paypage/Pay';
import PayEnd from './paypage/Pay-End';

import OrderInfo from './orderpage/Order-Info';
// import OrderList from './orderpage/Order-List';

import Cancel from './cancelpage/Cancel';
import CancelEnd from './cancelpage/Cancel-End';
import CancelInfo from './cancelpage/Cancel-Info';


import ReviewWrit from './reviewpage/Review-Writ';
import ReviewEnd from './reviewpage/Review-End';

import MyPage from './mypage/MyPage';
import BookView from './bookpage/Book-View';

import BoardList from './boardpage/Board-List';
import BoardView from './boardpage/Board-View';
import BoardWrit from './boardpage/Board-Writ';
import BoardModifiy from './boardpage/Board-Modifiy';



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
        path:'/idpwfind',
        component: () => <IdpwFind />
    },
    {
        path:'/idfindEnd',
        component: () => <IdFindEnd />
    },
    {
        path:'/pwfindEnd',
        component: () => <PwFindEnd />
    },


    {
        path:'/cart',
        component: () => <Cart />
    },


    {
        path:'/pay',
        component: () => <Pay bookPriceSum />
    },
    {
        path:'/payend',
        component: () => <PayEnd />
    },


    {
        path:'/cancel',
        component: () => <Cancel />
    },
    {
        path:'/cancelend',
        component: () => <CancelEnd />
    },
    {
        path:'/cancelinfo',
        component: () => <CancelInfo />
    },


    // {
    //     path:'/orderlist',
    //     component: () => <OrderList />
    // },
    {
        path:'/orderinfo',
        component: () => <OrderInfo />
    },
    


    {
        path:'/reviewwrit',
        component: () => <ReviewWrit />
    },
    {
        path:'/reviewend',
        component: () => <ReviewEnd />
    },

    {
        path:'/mypage',
        component: () => <MyPage />
    },


    {
        path:'/bookview',
        component: () => <BookView />
    },


    {
        path:'/boardlist',
        component: () => <BoardList />
    },
    {
        path:'/boardview',
        component: () => <BoardView />
    },
    {
        path:'/boardwrit',
        component: () => <BoardWrit />
    },
    {
        path:'/boardmodifiy',
        component: () => <BoardModifiy />
    },

    
    
    
];

export default router;
