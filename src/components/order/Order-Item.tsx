import React, { Component } from 'react';
import {Link, useLocation} from 'react-router-dom';

function OrderItem (props:any) {
// function OrderItem (props:any) {
    

    // let bookData:any = props.asd.state.bookData;
    // const bookID:any = bookData.id;
    // // 책 이미지 
    // const bookImageLinks:string = bookData.volumeInfo.imageLinks.thumbnail;
    // // 책이름
    // const bookTitle:string = bookData.volumeInfo.title;
    // // 지은이
    // const bookAuthors:string = bookData.volumeInfo.authors;
    // // 출판사
    // const bookPublisher:string = bookData.volumeInfo.publisher;
    // // 할인전가격
    // const bookListPrice:any = bookData.saleInfo.listPrice.amount;
    // // 할인가격
    // const bookRetailPrice:any = bookData.saleInfo.retailPrice.amount;


    // function bfbn() {
    //     console.log(#bookNum)
    // }


    const cartList = JSON.parse(localStorage.getItem('cartlist') || "[]");

    console.log(cartList);


    // const allBookPrice:any = []; 

    const itemList:any = cartList.length ? cartList.map((cartList:any) => { 
        console.log('이게머냐'+JSON.stringify(cartList));
        return (
            // <Carttr cart={cart}/>

            <li className={cartList.id}>
                <div className="img">
                    <img src={cartList.bookImageLinks} alt={cartList.bookTitle}/>
                </div>

                
                <div className="bookdata">
                    <strong><Link to="/bookview">{cartList.bookTitle}</Link></strong>
                    <div>
                        <span className="author">지은이 : {cartList.bookAuthors}</span>
                        <span>출판사 : {cartList.dftBookPublisher}</span>    
                        <span className="num">구매수량 : <b>{cartList.bookNum}</b> 권</span>
                        <span className="price">가격 : <b>{(cartList.dftBookRetailPrice * cartList.bookNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> 원 </span>
                    </div>
                </div>
                <button type="button">삭제</button>
                
            </li>
        );
    }) : <td colSpan={4}>장바구니 내역이 없습니다.</td>;



    return (
        <div className="order_item">
            <h3>주문상품</h3>
                <ul>
                    {itemList}                    
                </ul>
                <div className="sum">총 주문금액 : {JSON.stringify(props.bookPriceSum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
            {/* <!-- 12,900 + 3000원 더한 금액 , 5만원 이상 무료배송--> */}
                <Link className="hidden" to="/ReviewWrit">리뷰쓰기</Link>
            {/* <input type="button" value="취소요청" /> */}
        </div>
    );
}

export default OrderItem;
