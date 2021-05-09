import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Carttr from './Carttr'


const Cart = () => {

    const cartList = JSON.parse(localStorage.getItem('cartlist') || "[]");
    console.log(cartList);

    const [cartlist2, setCartlist2] = useState(cartList);

    const renderCart = cartlist2.length ? cartlist2.map((cart) => {
        return (
            <Carttr cart={cart}/>
        );
        
    }) : <td colSpan={4}>장바구니 내역이 없습니다.</td>;


    useEffect(() => {
        //  
    }, []);

    const cartDelete = () => {

    }

    // 1. 로컬스토리에서 체크된 항목 bookId 를 가진 요소를 삭제한다
    // 2. 렌더 카트를 다시 그린다
    // 3.

    return (
        <article className="my_cart">
                <h3>장바h구니</h3>
                <div className="top_btn">
                    <button type="button" onClick={cartDelete}>선택상품 삭제</button>
                    <select name="" id="">
                        <option value="">최근담은순서</option>
                        <option value="">상품명</option>
                        <option value="">저가격순</option>
                        <option value="">고가격순</option>
                    </select>
                </div>

                <table className="my_cart_table">
                    <thead>
                        <tr>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                            <th>
                                <label htmlFor="cart_all_select">전체선택<input type="checkbox" name="" id="cart_all_select" /></label>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {renderCart}


                        {/* <tr>
                            <td>
                                <div className="img">책이미지</div>
                                <div className="book_info">
                                    <div><Link to="/bookview">책제목</Link></div>
                                    <span className="author">지은이/출판사</span>
                                </div>
                            </td>
                            <td>12,900원</td>
                            <td className="num"><input type="text" value="1" /></td>
                            <td><input type="checkbox" name="" id="" /></td>
                        </tr> */}
                    </tbody>
                </table>

                <div className="payment_sum">
                    <span className="sum">
                        총 상품가격 <b>77,670</b> <br />
                        배송비 <b>3,000</b> <br />
                        총 결제 예상 금액 <b>80,670</b>
                    </span>
                    <span>
                        <button type="button">선택 상품만 주문</button>
                        <button type="button">장바구니 전체 주문</button>
                    </span>
                </div>
            </article>
        
    );
}

export default Cart;
