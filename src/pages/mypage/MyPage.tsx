import React from 'react';
import {Link} from 'react-router-dom';
import OrderList from '../orderpage/Order-List';

const MyPage = () => {
    return (
        <article className="my_page">
            <h3>마이페이지</h3>
            <div>
                내정보 수정하기
            </div>
            <OrderList />
            
        </article>
    );
}

export default MyPage ;