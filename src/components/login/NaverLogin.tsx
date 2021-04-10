// import React, { Component } from 'react';
// // import FacebookLogin from 'react-facebook-login';

export {}

// let NaverLogin = new Naver.LoginWithNaverId(
//   {
//       clientId: "cONIXTmG9Ur6Vyf3N6Bp",
//       callbackUrl: "http://localhost:3000/login?naver=true",
//       isPopup: false, /* 팝업을 통한 연동처리 여부 */
//       loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
//   }
// );

// /* 설정정보를 초기화하고 연동을 준비 */
// NaverLogin.init();


// window.addEventListener('load', function () {
//   NaverLogin.getLoginStatus(function (status: any) {
//       if (status) {
//   // 로그인 성공
//       } else {
//           console.log("callback 처리에 실패하였습니다.");
//       }
//   });
// });



// export default class Naver extends Component {
//   state = {
//     inLoggedIn: false,
//     userID: '',
//     name: '',
//     email: '',
//     picture: ''
//   }



//   responseFacebook = (response: any) => {
//     // console.log(response);
//     this.setState({
//       inLoggedIn: true,
//       userID: response.userID,
//       name: response.name,
//       email: response.email,
//       picture: response.picture
//     });
//   }
//   componentClicked = () => console.log('clicked');

//   render() {

//     let NaverContent;

//     if(this.state.inLoggedIn) {
//       NaverContent = (
//         <div style={{
//           width: '400px',
//           margin: 'auto',
//           background: '#f4f4f4',
//           padding: '20px'
//         }}>
//           <img src={this.state.picture} alt={this.state.name} />
//           <h2>Welcome {this.state.name}</h2>
//           Email: {this.state.email}
//         </div>
//       );
//     } else {
//       NaverContent = ( 
//       <NaverLogin
//         appId="2982476848741388"
//         autoLoad={true}
//         fields="name,email,picture"
//         onClick={this.componentClicked}
//         callback={this.responseFacebook} />
//         )
//     }

//     return <div>{NaverContent}</div>;
//   }
// }