import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import OrderDeliver from '../../components/order/Order-Deliver';

const PayEnd = () => {
    // const [title, setTitle] = useState('');

    // const selected = () => {
    //     setTitle('');
    // }

    // useEffect(() => {

    // }, [title])

    return (
        <article className="pay_end">
            <h2>주문완료 되었습니다.</h2>            

            {/* 배송지 */}
            <OrderDeliver />            

            <div className="order_check">
                <h3>주문금액</h3>
                <ul>
                    <li><span>주문금액</span>15,900</li>
                    <li><span>상품금액</span>12,900</li>
                    <li><span>배송비</span>+3,000</li>
                    <li><span>카드 결제</span>15,900</li>
                </ul>
            </div>

            <div className="order_check">
                <h3>결제상세</h3>
                <ul>
                    <li><span>카드결제</span>15,900</li>
                    <li>국민 1235-4587-4565-5547 | 일시불</li>
                    <li>승인일시 : 2021-03-21 10:59</li>
                </ul>
            </div>

            <div className="order_item">
                <h3>주문상품</h3>
                <ul>
                    <li>
                        <div className="img"></div>
                        <strong><Link to="/bookview">책제목</Link></strong>
                        <span className="author">지은이/출판사</span>
                        <span className="num">1권</span>
                        <span className="price">12,900원</span>                            
                    </li>
                </ul>
            </div>
            
            <div className="btn_wrap">
                <Link to="/orderinfo">구매내역 상세보기</Link>
                <Link to="/">홈으로</Link>
            </div> 
        </article>
    );
}

export default PayEnd;