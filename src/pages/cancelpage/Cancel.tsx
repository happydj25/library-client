import React from 'react';
import {Link} from 'react-router-dom';

const Cancel = () => {

    return (
        <article className="cancel">
                <h3>취소요청</h3>

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

                <div className="cancel_reason">
                    <label htmlFor=""><input type="radio" />단순 변심</label>
                    <label htmlFor=""><input type="radio" />배송 지연</label>
                    <label htmlFor=""><input type="radio" />주문 실수</label>
                    <label htmlFor=""><input type="radio" />서비스 불만족</label>
                    <p>상세 사유 입력</p>
                    <textarea name="" id="" >상세 사유를 입력해주세요</textarea>
                </div>

                <div className="warning">
                    <p>확인해주세요.</p>
                    취소 요청을 하시기 전 반드시 취소 가능 여부를 확인해 주세요.<br />
                    취소 요청은 경우에 따라 요청 횟수가 제한될 수 있습니다.
                </div>
                <div className="btn_wrap">
                    <Link to="/cancelend">다음 단계로 이동</Link>
                </div>
                
            </article>
    );
}

export default Cancel ;