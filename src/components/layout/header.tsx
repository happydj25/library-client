import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {        
        return (
            <div>
                {/* <Link to="/" ></Link> */}
                <Link to="/" ></Link>
                <Link to="/home" >home</Link>
            </div>

        )
        
    }
}

export default Header;
