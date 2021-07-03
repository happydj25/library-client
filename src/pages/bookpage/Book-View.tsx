import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import ReviewList from '../../components/review/Review-List';
import { Card } from 'react-bootstrap';  

const BookView = () => {


// console.log(book);
    let location:any = useLocation();

    // const [carts, setCarts] = useLocalStorageState("carts", []);
    // const [cart, setCart] = useState("");

    const bookID:any = location.state.book.id;
    // 책 이미지
    const bookImageLinks:any = location.state.book.volumeInfo.imageLinks.thumbnail;
    // 책이름
    const bookTitle:string = location.state.book.volumeInfo.title;
    // 책소개
    const bookDescription:string = location.state.book.volumeInfo.description;
    // 출판일
    const bookPublishedDate:string = location.state.book.volumeInfo.publishedDate;
    // 지은이
    const bookAuthors:string = location.state.book.volumeInfo.authors;
    // 출판사
    const bookPublisher:string = location.state.book.volumeInfo.publisher;
    // 할인전가격
    const bookListPrice:any = (location.state.book.saleInfo.listPrice.amount || '0');
    // 할인가격
    const bookRetailPrice:any = location.state.book.saleInfo.retailPrice.amount;

    const dftBookPublisher:string = bookPublisher || '출판사';
    const dftBookListPrice:any = bookListPrice || '0';
    const dftBookRetailPrice:any = bookRetailPrice || '0';

    let [bookNum, setBookNum] = useState<number>(1);

    console.log('고양이');
    console.log(location.state.book);

    let bookData:any = location.state.book;


    function addCart() {        
        const cartList = JSON.parse(localStorage.getItem('cartlist') || "[]");

        let index = -1;
        for (let counter = 0, cnt = cartList.length; counter < cnt; counter++) {
            if ( cartList[ counter ].bookID == bookID ) {
                index = counter;
                // 한번 장바구니에 담겨있다면 새로추가 X 있는 항목에 책 수량만 +
                const kkk:number = Number(cartList[counter].bookNum) + Number(bookNum);
                cartList[counter].bookNum = kkk;
                localStorage.setItem('cartlist', JSON.stringify(cartList));
                return ;
            }
        }

        let addCartBook:any = {
            id: cartList.length + 1,
            bookID :bookID,
            bookTitle : bookTitle,
            bookNum : bookNum,
            bookImageLinks : bookImageLinks,
            bookAuthors : bookAuthors,
            dftBookPublisher : dftBookPublisher,
            dftBookRetailPrice : dftBookRetailPrice,
            bookPublishedDate : bookPublishedDate
        };

        cartList.push(addCartBook);
        localStorage.setItem('cartlist', JSON.stringify(cartList));

    }

    return (
        <article className="book_view">

            <div className="title clearfix">
                <div className="img">
                    {/* <img src={bookImageLinks} alt=""/> */}
                    <Card.Img variant="top" src={bookImageLinks} alt={bookTitle} />
                </div>
                <div className="txt">
                    <strong>{bookTitle} </strong>
                    <span className="author">{bookAuthors}/{dftBookPublisher}</span>
                    <span className="price">할인전 가격 : {dftBookListPrice}원 | 할인 가격 : {dftBookRetailPrice}</span>    
                    <span className="date">출간일 : {bookPublishedDate}</span>
                    <span>
                        <input 
                        type="number" 
                        id="bookNum" 
                        value={bookNum}
                        min={1}
                        onChange={(e) => setBookNum(parseInt(e.target.value))}
                        />
                    </span>
                    <div className="btn_wrap">
                        <Link 
                        to={{pathname: `/pay/${bookID}`, state: {bookData}}}
                        >
                            바로 구매하기</Link>
                       
                             <button type="button" onClick={addCart}>장바구니에 담기</button>
                             {/* to={{pathname: `/cart/${bookID}`,
                         state: {location}}} */}
                    </div>
                </div>
            </div>

            <div className="info">
                <h3>책소개</h3>
                {bookDescription}
            </div>

            {/* <ReviewList /> 일단보류 */}

        </article>
    );
}

export default BookView ;

function useLocalStorageState(arg0: string, arg1: never[]): [any, any] {
    throw new Error('Function not implemented.');
}
