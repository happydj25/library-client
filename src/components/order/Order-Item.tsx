import React, { Component } from 'react';
import {Link} from 'react-router-dom';


function OrderItem (props:any) {
    console.log('야미');
    console.log(props);
    
    const bookID:any = props.asd.id;
    // 책 이미지 
    const bookImageLinks:string = props.asd.volumeInfo.imageLinks.thumbnail;
    // 책이름
    const bookTitle:string = props.asd.volumeInfo.title;
    // 지은이
    const bookAuthors:string = props.asd.volumeInfo.authors;
    // 출판사
    const bookPublisher:string = props.asd.volumeInfo.publisher;
    // 할인전가격
    const bookListPrice:any = props.asd.saleInfo.listPrice.amount;
    // 할인가격
    const bookRetailPrice:any = props.asd.saleInfo.retailPrice.amount;


    function bfbn() {
        console.log(#bookNum)
    }

    return (
        <div className="order_item">
            <h3>주문상품</h3>
            <ul>
                <li bookID={bookID}>
                    <div className="img">
                        <img src={bookImageLinks} alt={bookTitle}/>
                    </div>
                    <strong><Link to="/bookview">{bookTitle}</Link></strong>
                    <span className="author">{bookAuthors}/{bookPublisher}</span>
                    <span className="num"><input id="bookNum" type="text" value="1"/>권</span>
                    <span className="price">할인전 : {bookListPrice}원 /  할인후 :{bookRetailPrice}원 </span>
                </li>
            </ul>
            <div className="sum">주문금액 : 15,900</div>
            {/* <!-- 12,900 + 3000원 더한 금액 , 5만원 이상 무료배송--> */}
            <Link class="hidden" to="/ReviewWrit">리뷰쓰기</Link>
            {/* <input type="button" value="취소요청" /> */}
        </div>
    );
}

export default OrderItem;
