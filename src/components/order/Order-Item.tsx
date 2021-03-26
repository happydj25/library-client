import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const OrderItem = () => {
    return (
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
            <div className="sum">주문금액 : 15,900</div>
            {/* <!-- 12,900 + 3000원 더한 금액 , 5만원 이상 무료배송--> */}
            <Link to="/ReviewWrit">리뷰쓰기</Link>
            {/* <input type="button" value="취소요청" /> */}
        </div>
    );
}

export default OrderItem;
