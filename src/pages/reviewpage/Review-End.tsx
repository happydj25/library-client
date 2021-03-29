import React from 'react';
import {Link} from 'react-router-dom';

const ReviewEnd = () => {
    return (
        <article className="review_end">
            <h3>리뷰 작성 완료!</h3>
            윤동주 님의 리뷰는 다른 사람에게 도움이 됩니다.<br />
            감사합니다 :)<br />

            <div className="btn_wrap">
                <Link to="/mypage">마이페이지로</Link>
                <Link to="/">홈으로</Link>
            </div>
        </article>
    );
}

export default ReviewEnd;