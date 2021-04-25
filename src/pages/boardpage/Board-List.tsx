import React, {constructor, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import BoardWrit from './Board-Writ'
import Board from './Board'

const BoardList = () => {

// 게시글 만들기
// 1. 게시글쓰기input에 내용 입력
// 2. 작성완료 누르면 게시글 내용을 배열에 저장
// (글ID, 글 비밀번호, 글제목, 글내용, 작성시간, 조회수)
// 3. 글 리스트는 배열의 순서대로 내용 불러온다

    const [boards, setBoards] = useState<any>([]);

    const removeBoard = (id:any) => {
        setBoards(boards.filter(board => {
        return board.id !== id;
        }))
    };

    const renderBoard = boards.length ? boards.map((board: { id: React.Key | null | undefined; }) => {
        return (
        <Board 
            board={board} 
            key={board.id}
            removeBoard={removeBoard}
        />
        );
    }) : <td colSpan="4">등록된 게시글이 없습니다.</td>;

    const addBoard = (board: any) => {
        setBoards([
        // 기존에 있는 데이터들을 유지하면서 값 추가 [구조분해할당]
        ...boards,
        board
        ]);
    };


    return (
        <article className="board_list">
            
            <h3>게시판</h3>
            <BoardWrit  addBoard={addBoard}/>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        {/* <th>작성일</th> */}
                    </tr>
                </thead>
                <tbody>
                      {renderBoard}  
                </tbody>
            </table>
            {/* <Link to="/boardwrit">글쓰기</Link> */}
        </article>
    );
}

export default BoardList ;

function componentDidMount() {
    throw new Error('Function not implemented.');
}
