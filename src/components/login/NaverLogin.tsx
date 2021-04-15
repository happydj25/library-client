import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const { naver } = window;

function NaverLogin() {
  
  const location = useLocation();  

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);
  

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'cONIXTmG9Ur6Vyf3N6Bp',
      callbackUrl: {'http://localhost:3000':String}, 
      isPopup: true, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
    });
    
    naverLogin.init();
  };


  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
  };
    

  { /* id 꼭 입력해주어야 함 */}
  return (
    <div id='naverIdLogin' /> 
  )
}

export default NaverLogin;