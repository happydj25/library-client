import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const OrderCheck = () => {
    return (
        <div className="order_check">
            <h3>결제 상세</h3>
            <ul>
                <li><span>주문금액</span>15,900</li>
                <li><span>상품금액</span>12,900</li>
                <li><span>배송비</span>+3,000</li>
                <li><span>카드 결제</span>15,900</li>
            </ul>
        </div>        
    );
}

export default OrderCheck;
