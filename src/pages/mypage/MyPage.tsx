import React from 'react';
import {Link} from 'react-router-dom';
import MyInfoUpDate from '../../components/my/MyInfo-UpDate';
import OrderList from '../orderpage/Order-List';

const MyPage = () => {
    return (
        <article className="my_page">
            <h3>마이페이지</h3>
            <MyInfoUpDate />
            <OrderList />
            
        </article>
    );
}

export default MyPage ;