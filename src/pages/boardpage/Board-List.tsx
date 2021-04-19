import React, {constructor, useEffect} from 'react';
import {Link} from 'react-router-dom';
import board from '../../json/board.json';

const BoardList = () => {


    return (
        <article className="board_list">
            <h3>게시판</h3>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <Link to="">gdgd</Link>
                        </td>
                        <td>user1</td>
                        <td>20210410</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/boardwrit">글쓰기</Link>
        </article>
    );
}

export default BoardList ;

function componentDidMount() {
    throw new Error('Function not implemented.');
}
