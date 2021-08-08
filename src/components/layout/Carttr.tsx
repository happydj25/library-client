import BookView from 'pages/bookpage/Book-View';
import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';


const Cart = ({cart}:{cart:any}) => {

    const [bookNum, setBbookNum] = useState(cart.bookNum);

    // 책가격 3자리수 콤마 추가
    const bookPriceWon:any = cart.dftBookRetailPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    



    // return (
    //     <tr id={cart.id}>
    //         <td>
    //             <div className="img">
    //                 <img src={cart.bookImageLinks} alt={cart.bookTitle}></img>
    //             </div>
    //             <div className="book_info">
    //                 {/* <Link to={{pathname: `/bookview/${book.id}`, state: {book} }}> */}
    //                 <div><Link to="/bookview">{cart.bookTitle}</Link></div>
    //                 <div className="author">지은이 : {cart.bookAuthors}<br /> 출판사 : {cart.dftBookPublisher}<br /> 출판일 : {cart.bookPublishedDate}</div>
    //             </div>
    //         </td>
    //         <td>{bookPriceWon}원</td>
    //         <td className="num">
    //             <input 
    //             type="number" 
    //             value={bookNum}
    //             min={1}
    //             onChange={(e) => setBbookNum(e.target.value)}
    //             />
    //         </td>
    //         <td>
    //             <input 
    //             type='checkbox'
    //             name='cartbook' 
    //             // onClick={checkSelectAll}
    //             id={cart.id} />
    //         </td>
    //         <td>
    //             <button className="delete_btn">삭제</button>
    //         </td>
    //     </tr>
        
    // );
}

export default Cart;
