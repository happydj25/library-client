// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import {Link, useHistory, withRouter} from 'react-router-dom';

import GoogleLogin from '../../components/login/GoogleLogin';
import NaverLogin from '../../components/login/NaverLogin';

// import users from 'users.json';
// import { fetchLogin } from "./service";

// const Login = (props: { onLogin: any; }) => {


const Login = () => {

    // responseFacebook = (response) => {
    //     console.log(response)
    // }

    // const user:any = [
    //     {}
    // ]

    const adminUser = {
        userid: "asdf",
        password: "asdf",
        name : '윤동주',
        phone : '010-7332-5710',
        email : 'shemf1004@naver.com',
        address : '서울특별시 서대문구 홍은동 280-9',
    }
    
    const [user, setUser] = useState({
        userid : "",
        password : ""
    });

    const history = useHistory();

    const [details, setDetails] = useState({userid: "", password: ""});

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        Login(details);
    }

    const [error, setError] = useState("");


    const Login = (details: { userid: any; password: any; }) => {
        if (details.userid == adminUser.userid && details.password == adminUser.password) {
            console.log('로그인 성공');
            localStorage.setItem("userinfo", JSON.stringify(adminUser));

            history.push('/');



            setUser({
                userid : details.userid,
                password : details.password
            });
        } else {
            console.log('기존 정보와 일치하지 않습니다.');
        }
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

    const Logout = () => {
        setUser({ userid : "", password : "" });
    }






    // useEffect(() => {
    //     facebookInit();
    // }, [])

    // function facebookInit() {
    //     FB.init({
    //         appId: '2982476848741388',
    //         cookie: true,
    //         xfbml:true,
    //         version: 'v9.0'
    //     })
    // }

    // function facebookLogin () {
    //     FB.login((res) => {
    //         console.log(res)
    //     })
    // }

     return (
            <article className="login">
                <p>LOGIN</p>
                <form onSubmit={submitHandler}>
                    <div className="input_row">
                        <input 
                            className="int" 
                            type="text" 
                            placeholder="아이디" 
                            onChange={e => setDetails({...details, userid: e.target.value})}
                            value={details.userid}
                        />
                    </div>
                    <div className="input_row">
                        <input 
                            className="int" 
                            type="password" 
                            placeholder="비밀번호"
                            onChange={e => setDetails({...details, password: e.target.value})}
                            value={details.password}
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
                            {/* <button type="button" onClick={facebookLogin}>페북로그인</button> */}
                        </li>
                    </ul>
                </div>
            </article>
        
     );
}


export default Login;
// export default withRouter(Login);
