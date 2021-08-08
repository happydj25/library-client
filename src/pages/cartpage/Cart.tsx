import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Carttr from '../../components/layout/Carttr';



const Cart = () => {

    const cartList = JSON.parse(localStorage.getItem('cartlist') || "[]");
    const [cartlist2, setCartlist2] = useState(cartList);
    let totalPrice:any = '';

    const allBookPrice:any = []; 

    const deleteCartListBtn:any = (bookID:any) => {

        let res = cartlist2.filter((it: { bookID: string | any[]; }) => it.bookID.includes(bookID)); 
        console.log(res[0].id);

        // this.state.cartCookie.filter(
        //     (item) => !this.state.onCheckList.includes(item.id)
        // );

        // setCartlist2(users.filter(user => user.id !== id));

        setCartlist2(cartlist2.filter((cartlist2: { id: any; }) => cartlist2.id !== res[0].id));

        console.log('결과');
        console.log(cartlist2);
    }
   
    const renderCart = cartlist2.length ? cartlist2.map((cart: any) => { 
        // 책가격 * 수량
        allBookPrice.push(cart.dftBookRetailPrice * cart.bookNum);
        return (
            // <Carttr cart={cart}/>
            <tr id={cart.id}>
                <td>
                    <input 
                    type='checkbox'
                    name='cartbook' 
                    // onClick={checkSelectAll}
                    id={cart.id} />
                </td>
                <td>
                    <div className="img">
                        <img src={cart.bookImageLinks} alt={cart.bookTitle}></img>
                    </div>
                    <div className="book_info">
                        {/* <Link to={{pathname: `/bookview/${book.id}`, state: {book} }}> */}
                        <div><Link to="/bookview">{cart.bookTitle}</Link></div>
                        <div className="author">지은이 : {cart.bookAuthors}<br /> 출판사 : {cart.dftBookPublisher}<br /> 출판일 : {cart.bookPublishedDate}</div>
                    </div>
                </td>
                <td>{cart.bookPriceWon}원</td>
                <td className="num">
                    <input 
                    type="number" 
                    value={cart.bookNum}
                    min={1}
                    // onChange={(e) => setBbookNum(e.target.value)}
                    />
                </td>
                
                <td>
                    <button className="delete_btn" onClick={(e) => deleteCartListBtn(cart.bookID)}>삭제</button>
                </td>
            </tr>
        );
    }) : <td colSpan={4}>장바구니 내역이 없습니다.</td>;

    
    // 책값 합계
     let bookPriceSum:any = allBookPrice.reduce((stack: any, el: any)=>{
        return stack + el;
      }, 0);

    // 책값 + 배송비
    if (bookPriceSum>50000) {
        totalPrice = bookPriceSum;
    } else {
        totalPrice =bookPriceSum + 3000 ;        
    }
    

    // const allChecked = (selectAll: { checked: any; }) => {

        //     const checkboxes  = document.getElementsByName('cartbook');
            
        //     checkboxes.forEach((checkbox) => {
        //       checkbox.checked = selectAll.checked;
        //     })

        // }

        // 1. 로컬스토리에서 체크된 항목 bookId 를 가진 요소를 삭제한다
        // 2. 렌더 카트를 다시 그린다
        // 3.


        /**
         * axios 초기화를 한다.
         *
         * @param config 환경
         */
        // const checkSelectAll = () => {

        //     var x = document.getElementsByTagName("input[type='checkbox']");
        //     var i;

        //     console.log(x.length);
        //     for (i = 0; i < x.length; i++) {
        //         if (x[i].type == "checkbox") {
        //             x[i].addEventListener("click", function() {
        //                 console.log('Click on every checkbox')
        //             });
        //         }
        //     }

        // }


        // function addCart() {        
        //     const cartList = JSON.parse(localStorage.getItem('cartlist') || "[]");

        //     let index = -1;
        //     for (let counter = 0, cnt = cartList.length; counter < cnt; counter++) {
        //         if ( cartList[ counter ].bookID == bookID ) {
        //             index = counter;
        //             // 한번 장바구니에 담겨있다면 새로추가 X 있는 항목에 책 수량만 +
        //             const kkk:number = Number(cartList[counter].bookNum) + Number(bookNum);
        //             cartList[counter].bookNum = kkk;
        //             localStorage.setItem('cartlist', JSON.stringify(cartList));
        //             return ;
        //         }
        //     }

        //     let addCartBook:any = {
        //         id: cartList.length + 1,
        //         bookID :bookID,
        //         bookTitle : bookTitle,
        //         bookNum : bookNum,
        //         bookImageLinks : bookImageLinks,
        //         bookAuthors : bookAuthors,
        //         dftBookPublisher : dftBookPublisher,
        //         dftBookRetailPrice : dftBookRetailPrice,
        //         bookPublishedDate : bookPublishedDate
        //     };

        //     cartList.push(addCartBook);
        //     localStorage.setItem('cartlist', JSON.stringify(cartList));

        // }

    return (
        <div className="my_cart">

            <article className="my_cart">
                <h3>장바구니</h3>
                <div className="top_btn">
                    {/* <button type="button" onClick={cartDelete}>선택상품 삭제</button> */}
                    {/* <select name="" id="">
                        <option value="">최근담은순서</option>
                        <option value="">상품명</option>
                        <option value="">저가격순</option>
                        <option value="">고가격순</option>
                    </select> */}
                </div>
            
                <table className="my_cart_table">
                    <thead>
                        <tr>
                             <th>
                                <label htmlFor="cart_all_select">전체선택
                                    <input 
                                    type="checkbox"
                                    name="selectall"
                                    // onClick={checkSelectAll}
                                    id="cart_all_select" />
                                </label>
                            </th>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                            <th>삭제</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {renderCart}
                    </tbody>
                </table>

                <div className="payment_sum">
                    <span className="sum">
                        상품 합계 <b>{bookPriceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> <br />
                        배송비 
                        <b>{ bookPriceSum >= 50000 ? '5만원 이상 배송비 무료!' :'3,000' }</b> <br />
                        총 결제 예상 금액 <b>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
                    </span>
                    <span>
                        <Link to="/pay">선택 상품만 주문</Link>
                        <Link to={{pathname:'/pay', state:{bookPriceSum}}} >장바구니 전체 주문</Link>     

                                           
                    </span>
                
                </div>
            </article>
        </div>
         
        
    );
}

export default Cart;