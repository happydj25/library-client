import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// const BoardWrit = ({ addBoard, Board }) => {
const BoardWrit = () => {
    // const BoardWrit = ({ Board }) => {
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

    
    var keys = Object.keys(localStorage);
    keys.forEach(key=>{
     var json_str =localStorage.getItem(key)
      try {
          var abc = JSON.parse(json_str);
          this.user = abc;
       } catch (e) {
       console.log(e)
      }
   })

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

            // let boardID:number = Object.keys(a).length;

            const kkk:any = {
                id: new Date().getTime() + new Date().getMilliseconds(),
                title :document.getElementById('title').value,
                txtContent :document.getElementById('txtContent').value,
                writDateTime: new Date().toLocaleString() ,
            };

            let a = [];
            a = JSON.parse(localStorage.getItem('board')) || [];
            a.push(kkk);

            localStorage.setItem('board', JSON.stringify(a));



        
        // localStorage.setItem('board', JSON.stringify([kkk]));
          

        // if (validateForm()) {

        //     localStorage.setItem("Board", JSON.stringify({ '글제목': boardTitle, '글내용': boardYear }));
        //     // addBoard({
        //     //     id: Date.now(),
        //     //     title: boardTitle,
        //     //     year: boardYear,
        //     // });
        //     resetErrors();
        //     resetForm();
        // }

        
    };
    

        
    return (
        <article className="board_list">
            <h3>게시판 글쓰기</h3>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    id="title"
                    // value={boardTitle}
                    placeholder="글제목"
                    onChange={e => setBoardTitle(e.target.value)}
                ></input>
                <br />
                <div style={{color: 'red'}}>{titleError}</div>

                <textarea 
                cols="30" 
                rows="10"
                id="txtContent"
                // value={boardYear}
                placeholder="글내용"
                onChange={e => setBoardYear(e.target.value)}
                >
                </textarea>                
                <br />
                <div style={{color: 'red'}}>{yearError}</div>
                <button type="submit">글쓰기</button>
            </form>
        </article>
    );
}

export default BoardWrit;