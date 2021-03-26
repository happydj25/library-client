import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const IdFindEnd = () => {
    return (
        <article className="login">

            <div className="idpw_find">

                <div className="id_find_end">
                    입력하신 계정의 아이디는
                    <span>asdf5468</span> 입니다.
                    <div className="btn_wrap">
                        <button type="button"><Link to="/login">로그인</Link></button>
                    </div>                        
                </div>
                <div className="pw_find_end">
                    입력하신 계정의 비밀번호가 초기화 되었습니다.<br />
                    새로운 비밀번호는 <span>123456</span> 입니다.
                    <div className="btn_wrap">
                        <button type="button"><Link to="/login">로그인</Link></button>
                    </div>                        
                </div>

                <div className="find_error">
                    입력하신 계정의 회원이 없습니다.
                    <div className="btn_wrap">
                        <button type="button"><Link to="/idpwfind">다시 입력하기</Link></button>
                        <button type="button"><Link to="/">홈으로</Link></button>
                    </div>                        
                </div>

            </div>

        </article>
    );
}

export default IdFindEnd;