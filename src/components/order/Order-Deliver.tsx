import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const OrderDeliver = () => {
    return (
        <div className="order_deliver">
            <h3>배송지 <input type="button" value="변경" /></h3>
            <dl>
                <dd>윤동주</dd>
                <dd>010-7332-5710</dd>
                <dd>shemf1004@naver.com</dd>
            </dl>
            <hr />
            <h3>주문번호</h3>
            <dl>
                <dd>윤동주</dd>
                <dd>010-7332-5710</dd>
                <dd>shemf1004@naver.com</dd>
            </dl>
        </div>      
    );
}

export default OrderDeliver;
