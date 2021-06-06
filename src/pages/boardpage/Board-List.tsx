import React, { useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import BoardWrit from './Board-Writ'
import Board from './Board'
import axios from 'axios';

const BoardList = () => {

    // const localBoard = JSON.parse(localStorage.getItem('board') || '{}');
    // const [boards, setBoards] = useState(localBoard);

    // const renderBoard = boards.length ? boards.map((board: { id: string | number | null | undefined; }) => {
    //     return (
    //     <Board 
    //         board={board} 
    //         key={board.id}
    //     />
    //     );
        
    // }) : <td colSpan={4}>등록된 게시글이 없습니다.</td>;



    // await 를 사용하기 위해 async선언
    // useEffect(async() => {
    //     try{
    //     // 데이터를 받아오는 동안 시간이 소요됨으로 await 로 대기
    //     const res = await axios.get('/')
    //     // 받아온 데이터로 다음 작업을 진행하기 위해 await 로 대기
    //     // 받아온 데이터를 map 해주어 rowData 별로 _inputData 선언
    //     const _inputData = await res.data.map((rowData) => ({
    //         board_no: rowData.board_no,
    //         user_id: rowData.user_id,
    //         user_name: rowData.user_name,
    //         board_title: rowData.board_title,
    //         board_text: rowData.board_text,
    //         reg_dt: rowData.reg_dt
    //         })
    //     )
    //     // 선언된 _inputData 를 최초 선언한 inputData 에 concat 으로 추가
    //     setInputData(inputData.concat(_inputData))
    //     } catch(e){
    //     console.error(e.message)
    //     }
    // },[])

    const [inputData, setInputData] = useState([{
        board_no: '',
        user_id: '',
        user_name: '',
        board_title: '',
        board_text: '',
        reg_dt: ''
    }])

    console.log('App :: inputData :: ', inputData)


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
                      {/* {renderBoard}   */}
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

