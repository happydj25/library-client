import React from 'react';
import {Link} from 'react-router-dom';
import ReviewList from '../../components/review/Review-List';

const BookView = () => {
    return (
        <article className="book_view">

            <div className="title clearfix">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <div className="txt">
                    <strong>홍길동전</strong>
                    <span className="author">홍길동/민영사</span>
                    <span className="price">가격 : 12,900원</span>    
                    <span className="date">출간일 : 20210327</span>
                    <div className="btn_wrap">
                        <Link to="/pay">바로 구매하기</Link>
                        <Link to="/cart">장바구니에 담기</Link>
                    </div>
                </div>
            </div>

            <div className="info">
                <h3>책소개</h3>
                듣기만 하여도 가슴이 설레는 말이다 청춘! 너의 두손을 가슴에 대고 물방아 같은 심장의 고동을 들어 보라 청춘의 피는 끓는다 끓는 피에 뛰노는 심장은 거선의 기관과 같이 힘있다 이것이다 인류의 역사를 꾸며 내려온 듣기만 하여도 가슴이 설레는 말이다 청춘! 너의 두손을 가슴에 대고 물방아 같은 심장의 고동을 들어 보라 청춘의 피는 끓는다 끓는 피에 뛰노는 심장은 거선의 기관과 같이 힘있다 이것이다 인류의 역사를 꾸며 내려온다.
            </div>

            <ReviewList />

        </article>
    );
}

export default BookView ;