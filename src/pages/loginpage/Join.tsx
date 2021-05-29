import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';

import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

// import MaskedInput from 'react-text-mask';


// function TextMaskCustom(props: { [x: string]: any; inputRef: any; }) {
//     const { inputRef, ...other } = props;
  
//     return (
//       <MaskedInput
//         {...other}
//         ref={(ref: { inputElement: any; }) => {
//           inputRef(ref ? ref.inputElement : null);
//         }}
//         mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]}
//         placeholderChar={'\u2000'}
//         showMask
//       />
//     );
//   }

const Join = ({ history }) => {
    let [inputValue, setInputValue] = useState<any>('');

    useEffect(() => {
        if (inputValue.length === 10) {
          setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (inputValue.length === 13) {
          setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
      }, [inputValue]);


    // const regex = /^[0-9\b -]{0,13}$/;
    // if (regex.test(e.target.value)) {
    //   setInputValue(e.target.value);
    // }


    const handlePress = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
          setInputValue(e.target.value);
        }
      }


     // 핸드폰번호 유효성 검사
     const checkPhonenumber = (e) => {
        // '-' 입력 시
        var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        // 숫자만 입력시
        var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
        // 형식에 맞는 경우 true 리턴
        console.log('핸드폰번호 유효성 검사 :: ', regExp.test(e.target.value))
    }
 
    //비밀번호 유효성 검사
    const checkPassword = (e) => {
        //  8 ~ 10자 영문, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
        // 형식에 맞는 경우 true 리턴
        console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
    }
 
    // 이메일 유효성 검사
    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
    }


    function joinUser() {  

        history.push('/login');

    }






    // 다음주소 api
	// 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

  
   
  
    const postCodeStyle = {
      display: 'block',
      position: 'relative',
      top: '0%',
      width: '400px',
      height: '400px',
      padding: '7px',
    };

    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
        ...values,
        [event.target.name]: event.target.value,
        });
    };

    return (
        <article className="join">
            <p>회원가입</p>

            <form onSubmit={joinUser}>


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
                    <input className="int" type="text" placeholder="이름" />
                </div>
                <div className="input_row">
                    <input className="int" type="text" placeholder="닉네임" />
                </div>
                <div className="input_row">
                    <input className="int" type="text" placeholder="아이디" />
                </div>
                <div className="input_row">
                    <input className="int" type="password" placeholder="비밀번호" onBlur={checkPassword}/>
                </div>
                <div className="input_row">
                    <input className="int" type="password" placeholder="비밀번호 확인" />
                </div>
                {/* <div className="input_row">
                    <input className="int" type="text" maxLength="13" placeholder="전화번호" onBlur={checkPhonenumber} onChange={handlePress} value={inputValue}/>
                </div> */}
{/* 
                <FormControl>
                    <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                    <Input
                    value={values.textmask}
                    onChange={handleChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                    />
                </FormControl> */}


                <div className="email">
                    <input type="text" placeholder="이메일" onBlur={checkEmail}/> @ 
                    <select name="" id="">
                        <option value="">naver.com</option>
                        <option value="">google.com</option>
                    </select>
                    
                </div>
                <hr />

                {/* 버튼 클릭 시 팝업 생성 */}
                <button type='button' onClick={openPostCode}>우편번호 검색</button>
                {/* 팝업 생성 기준 div */}
                <div id='popupDom'>
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode onClose={closePostCode} />
                        </PopupDom>
                    )}
                    <button className="join_btn" type="submit" onClick={joinUser}>회원가입</button>
                </div>


            </form>
            
        </article>
    );
}

export default withRouter(Join);