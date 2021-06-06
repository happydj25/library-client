import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useLocation, withRouter} from 'react-router-dom';

const BoardView = ({history} : {history:any}) => {

    let boardData = useLocation<any>();
    let data = boardData.state.val;


    // console.log('boardData :'+JSON.stringify(boardData));
    console.log(data);

    // 삭제할 글의 id 보내기
    const boardDelete = (id:any) => {
        axios.delete(`http://localhost:4000/api/delete/${id}`);
        history.push('/boardlist');
    }


    // const [boardList , setBoardList] = useState([]);

    // useEffect(()=>{
    //     axios.get('http://localhost:4000/api/select').then((response)=>{
    //         setBoardList(response.data)
    //     })
    //   },[]);

    // 글 삭제



    return (
        <div>
            <div>제목: {data.board_title}</div>
            <div>작성시간: {data.reg_dt}</div>
            <div>작성자: {data.user_name}({data.user_id})</div>
            <div>글내용: {data.board_text}</div>
            
            <div></div>
            <div className="btn_wrap">
                <Link to={{pathname: `/boardmodifiy/${data.board_no}`, state: {data}}}>수정</Link>
                <button type="button" onClick={() => {boardDelete(data.board_no)}}>삭제</button>
                <Link to="/boardlist">목록으로</Link>
            </div>
        </div>
    );
}

export default withRouter(BoardView);