import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <article>
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                        <li><Link to="/cart">장바구니</Link></li>
                        <li><Link to="/mypage">마이페이지</Link></li>
                        <li><Link to="/boardlist">문의 게시판</Link></li>
                        <li></li>
                    </ul>
                </article>
            </nav>
        )
    }
}

export default Nav;
