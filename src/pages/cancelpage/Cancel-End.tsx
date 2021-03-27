import React from 'react';
import {Link} from 'react-router-dom';

const CancelEnd = () => {
    return (
        <article className="cancel_end">
            <h3>취소요청</h3>
            <span>환불 처리가 완료되었습니다.</span>

            <div className="order_item">
                <h3>주문상품</h3>
                <ul className="order_item_list">
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
                <h3>환불 예정금액</h3>
                <ul>
                    <li><span>최동 환불 예정금액</span>15,900</li>
                    <li><span>카드 결제</span>15,900</li>
                </ul>
            </div>
            <div className="warning">
                <p>확인해주세요.</p>
                취소 처리 현황 및 추가 취소 요청은 결제내역에서 하실 수 있습니다.<br />
                주문번호 내 전체상품이 취소 요청되는 경우, 환불 예정금액은 취소 진행중 상품금액과 합산되어 노출될 수 있습니다.
            </div>
            <div className="btn_wrap">
                <Link to="/mypage">마이페이지로</Link>
            </div>
            
        </article>
    );
}

export default CancelEnd ;