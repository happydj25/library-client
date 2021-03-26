import React from 'react';
import {Link} from 'react-router-dom';
import OrderItem from '../../components/order/Order-Item';
import OrderDeliver from '../../components/order/Order-Deliver';

const OrderInfo = () => {
    return (
        <article className="order_info">
            <h3>구매상세</h3>
            <OrderItem />
            <OrderDeliver />

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

            <div className="btn_wrap">
                <Link to="/orderlist">구매내역 리스트</Link>
            </div>
          

        </article>
    );
}

export default OrderInfo ;