import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <ul className="review_btn">
                <li><Link to="/">수정</Link></li>
                <li><Link to="/">삭제</Link></li>
                <li><Link to="/">신고</Link></li>
                <li><Link to="/">댓글쓰기</Link></li>
            </ul>
        )
    }
}

export default Nav;
