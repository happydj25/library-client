import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
     return (
            <article className="login">
                <p>LOGIN</p>
                <div className="input_row">
                    <input className="int" type="text" placeholder="아이디" />
                </div>
                <div className="input_row">
                    <input className="int" type="password" placeholder="비밀번호" />
                </div>
                <button className="login_btn" type="button">로그인</button>
                <ul className="flUl">
                    <li><Link to="/join">회원가입</Link></li>
                    <li><Link to="/idpwfind">ID/PW 찾기</Link></li>
                </ul>
                <hr />
                <div className="sns_login">
                    <p>더욱 간편한 로그인</p>
                    <ul>
                        <li className="google_login">구글로그인</li>
                        <li className="naver_login">네이버로그인</li>
                        <li className="facebook_login">페이스북로그인</li>
                    </ul>
                </div>
            </article>
        
     );
}

export default Login;