import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

const BoardView = () => {

    let boardData = useLocation<any>();

    let boardData1 = boardData.state.board;
    console.log(boardData);

    
    return (
        <div>
            <div>제목: {boardData1.title}</div>
            <div>작성시간: {boardData1.writDateTime}</div>
            <div>글내용: {boardData1.txtContent}</div>
            
            <div></div>
            <div className="btn_wrap">
                <button type="button">수정</button>
                <button type="button">삭제</button>
                <Link to="/boardlist">목록으로</Link>
            </div>
        </div>
    );
}

export default BoardView;