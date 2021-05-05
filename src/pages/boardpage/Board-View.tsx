import React, { useState } from 'react';
import {Link, useLocation, withRouter} from 'react-router-dom';

const BoardView = ({ history }) => {

    let boardData = useLocation<any>();
    let boardData1 = boardData.state.board;

    // 삭제할 글의 id
    let boardDeleteId = boardData1.id;


    const boardDelete = () => {
        let boardNum = JSON.parse(localStorage.getItem('board'));
        let index = -1;
        for ( var counter = 0; counter < boardNum.length; counter++) {
            if ( boardNum[ counter ].id == boardDeleteId ) {
                index = counter;
                boardNum.splice(index,1); 
                console.log(boardNum);
                localStorage.setItem("board", JSON.stringify(boardNum));
            }
        }
        history.push('/boardlist');
    }


    return (
        <div>
            <div>제목: {boardData1.title}</div>
            <div>작성시간: {boardData1.writDateTime}</div>
            <div>글내용: {boardData1.txtContent}</div>
            
            <div></div>
            <div className="btn_wrap">
                <Link to={{pathname: `/boardwrit/${boardData1.id}`, state: {boardData1}}}>수정</Link>
                <button type="button" onClick={boardDelete}>삭제</button>
                <Link to="/boardlist">목록으로</Link>
            </div>
        </div>
    );
}

export default withRouter(BoardView);