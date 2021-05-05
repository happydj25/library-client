import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Board = ({ board,id }) => {



    return (
        <tr id={id}>
            <td>{board.id}</td>
            <td>
                <Link to={{pathname: `/boardview/${board.id}`, state: {board}}}>{board.title}</Link>

            </td>
            <td>
                {board.writDateTime}
            </td>
        </tr>
    );
}

export default Board;