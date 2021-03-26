import React from 'react';
import {Link} from 'react-router-dom';

const CancelInfo = () => {
    return (
        <article className="cancel_info">
                <h3>취소 상세</h3>
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
                <div className="order_check">
                    <h3>주문금액</h3>
                    <ul>
                        <li><span>주문금액</span>15,900</li>
                        <li><span>상품금액</span>12,900</li>
                        <li><span>배송비</span>+3,000</li>
                        <li><span>카드 결제</span>15,900</li>
                    </ul>
                </div>

                <div>
                    <dl>
                        <dt>취소사유</dt>
                        <dd>주문 실수</dd>
                        <dt>상세사유</dt>
                        <dd>다른 상품을 잘못 주문해서 취소합니다.</dd>
                    </dl>
                </div>

                <div className="warning">
                    취소 완료 후에는 취소 철회가 불가합니다. 다시구매를 원한다면, '재구매'를 클릭해주세요.
                </div>
                <div className="btn_wrap">
                    <Link to="/orderlist">구매목록 리스트</Link>
                </div>
                
            </article>
    );
}

export default CancelInfo ;