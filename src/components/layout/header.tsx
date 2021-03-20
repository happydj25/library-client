import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// class Header extends React.Component {
//     render() {        
//         return (
//             <div>
//                 {/* <Link to="/" ></Link> */}
//                 <Link to="/"></Link>
//                 <Link to="/home" >home</Link>
//             </div>

//         )
        
//     }
// }

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">교보문고</Link>
            </h1>
            <form>
                <div className="searcharea">
                    <input type="text" className="main_input" />
                    <input type="button" className="btn_search" value="검색" />
                </div>
            </form>
        </header>
    );
}


export default Header;
