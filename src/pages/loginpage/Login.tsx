// import { apiService } from 'core/service/ApiService';
// import React, { Component, useRef } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FaceBookLogin from '../../components/login/FaceBookLogin';


const Login = () => {

    
    

    // const { onLoginGoogle } = props;

    // // 1. 방법
    // const inputId = useRef(null);


    // // 2. 로그인 콜백으로 실행 시켜서 하는 방법
    // const login = (event?: any, value?: any ) => {

    // }

    // const submit = (value: any) => {
    //     apiService().get('')
    //         .then((res) => {
    //             console.log(res);
    //         })
    // }

    const responseGoogle = (response:any) => {
        console.log(response);
      }



     return (
            <article className="login">
                {/* <form method='post' onSubmit={submit}>

                </form> */}
                <p>LOGIN</p>
                <div className="input_row">
                    {/* <input ref={inputId} className="int" type="text" placeholder="아이디" /> */}
                    <input className="int" type="text" placeholder="아이디" />
                </div>
                <div className="input_row">
                    <input className="int" type="password" placeholder="비밀번호" />
                </div>
                {/* <button className="login_btn" type="button" onClick={login}>로그인</button> */}
                <button className="login_btn" type="button" >로그인</button>
                <ul className="flUl">
                    <li><Link to="/join">회원가입</Link></li>
                    <li><Link to="/idpwfind">ID/PW 찾기</Link></li>
                </ul>
                <hr />
                <div className="sns_login">
                    <p>더욱 간편한 로그인</p>
                    <ul>
                        <li className="google_login" >
                            <GoogleLogin
                                clientId="333939784079-eopm9kcvq2ru3hksjbic8n63duucft2e.apps.googleusercontent.com"
                                buttonText="구글 로그인"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            
                        </li>
                        <li>
                            <FaceBookLogin />
                        </li>
                        {/* <li className="naver_login">네이버로그인</li>
                        <li className="facebook_login">페이스북로그인</li> */}
                    </ul>
                </div>
            </article>
        
     );
}

export default Login;