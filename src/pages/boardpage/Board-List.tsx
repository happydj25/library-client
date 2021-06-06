import React, { useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import BoardWrit from './Board-Writ'
import Board from './Board'
import axios from 'axios';

const BoardList = () => {

    const [boardList , setBoardList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/api/select').then((response)=>{
            setBoardList(response.data)
        })
      },[]);

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

                    {boardList.slice(0).reverse().map((val:any)=> {
                            return (
                                <tr>
                                    <td>{val.board_no}</td>
                                    <td>
                                        <Link to={{pathname: `/boardview/${val.board_no}`, state: {val}}}>{val.board_title}</Link>
                                    </td>
                                    <td>
                                        {val.reg_dt}
                                    </td>
                                </tr>
                            );
                        })}

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

