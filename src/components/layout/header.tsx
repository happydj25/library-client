import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';


const Header = () => {

    // let [searchKeyWord, setSearchKeyWord] = useState<any>('');
    // const sendTextValue = () => {
    //     props.getTextValue('부모로 값 보내기');
    // }

    // const sendTextValue = () => {
    //     props.getTextValue('자식에서 부모로 값 보내기!'); 
    // }

    return (
        <header>
            <h1>
                <Link to="/">교보문고</Link>
            </h1>
            <form>
                <div className="searcharea">
                    <input 
                    type="text" 
                    className="main_input" 
                    placeholder="검색어를 입력해주세요"
                    // value={props.getTextValue}
                    // onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type="button"  className="btn_search" value="검색" />
                    {/* onClick={sendTextValue} */}
                </div>
            </form>
        </header>
    );
}


export default Header;
