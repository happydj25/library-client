import React, { Component } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {

    const userdata:any = localStorage.getItem('userinfo');
    console.log(userdata);

    function Logout() {
        localStorage.removeItem("userinfo");
        alert('로그아웃 되었습니다.');
    }

    useEffect(() => {
        // console.log(userdata);
        // document.title = `{JSON.parse(userdata).name}님 안녕하세요!`;

    });


    return (
        <nav>
            <article>
                <ul>
                    {(localStorage.getItem('userinfo') != null) ? (
                        <>
                            <li className="welcome">
                                <h2>{JSON.parse(userdata).name}님 안녕하세요!</h2> 
                            </li>
                            <li><button type="button" className="logout" onClick={Logout}>로그아웃</button></li>
                            <li><Link to="/cart">장바구니</Link></li>
                            <li><Link to="/mypage">마이페이지</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/join">회원가입</Link></li>
                        </>
                    )}
                    
                    
                    
                    <li><Link to="/boardlist">게시판</Link></li>
                </ul>
            </article>
        </nav>
    )
}
// class Nav extends Component {

//     // function logout() {
//     //     console.log('로그아웃');
//     // }

//     const userdata:any = localStorage.getItem.('userinfo');

//     render() {
//         return (
//             <nav>
//                 <article>
//                     <ul>
//                         {(userdata != "") ? (
//                             <li>
//                                 <h2>{}</h2>님 안녕하세요! 
//                                 <button type="button">로그아웃</button>
//                             </li>
//                         ) : (
//                             <>
//                                 <li><Link to="/login">로그인</Link></li>
//                                 <li><Link to="/join">회원가입</Link></li>
//                             </>
//                         )}
                        
                        
//                         <li><Link to="/cart">장바구니</Link></li>
//                         <li><Link to="/mypage">마이페이지</Link></li>
//                         <li><Link to="/boardlist">게시판</Link></li>
//                         <li></li>
//                     </ul>
//                 </article>
//             </nav>
//         )
//     }
// }

export default Nav;
