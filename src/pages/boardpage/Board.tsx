import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Board = ({ board, removeBoard}) => {



    return (
        // {renderBoardList}
        <tr>
            <td>{board.id}</td>
            <td>
                {/* <Link to={{pathname: `/boardview/${board.id}`, state: {board}}}>{board.title}</Link> */}
                <Link to={{pathname: `/boardview/${board.id}`, state: {board}}}>{board.title}</Link>

            </td>
            <td>
                {board.writDateTime}
            </td>
            {/* <td>
                <button onClick={() => removeBoard(board.id)}>삭제</button>
            </td> */}
        </tr>
    );
}

export default Board;