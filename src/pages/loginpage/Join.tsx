import axios from 'axios';
import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import PopupPostCode from './PopupPostCode';

const Join = ({history} : {history:any}) => {

    // let userId = "anonymous";
    // let userName = "anonymous";

    const [userId, setUserId] = useState<any>('');
    const [userPw, setUserPw] = useState<any>('');
    const [userPw2, setUserPw2] = useState<any>('');
    const [userName, setUserName] = useState<any>('');
    const [userEmail, setUserEmail] = useState<any>('');
    const [userPhone1, setUserPhone1] = useState<any>('');
    const [userPhone2, setUserPhone2] = useState<any>('');
    const [userPhone3, setUserPhone3] = useState<any>('');
    const [userAdress, setUserAdress] = useState<any>('');


    const submitJoin = () => {
        axios.post('http://localhost:4000/register', {

            user_id: userId,
            user_pw: userPw,
            user_name: userName,            
            user_email: userEmail,
            user_phone: userPhone1 +'-'+ userPhone2 +'-'+ userPhone3,
            user_address: userAdress,

        }).then(response => {
            alert(response.data);
            history.push('/login');
          })
          .catch(error => {
            console.log(error);
          });        
    }

    // 비밀번호 일치 확인
    const matchPassword = () => {
        if( userPw != userPw2 ) {
            alert("비밀번호가 일치 하지 않습니다");
            setUserPw("");
            setUserPw2("");
            return false;
          } else{
            alert("비밀번호가 일치합니다");
            return true;
          }    
    }
    
    // 이메일 검증
    const checkEmail = () => {
        const regExp:any = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (userEmail.match(regExp) != null) {
            alert('Good!');
         } else { 
             alert('Error');
         }
    }

    // 전화번호 입력 시 포커스 이동
    // const nextPhoneNum = () => {
    //     if(userPhone1.length == 3) {
    //         userPhone2.current.focus();
    //         // document.getElementById('userPhone2').focus();
    //     }
    // }
    


    
    	
    
    
    return (
        <article className="join">
            <p>회원가입</p>
            <ul className="terms_bx_list">

                <li className="terms_bx">
                    <span className="input_chk">
                        <input type="checkbox" id="termsService" name="termsService" className="chk" />
                        <label htmlFor="termsService">전체 동의<span className="terms_necessary"></span></label>
                    </span>
                    <span className="input_chk">
                        <input type="checkbox" id="termsService" name="termsService" className="chk" />
                        <label htmlFor="termsService">이용약관 동의<span className="terms_necessary">필수</span></label>
                    </span>
                    <div className="terms_box" id="divService">
                        <div className="article">
                            <h3 className="article__title">여러분을 환영합니다.</h3>
                            <p className="article__text">
                                서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
                                본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
                                이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며,
                                아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                            </p>
                            <p className="article__text">
                                네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로,
                                잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                            </p>
                        </div>
                        <div className="article">
                            <h3 className="article__title">다양한 네이버 서비스를 즐겨보세요.</h3>
                            <p className="article__text">
                                네이버는 <a href="https://www.naver.com/" target="_blank">www.naver.com</a>을 비롯한 네이버
                                도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색,
                                다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.<br />
                                여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며,
                                개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, <a href="https://help.naver.com/support/home.nhn"
                                    target="_blank">네이버 웹고객센터(이하
                                    ‘고객센터’)</a> 도움말 등에서 쉽게 확인하실 수 있습니다.
                            </p>
                            <p className="article__text">
                                네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다.
                                다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는
                                서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다.
                                자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
                            </p>
                            <p className="article__text">
                                네이버 서비스에는 기본적으로 본 약관이 적용됩니다만 네이버가 다양한 서비스를 제공하는 과정에서 부득이 본 약관 외 별도의 약관, 운영정책 등을 적용하는
                                경우(예, 네이버페이, V LIVE 등)가 있습니다.
                                그리고 네이버 계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가 정한 고유의 약관, 운영정책 등이 적용될 수
                                있습니다.
                                이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="terms_bx">
                    <span className="input_chk">
                        <input type="checkbox" id="termsEmail" name="termsEmail" value="Y" className="chk" />
                        <label htmlFor="termsEmail">정보 수신 동의<span className="terms_choice terms_no">(선택)</span></label>
                    </span>
                    <div className="terms_box" id="divService">
                        <div className="article">
                            <h3 className="article__title">여러분을 환영합니다.</h3>
                            <p className="article__text">
                                네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
                                본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와
                                이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며,
                                아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                            </p>
                            <p className="article__text">
                                네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로,
                                잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                            </p>
                        </div>
                        <div className="article">
                            <h3 className="article__title">다양한 네이버 서비스를 즐겨보세요.</h3>
                            <p className="article__text">
                                네이버는 <a href="https://www.naver.com/" target="_blank">www.naver.com</a>을 비롯한 네이버
                                도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색,
                                다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.<br />
                                여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며,
                                개별 서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, <a href="https://help.naver.com/support/home.nhn"
                                    target="_blank">네이버 웹고객센터(이하
                                    ‘고객센터’)</a> 도움말 등에서 쉽게 확인하실 수 있습니다.
                            </p>
                            <p className="article__text">
                                네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다.
                                다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는
                                서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다.
                                자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
                            </p>
                            <p className="article__text">
                                네이버 서비스에는 기본적으로 본 약관이 적용됩니다만 네이버가 다양한 서비스를 제공하는 과정에서 부득이 본 약관 외 별도의 약관, 운영정책 등을 적용하는
                                경우(예, 네이버페이, V LIVE 등)가 있습니다.
                                그리고 네이버 계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가 정한 고유의 약관, 운영정책 등이 적용될 수
                                있습니다.
                                이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>

            <hr />
            <div className="input_row">
                <input 
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="int" 
                type="text" 
                placeholder="이름" />
            </div>
            <div className="input_row">
                <input 
                id="userId"
                name="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="int" 
                type="text" 
                placeholder="아이디" />
            </div>
            <div className="input_row">
                <input 
                // id="userPw"
                name="userPw"
                value={userPw}
                onChange={(e) => setUserPw(e.target.value)}
                className="int" 
                type="password" 
                placeholder="비밀번호" />
            </div>
            <div className="input_row">
                <input 
                ref="userPw2"
                name="userPw2"
                value={userPw2}
                onChange={(e) => setUserPw2(e.target.value)}
                className="int" 
                type="password" 
                placeholder="비밀번호 확인"
                onBlur={matchPassword}
                />
            </div>
            <div className="input_row phone">
                <input 
                ref="userPhone1"
                name="userPhone1"
                value={userPhone1}
                onChange={(e) => setUserPhone1(e.target.value)}
                onKeyUp={nextPhoneNum}
                className="int" 
                type="text" 
                maxLength={3}
                placeholder="휴대폰번호 입력"/>-
                <input 
                ref="userPhone2"
                name="userPhone2"
                value={userPhone2}
                onChange={(e) => setUserPhone2(e.target.value)}
                className="int" 
                maxLength={4}
                type="text" />-
                <input 
                ref="userPhone3"
                name="userPhone3"
                value={userPhone3}
                onChange={(e) => setUserPhone3(e.target.value)}
                className="int" 
                maxLength={4}
                type="text" />
            </div>
            <div className="input_row email">
                <input 
                id="userEmail"
                name="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="int" 
                type="text" 
                placeholder="이메일 예) example@naver.com" 
                onBlur={checkEmail}/>
            </div>
            <hr />
            {/* 버튼 클릭 시 팝업 생성 */}
            
            <PopupPostCode />
            
            {/* <div className="input_row">
                <input 
                id="userAdress"
                name="userAdress"
                value={userAdress}
                onChange={(e) => setUserAdress(e.target.value)}
                className="int" 
                type="text" 
                placeholder="주소" />
            </div> */}
            {/* <div className="input_row">
                <input 
                id="txtContent"
                name="txtContent"
                value={*}
                onChange={(e) => *(e.target.value)}
                className="int" 
                type="text"
                 placeholder="상세주소" />
            </div> */}
            <button className="join_btn" type="button" onClick={submitJoin} >회원가입</button>
        </article>
    );
}

export default withRouter(Join);
