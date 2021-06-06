import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// const Board = ({board, id} : {board:any, id:any}) => {
    const Board = ({val} : {val:any}) => {


        console.log(JSON.stringify(val.board_no));
    return (
        <tr>
            {/* {console.log(val.board_no)} */}
            {/* <td>{val.board_no}</td>
            <td>
                <Link to={{pathname: `/boardview/${val.board_no}`, state: {val}}}>{val.board_title}</Link>

            </td>
            <td>
                {val.reg_dt}
            </td> */}
        </tr>
    );
}

export default Board;