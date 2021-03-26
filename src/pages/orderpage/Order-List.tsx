import React from 'react';
import {Link} from 'react-router-dom';

const OrderInfo = () => {
    return (
        <article className="order_list">
            <h3>구매 내역 리스트</h3>
            <ul>
                <li>                        
                    <p>취소완료 <span>3.21(일) 취소(카드 취소 최대 2영업일 소요)</span></p>
                    <ul className="order_item_list">
                        <li>
                            <div className="img"></div>
                            <strong><Link to="/bookview">책제목</Link></strong>
                            <span className="author">지은이/출판사</span>
                            <span className="num">1권</span>
                            <span className="price">12,900원</span>                            
                        </li>
                    </ul>
                    <div className="btn_wrap">
                        <Link to="/cancelinfo">취소정보</Link>
                        <button>장바구니에 담기</button>
                    </div>
                </li>
                <li>                        
                    <p>구매완료</p>
                    <ul className="order_item_list">
                        <li>
                            <div className="img"></div>
                            <strong><Link to="/bookview">책제목</Link></strong>
                            <span className="author">지은이/출판사</span>
                            <span className="num">1권</span>
                            <span className="price">12,900원</span>                            
                        </li>
                    </ul>
                    <div className="btn_wrap">
                        <Link to="/reviewwrit">리뷰쓰기</Link>
                        <button>장바구니에 담기</button>
                    </div>
                </li>
            </ul>
        </article>
    );
}

export default OrderInfo ;