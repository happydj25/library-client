import React, { useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import BoardWrit from './Board-Writ'
import Board from './Board'

const BoardList = () => {

// 게시글 만들기
// 1. 게시글쓰기input에 내용 입력
// 2. 작성완료 누르면 게시글 내용을 배열에 저장
// (글ID, 글 비밀번호, 글제목, 글내용, 작성시간, 조회수)
// 3. 글 리스트는 배열의 순서대로 내용 불러온다

    // const [boards, setBoards] = useState<any>([]);
    // const localBoard:any = JSON.parse(localStorage.getItem('board')) || {};
    const localBoard:any = localStorage.getItem('board') || {};
    // const [boards, setBoards] = useState(localBoard);

    const renderBoard = localBoard.length ? localBoard.map((localBoard: { localBoard: any; id: any; }) => {
        return (
        <Board 
            board={localBoard} 
            id={localBoard.id}
        />
        );
        
    }) : <td colSpan={4}>등록된 게시글이 없습니다.</td>;


    return (
        <article className="board_list">
            
            <h3>게시판</h3>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                      {renderBoard}  
                </tbody>
            </table>
            <div className="btn_wrap">
                <Link to="/boardwrit">글쓰기</Link>
            </div>
                        
        </article>
    );
}

export default BoardList ;

function componentDidMount() {
    throw new Error('Function not implemented.');
}
function useLocalStorage(): [any, any] {
    throw new Error('Function not implemented.');
}

