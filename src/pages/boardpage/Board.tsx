import React, {useState, useEffect} from 'react';

const Board = ({ board, removeBoard}) => {
    return (
        <tr>
            <td>{board.id}</td>
            <td>{board.title}</td>
            <td>
                <button onClick={() => removeBoard(board.id)}>삭제</button>
            </td>
        </tr>
    );
}

export default Board;