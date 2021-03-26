import React from 'react';
import {Link} from 'react-router-dom';

const OrderInfo = () => {
    return (
        <article className="order_info">
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
                <input type="button" value="취소요청" />
            </div>

            <div className="deliver">
                <h3>배송지 정보 <input type="button" value="변경" /></h3>
                <dl>
                    <dd>윤동주</dd>
                    <dd>010-7332-5710</dd>
                    <dd>shemf1004@naver.com</dd>
                </dl>
            </div>

            <div className="order_check">
                <h3>결제상세</h3>
                <ul>
                    <li><span>카드결제</span>15,900</li>
                    <li>국민 1235-4587-4565-5547 | 일시불</li>
                    <li>승인일시 : 2021-03-21 10:59</li>
                </ul>
            </div>

            <div className="order_check">
                <h3>주문금액</h3>
                <ul>
                    <li><span>주문금액</span>15,900</li>
                    <li><span>상품금액</span>12,900</li>
                    <li><span>배송비</span>+3,000</li>
                    <li><span>카드 결제</span>15,900</li>
                </ul>
            </div>
        </article>
    );
}

export default OrderInfo ;