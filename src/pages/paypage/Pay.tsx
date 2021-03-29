import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import OrderCheck from '../../components/order/Order-Check';
import OrderItem from '../../components/order/Order-Item';

const Pay = () => {
    const [title, setTitle] = useState('');

    const selected = () => {
        setTitle('');
    }

    useEffect(() => {

    }, [title])

    return (
        <article className="pay">
            <h2>결제하기</h2>
            <div>
                <h3>배송지</h3>
                {/* <h3 title={title}>{title}}</h3> */}
                <dl>
                    <dt>윤동주(자주쓰는 주소 별명1)</dt>
                    <dd className="phone_num">010-7332-5710</dd>
                    <dd>서울특별시 서대문구 홍은동 288-1 (12345)</dd>
                    <dd>
                        <select name="" id="">
                            <option value="">배송메모를 선택해 주세요</option>
                            <option value="">요청사항을 직접 입력합니다.</option>
                            <option value="">배송 전에 미리 연락 바랍니다</option>
                            <option value="">부재시 경비실에 맡겨주세요</option>
                            <option value="">부재시 전화나 문자 남겨주세요</option>
                        </select>
                        <textarea name="" id="" className="hidden"> 요청사항을 입력해 주세요</textarea>
                    </dd>
                </dl>
            </div>
            <div>
                <h3>주문자</h3>
                <dl>
                    <dd>윤동주</dd>
                    <dd>010-7332-5710</dd>
                    <dd>shemf1004@naver.com</dd>
                </dl>
            </div>

            <OrderItem />
            
            <div>
                <h3>결제수단</h3>
                <ul>
                    <li>
                        <p>무통장 입금</p>
                        <div className="hidden">
                            <label htmlFor=""><input type="radio" name="" id="" />우리은행</label>
                            <label htmlFor=""><input type="radio" name="" id="" />국민은행</label>
                            <label htmlFor=""><input type="radio" name="" id="" />신한은행</label>
                            <div>입금계좌 : 01-44335-4548663 우리은행</div>
                        </div>
                    </li>
                    <li>
                        <p>카드 결제</p>
                        <div className="hidden">
                            <label htmlFor=""><input type="radio" name="" id="" />우리카드</label>
                            <label htmlFor=""><input type="radio" name="" id="" />국민카드</label>
                            <label htmlFor=""><input type="radio" name="" id="" />신한카드</label>
                            <div className="card">
                                <p>카드 정보를 입력해 주세요</p>
                                <div className="info">
                                    <span>카드정보</span>
                                    <input type="text" name="" id="" />-
                                    <input type="text" name="" id="" />-
                                    <input type="text" name="" id="" />-
                                    <input type="text" name="" id="" />
                                    <hr />
                                    <span>유효기간 (MMYY)</span>
                                    <input type="text" name="" id="" />
                                    <hr />
                                    <span>CVC (카드 뒷면 3자리 숫자)</span>
                                    <input type="text" name="" id="" />
                                    <hr />
                                    <span>카드 비밀번호 (비밀번호 앞 2자리 숫자)</span>
                                    <input type="text" name="" id="" />
                                    <hr />
                                    <label htmlFor=""><input type="radio" />전체 약관 동의</label>
                                    <label htmlFor=""><input type="radio" />개인정보 수집 및 이용 동의</label>
                                    <label htmlFor=""><input type="radio" />카드사 간 개인 정보 제공 동의</label>
                                    <input type="button" value="완료" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <OrderCheck />
            
            <div className="btn_wrap">
                <Link to="/PayEnd">결제하기</Link>
            </div>
            
        </article>
    );
}

export default Pay;