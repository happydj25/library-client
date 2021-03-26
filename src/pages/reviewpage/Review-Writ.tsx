import React from 'react';
import {Link} from 'react-router-dom';

const ReviewWrit = () => {
    return (
        <article className="review_writ">
            <h3>리뷰쓰기</h3>
            <ul className="order_item_list">
                <li>
                    <div className="img"></div>
                    <strong><Link to="/bookview">책제목</Link></strong>
                    <span className="author">지은이/출판사</span>
                    <span className="num">1권</span>
                    <span className="price">12,900원</span>                            
                </li>
            </ul>
            <div className="GPA">
                <h3>평점</h3>
                <select name="" id="">
                    <option value="">*****</option>
                    <option value="">****</option>
                    <option value="">***</option>
                    <option value="">**</option>
                    <option value="">*</option>
                </select>
            </div>
            <div>
                <h3>상품평</h3>
                <textarea name="" id="" >최소 10자 이상 입력해주세요</textarea>
                <p>0/5,000</p>
            </div>
            <div className="photo">
                <input type="button" value="사진/동영상 첨부하기" />
                <ul className="hidden">
                    <li><img src="" alt="" /></li>
                </ul>
                <div className="warning">
                    상품과 무관한 사진을 첨부한 리뷰는 통보없이 삭제 될 수 있습니다.
                </div>
            </div>
            
            <div className="btn_wrap">
                <Link to="/ReviewEnd">등록</Link>
                <Link to="/orderlist">취소</Link>
            </div>
        </article>
    );
}

export default ReviewWrit;