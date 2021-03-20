import React from 'react';
import {Route, Switch} from 'react-router-dom';
import router from './../../config/page-route';
import routes from './../../config/page-route';

class Content extends React.Component {
    render() {
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
        )
    }
}

export default Content;
