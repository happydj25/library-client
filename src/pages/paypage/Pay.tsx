import React, { Component, useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
// import OrderCheck from '../../components/order/Order-Check';
import OrderItem from '../../components/order/Order-Item';
import PayType from './Pay-Type';

const Pay = (state:{bookPriceSum:any}) => {

   
    // let payNowBookData = useLocation<any>();
    // let asd:any = payNowBookData.state;
   
    const location:any = useLocation();
    // const bookPriceSum:any = 
    const bookPriceSum:any = location.state.bookPriceSum;

    

    const [deliveryRequest, setDeliveryRequest] = useState<string>('');

    const [newAdress, setNewAdress] = useState({adress: "", detailadress: "", postcode: ""});



    // 사용자 정보
    let [orderer, setOrderer] = useState(JSON.parse(localStorage.getItem('userinfo') || "[]"));

    
    // useEffect(() => {
    //     const Subscription = props.source.subscribe();
    //     return () => {
    //       // Clean up the subscription
    //       subscription.unsubscribe();
    //     };
    //   });

    // function onNewAdress () {
    //     document.getElementsByClassName('newadress').classList.remove('hidden');;
    // }

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

    const [isOpened, setIsOpened] = useState(false);

    function onChangeAdressClick() {
        setIsOpened(wasOpened => !wasOpened);
    };

    // const postNewAdress = () => {
    //     const newAdressGroup = newAdress.adress + " " + newAdress.detailadress + " " + newAdress.postcode;
    //     setOrderer({...orderer, adress:newAdressGroup});
    //     setIsOpened(wasOpened => !wasOpened);


    //     let nowUserInfo = (JSON.parse(localStorage.getItem('userinfo') || "[]"));
    //     nowUserInfo.adress = newAdressGroup;
    //     console.log(nowUserInfo);

    //     localStorage.removeItem('userinfo');
    //     // localStorage.setItem('userinfo', nowUserInfo);
    // };

    return (
        <article className="pay">
            <form action="">
                <h2>결제하기</h2>
                <div>
                    <h3>배송 정보</h3>
                    {/* <h3 title={title}>{title}}</h3> */}
                    <dl>
                        <dt>{orderer.name}</dt>
                        <dd className="phone_num">{orderer.phone}</dd>
                        <dd>
                            {orderer.address}
                            <button type="button" onClick={onChangeAdressClick}>다른주소 입력하기</button>
                            {isOpened && 
                                <div className="newadress">
                                    <ul>
                                        <li>
                                            <input 
                                            type="text" placeholder="주소" 
                                            onChange={(e) => setNewAdress({...newAdress, adress:e.target.value})}
                                            value={newAdress.adress}
                                            /></li>
                                        <li>
                                            <input 
                                            type="text" placeholder="상세 주소" 
                                            onChange={(e) => setNewAdress({...newAdress, detailadress:e.target.value})}
                                            value={newAdress.detailadress}
                                            /></li>
                                        <li>
                                            <input 
                                            type="text" placeholder="우편번호" 
                                            onChange={(e) => setNewAdress({...newAdress, postcode:e.target.value})}
                                            value={newAdress.postcode}
                                            /></li>
                                        <li>
                                            {/* <button type="button"  onClick={postNewAdress}>입력한 주소 사용하기</button> */}
                                        </li>
                                    </ul>
                                </div> }

                        </dd>
                        <dd className="delivery-request">
                            <select name="" id="">
                                <option value="">배송메모를 선택해 주세요</option>
                                <option value="">요청사항을 직접 입력합니다.</option>
                                <option value="">배송 전에 미리 연락 바랍니다</option>
                                <option value="">부재시 경비실에 맡겨주세요</option>
                                <option value="">부재시 전화나 문자 남겨주세요</option>
                            </select>
                            <div className="hidden">
                                <input type="text" placeholder="요청사항을 입력해 주세요" 
                                onChange={(e) => setDeliveryRequest(e.target.value)}
                                />
                            </div>
                        </dd>
                    </dl>
                </div>
                {/* <OrderItem asd={asd.location.state.book} /> */}
                <OrderItem bookPriceSum={bookPriceSum} />
                
                <div className="paymentmethod">
                    <h3>결제수단</h3>
                    <PayType />
                </div>

                {/* <OrderCheck /> */}
                
                <div className="btn_wrap">
                    {/* <Link to="/PayEnd">결제하기</Link> */}
                    <button type="submit">결제하기</button>
                </div>
            </form>
            
        </article>
    );
}

export default Pay;

