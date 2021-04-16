import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import ReviewList from '../../components/review/Review-List';
import { Card } from 'react-bootstrap';  

const BookView = ({book}) => {


// console.log(book);
    let location:any = useLocation();

    // const [carts, setCarts] = useLocalStorageState("carts", []);
    // const [cart, setCart] = useState("");

    const bookID:any = location.state.book.id;
    // 책 이미지
    const bookImageLinks:any = location.state.book.volumeInfo.imageLinks;
    // 책이름
    const bookTitle:String = location.state.book.volumeInfo.title;
    // 책소개
    const bookDescription:String = location.state.book.volumeInfo.description;
    // 출판일
    const bookPublishedDate:String = location.state.book.volumeInfo.publishedDate;
    // 지은이
    const bookAuthors:String = location.state.book.volumeInfo.authors;
    // 출판사
    const bookPublisher:String = location.state.book.volumeInfo.publisher;
    // 할인전가격
    const bookListPrice:Number = location.state.book.saleInfo.listPrice.amount;
    // 할인가격
    const bookRetailPrice:Number = location.state.book.saleInfo.retailPrice.amount;

    useEffect(() => {
         console.log(location.state.book);
        // debugger
    }, [])

   

    return (
        <article className="book_view">

            <div className="title clearfix">
                <div className="img">
                    {/* <img src={bookImageLinks} alt=""/> */}
                    <Card.Img variant="top" src={bookImageLinks} alt={bookTitle} />
                </div>
                <div className="txt">
                    <strong>{bookTitle} </strong>
                    <span className="author">{bookAuthors}/{bookPublisher}</span>
                    <span className="price">할인전 가격 : {bookListPrice}원 | 할인 가격 : {bookRetailPrice}</span>    
                    <span className="date">출간일 : {bookPublishedDate}</span>
                    <div className="btn_wrap">
                        <Link to={{pathname: `/pay/${bookID}`, state: {book}}}>바로 구매하기</Link>
                        <Link to={{pathname: `/cart/${bookID}`, state: {book}}}>장바구니에 담기</Link>
                    </div>
                </div>
            </div>

            <div className="info">
                <h3>책소개</h3>
                {bookDescription}
            </div>

            <ReviewList />

        </article>
    );
}

export default BookView ;

function useLocalStorageState(arg0: string, arg1: never[]): [any, any] {
    throw new Error('Function not implemented.');
}
