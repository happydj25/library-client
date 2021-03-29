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
            <div><label htmlFor=""><input type="radio" />전체 동의하기</label></div>
            <div><label htmlFor=""><input type="radio" />위 구매조건 확인 및 결제진행 동의</label></div>
        </div>        
    );
}

export default OrderCheck;
