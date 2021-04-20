import React, { Component, useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import OrderCheck from '../../components/order/Order-Check';
import OrderItem from '../../components/order/Order-Item';
import PayType from './Pay-Type';

const Pay = () => {

   
    // console.log(location);
    let payNowBookData = useLocation<any>();
    // let asd:any = payNowBookData.state;
    let asd:any = payNowBookData;

    console.log('강아지');
    // console.log(asd.location.state.book);



    // console.log(payNowBookData.state.book.accessInfo);
//     let location:any = useLocation();
//     useEffect(() => {
//         console.log(location.state.book);
//         console.log('sdfsdf');

//        // debugger
//    }, [])

//    console.log(location.state.book);



    // const [title, setTitle] = useState('');

    // const selected = () => {
    //     setTitle('');
    // }

    // useEffect(() => {

    // }, [title])


    // 로그인 안했으면 하라고 로그인페이지로 보내야함
    // 유저정보 불러와야함
    // 비회원 구매할거면 이름 주소 전화번호 받는거 


    // const bookID:any = location.state.book.id;
    // // 책 이미지
    // const bookImageLinks:any = location.state.book.volumeInfo.imageLinks;
    // // 책이름
    // const bookTitle:String = location.state.book.volumeInfo.title;
    // // 책소개
    // const bookDescription:String = location.state.book.volumeInfo.description;
    // // 출판일
    // const bookPublishedDate:String = location.state.book.volumeInfo.publishedDate;
    // // 지은이
    // const bookAuthors:String = location.state.book.volumeInfo.authors;
    // // 출판사
    // const bookPublisher:String = location.state.book.volumeInfo.publisher;
    // // 할인전가격
    // const bookListPrice:any = location.state.book.saleInfo.listPrice.amount;
    // // 할인가격
    // const bookRetailPrice:any = location.state.book.saleInfo.retailPrice.amount;
    
   

    return (
        <article className="pay">
            <form action="">
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
                            <textarea name="" id="" className="hidden" value="요청사항을 입력해 주세요"></textarea>
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
                {/* <OrderItem asd={asd.location.state.book} /> */}
                <OrderItem asd={asd} />
                
                <div>
                    <h3>결제수단</h3>
                    <PayType />
                </div>

                <OrderCheck />
                
                <div className="btn_wrap">
                    {/* <Link to="/PayEnd">결제하기</Link> */}
                    <button type="submit">결제하기</button>
                </div>
            </form>
            
        </article>
    );
}

export default Pay;

