import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="myinfo_update">
                <div className="confirm_pw">
                    <h3>비밀번호 확인</h3>
                    본인 확인을 위해 사용하시는 비밀번호를 입력해 주세요.<br />
                    <input type="password" name="" id="" placeholder="비밀번호" />
                    <input type="button" value="확인" />
                </div>
                <div className="hidden">
                     <table>
                        <tr>
                            <th>이름</th>
                            <td>윤동주</td>
                        </tr>
                        <tr>
                            <th>닉네임 변경가능</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>asdw64512</td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td><input type="password" name="" id="" /></td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인</th>
                            <td><input type="password" name="" id="" /></td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input type="text" />
                                <input type="text" />
                            </td>
                        </tr>
                    </table>
                    <div className="btn_wrap">
                        <Link to="/">변경하기</Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Nav;
