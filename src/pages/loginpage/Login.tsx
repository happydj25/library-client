import axios, { AxiosResponse } from 'axios';
import { apiService } from 'core/service/ApiService';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


import GoogleLogin from '../../components/login/GoogleLogin';
import NaverLogin from '../../components/login/NaverLogin';
interface User {
    userId: string,
    message: string,
}

const Login = () => {
    // const Login = (props: { onLogin: any; }) => {

    // const { onLogin } = props;

    // const [usernameReg, setUsernameReg] = useState("");
    // const [passwordReg, setPasswordReg] = useState("");
    

    const [username, setUsername] = useState<any>('');
    const [password, setPassword] = useState<any>('');

    const [loginStatus, setLoginStatus] = useState('');

    axios.defaults.withCredentials = true;

    const login = async () => {
        const result = await apiService().post<User>('login', {
            username: username,
            password: password
        }).then(res => res.data);
        
        if(result !== undefined) { 
            setLoginStatus(result?.message);
        }
    };

    useEffect(() => {
        // 사용자의 로그인 상태 구분
        axios.get('http://localhost:4000/login').then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].user_id);
            }
        });
    }, []);

    // 페이스북 소셜 로그인
    useEffect(() => {
        facebookInit();
    }, [])

    function facebookInit() {
        FB.init({
            appId: '2982476848741388',
            cookie: true,
            xfbml:true,
            version: 'v9.0'
        })
    }

    function facebookLogin () {
        FB.login((res) => {
            console.log(res)
        })
    }

     return (
            <article className="login">
                <p>LOGIN</p>
                    <div className="input_row">
                        <input 
                            className="int" 
                            type="text" 
                            name="id"
                            placeholder="아이디" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input_row">
                        <input 
                            className="int" 
                            type="password" 
                            name="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        className="login_btn" 
                        type="submit" 
                        onClick={login}>로그인</button>
                <h1>
                    {loginStatus}
                </h1>
                
                
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
                                success={(res: any) => console.log(res)}
                                fail={(res: any) => console.log(res)}
                            />
                        </li>
                        <li>
                            <NaverLogin />
                        </li>
                        <li>
                            <button type="button" onClick={facebookLogin}>페북로그인</button>
                        </li>
                    </ul>
                </div>
            </article>
        
     );
}

export default Login;
