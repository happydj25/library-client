import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const BoardWrit = ({ addBoard, Board }) => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardYear, setBoardYear] = useState('');
    const [titleError, seTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setBoardTitle('');
        setBoardYear('');
    };

    const validateForm = () => {
        resetErrors();
        let validated = true;
        if (!boardTitle) {
            seTitleError('글제목을 넣어주세요');
            validated = false;
        }
        if (!boardYear) {
            setYearError('글내용을 넣어주세요');
            validated = false;
        }
        
        return validated;
    };

    const resetErrors = () => {
        seTitleError('');
        setYearError('');
    };

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (validateForm()) {
            addBoard({
                id: Date.now(),
                title: boardTitle,
                year: boardYear,
            });
            resetErrors();
            resetForm();
        }
    };
        
    return (
        <article className="board_list">
            <h3>게시판 글쓰기</h3>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    value={boardTitle}
                    placeholder="글제목"
                    onChange={e => setBoardTitle(e.target.value)}
                ></input>
                <br />
                <div style={{color: 'red'}}>{titleError}</div>

                <textarea 
                cols="30" 
                rows="10"
                value={boardYear}
                placeholder="글내용"
                onChange={e => setBoardYear(e.target.value)}
                >
                </textarea>
                {/* <input 
                    type="number" 
                    value={boardYear}
                    placeholder="글내용"
                    onChange={e => setBoardYear(e.target.value)}
                ></input> */}
                <br />
                <div style={{color: 'red'}}>{yearError}</div>
                <button type="submit">글쓰기</button>
            </form>
        </article>
    );
}

export default BoardWrit;