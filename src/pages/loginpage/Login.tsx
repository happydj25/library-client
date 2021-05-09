// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import GoogleLogin from '../../components/login/GoogleLogin';
import NaverLogin from '../../components/login/NaverLogin';


const Login = (props: { onLogin: any; }) => {

    // responseFacebook = (response) => {
    //     console.log(response)
    // }

    // const user:any = [
    //     {}
    // ]

    const { onLogin } = props;

    const [userid, setUserid] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onSubmit = (event: any) => {
        event.preventDefault();
        console.log(userid, password);

        /*
            onSubmit 함수 안에서 userid, password를 서버로 보내고
            DB에서 맞는지 확인하고 로그인을 할수있도록 응답을 보내준다
            */
    }

    const userData:any = [
        {
        "id":1,
        "userId":'shemf1004',
        "name":"윤동주",
        "address":"서울특별시 홍은동 252-9",
        'phone':'01073325710'
        },
    ]

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
                <form onSubmit={onSubmit}>
                    <div className="input_row">
                        <input 
                            className="int" 
                            type="text" 
                            placeholder="아이디" 
                            value={userid}
                            onChange={(e) => setUserid(e.target.value)}
                        />
                    </div>
                    <div className="input_row">
                        <input 
                            className="int" 
                            type="password" 
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        className="login_btn" 
                        type="submit" >로그인</button>
                </form>
                
                
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
