import React from 'react';
import {Route} from 'react-router-dom';
import routes from '../../pages/page-route';

const Content = () => {
    return (
        <switch>
            {routes.map((route, index) => (
                <Route 
                    key={index} 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.component} 
                />
            ))}
        </switch>
    );
}
// class Content extends React.Component {
//     render() {
//         return (
//             <switch>
//                 {routes.map((route, index) => (
//                     <Route 
//                         key={index} 
//                         path={route.path} 
//                         exact={route.exact} 
//                         component={route.component} 
//                     />
//                 ))}
//             </switch>
//         )
//     }
// }

export default Content;
