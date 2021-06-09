import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import GoogleLogin from '../../components/login/GoogleLogin';
import NaverLogin from '../../components/login/NaverLogin';

const Login = () => {
    // const Login = (props: { onLogin: any; }) => {

    // const { onLogin } = props;

    // const [usernameReg, setUsernameReg] = useState("");
    // const [passwordReg, setPasswordReg] = useState("");
    

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [loginStatus, setLoginStatus] = useState(false);

    axios.defaults.withCredentials = true;


    const login = () => {
        axios.post('http://localhost:4000/login', {
            withCredentials: true,
            user_id: username,
            user_pw: password
            
        }).then(response => {
            if (!response.data.message) {
                // setLoginStatus(false);
                setLoginStatus(response.data.message);
            } else {
                console.log(response.data);
                // setLoginStatus(true);
                // localStorage.setItem("token", )
                setLoginStatus(response.data[0].user_id);
            }
        });     
    };

    const userAuthenticated = () => {
        axios.get('http://localhost:4000/isUserAuth', {
            headers: {
                "x-access-token": "tlijahod"

            }}).then((response)=> {
                console.log(response);
            })
    }

    // const onSubmit = (event: any) => {
    //     event.preventDefault();
    //     console.log(userid, password);

        // const loginid:string = ;
        // const loginpw:string = ;


        // const userListcopy:any = userList;

        


        /*
            onSubmit 함수 안에서 userid, password를 서버로 보내고
            DB에서 맞는지 확인하고 로그인을 할수있도록 응답을 보내준다
            */
    // }

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
                {/* <form onSubmit={onSubmit} action="/login" method="POST"> */}
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
                    {loginStatus && (
                        <button type="button" onClick={userAuthenticated}>Check if Authenticated</button>
                    )}
                    <button 
                        className="login_btn" 
                        type="submit" 
                        onClick={login}>로그인</button>
                {/* </form> */}
                
                
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
