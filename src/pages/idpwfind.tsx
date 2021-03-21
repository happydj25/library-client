import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const IdpwFind = () => {
    return (
        <article className="login">

            <div className="idpw_find">
                <p>아이디 찾기</p>
                <div className="input_row">
                    <input className="int" type="text" placeholder="이름" />
                </div>
                <div className="input_row">
                    <input className="int" type="text" placeholder="전화번호" />
                </div>
                <button className="login_btn" type="button"><Link to="/idfindEnd">아이디 찾기</Link></button>

                <hr />

                <p>비밀번호 찾기</p>
                <div className="input_row">
                    <input className="int" type="text" placeholder="이름" />
                </div>
                <div className="input_row">
                    <input className="int" type="text" placeholder="아이디" />
                </div>
                <div className="input_row">
                    <input className="int" type="text" placeholder="전화번호" />
                </div>
                <button className="login_btn" type="button"><Link to="/pwfindEnd">비밀번호 찾기</Link></button>


            </div>

        </article>
    );
}

export default IdpwFind;