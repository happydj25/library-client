import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Facebook from '../../components/login/FaceBookLogin2';
import GoogleLogin from '../../components/login/GoogleLogin';
import NaverLogin from '../../components/login/NaverLogin';

const Login = () => {

        const [text, setText] = useState('kossie');

        const [userid, setUserid] = useState('');
        const [password, setPassword] = useState('');

        const onLogin = () => {
            alert('로그인하기!!');
        }

        const enterLogin = (event: {
            keyCode: any;
        }) => {
            if (event.keyCode === 13) {
                onLogin();
            }
        }

        // let text = 'kossie';

        const updateText = () => {
            // text = 'coder';
            setText('coder');
            console.log(text);
        }

//     const { naver } = window as any;

//     function Login(props: any) {
//     const initializeNaverLogin = () => {
//         const naverLogin = new naver.LoginWithNaverId({
//         clientId: process.env.REACT_APP_NAVER || '',
//         callbackUrl: 'http://localhost:3000', 
//         isPopup: false, // popup 형식으로 띄울것인지 설정
//         loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
//         });
//         naverLogin.init();
//     };
        
//     useEffect(() => {
//         initializeNaverLogin();
//     }, []);
//   }

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
    // function Login(props: any) {
    //     const initializeNaverLogin = () => {
    //       const naverLogin = new naver.LoginWithNaverId({
    //         clientId: process.env.REACT_APP_Naver || '',
    //         callbackUrl: 'http://localhost:3000', 
    //         isPopup: false, // popup 형식으로 띄울것인지 설정
    //         loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
    //       });
    //       naverLogin.init();
    //     };
          
    //     useEffect(() => {
    //       initializeNaverLogin();
    //     }, []);
        
    //     return (
    //       ...
    //       <div id='naverIdLogin' /> { /* id 꼭 입력해주어야 함 */}
    //       ...
    //     )
    //   }

    /* 설정정보를 초기화하고 연동을 준비 */
    // naverLogin.init();

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
                    <input className="int" type="password" onKeyUp={enterLogin} placeholder="비밀번호" />
                </div>
                <span>{text}</span>
                {/* <button className="login_btn" type="button" onClick={login}>로그인</button> */}
                <button className="login_btn" type="button" onClick={updateText} >로그인</button>
                <ul className="flUl">
                    <li><Link to="/join">회원가입</Link></li>
                    <li><Link to="/idpwfind">ID/PW 찾기</Link></li>
                </ul>
                <hr />
                <div className="sns_login">
                    <p>더욱 간편한 로그인</p>
                    <ul>
                        <li className="google_login" >
                            {/* <GoogleLogin
                                clientId="333939784079-eopm9kcvq2ru3hksjbic8n63duucft2e.apps.googleusercontent.com"
                                buttonText="구글 로그인"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            /> */}

                            <GoogleLogin 
                                success={(res: any) => console.log(res)}
                                fail={(res: any) => console.log(res)}
                            />
                            
                        </li>
                        <li>
                        {/* <NaverLogin 
                            clientId="cONIXTmG9Ur6Vyf3N6Bp"
                            callbackUrl="http://localhost:3000/login"
                            render={(props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; }) => <div onClick={props.onClick}>Naver Login</div>}
                            onSuccess={(naverUser: any) => console.log(naverUser)}
                            onFailure={() => console.error(result)}
                        /> */}
                        {/* <div id='naverIdLogin' /> */}

                            {/* <NaverLogin 
                                clientId= 'cONIXTmG9Ur6Vyf3N6Bp'
                                callbackUrl="http://localhost:3000/login(callback url U set in naver developer center"
                                render={(props) => <div onClick={props.onClick}>Naver Login</div>}
                                onSuccess={(naverUser) => console.log(naverUser)}
                                onFailure={() => console.error(result)}
                            /> */}

                            {/* <div id="naverIdLogin"></div> */}
                            {/* <NaverLogin 
                                clientId="cONIXTmG9Ur6Vyf3N6Bp"
                                callbackUrl="http://localhost:3000"
                                render={(props) => <div onClick={props.onClick}>Naver Login</div>}
                                onSuccess={(naverUser) => console.log(naverUser)}
                                onFailure={() => console.error(result)}
                                /> */}

                            <NaverLogin
                                success={(res: any) => console.log(res)}
                                fail={(res: any) => console.log(res)}
                            />
                        </li>
                        <li>
                          <Facebook />
                            {/* <FaceBookLogin /> */}
                        </li>
                        {/* <li className="naver_login">네이버로그인</li>
                        <li className="facebook_login">페이스북로그인</li> */}
                    </ul>
                </div>
            </article>
        
     );
}

export default Login;
