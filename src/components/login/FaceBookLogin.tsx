import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import FacebookLogin from 'react-icons/lib/ti/social-facebook-circular';
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

const FaceBookLogin = (props:any) => {
    const { onLogin } = props;
    return (
        <div>
        {/* <FacebookLogin
          appId="2982476848741388"
          autoLoad={false}
          fields="name,first_name,last_name,email"
          callback={onLogin}
          render={(renderProps:any) => (
            <div onClick={renderProps.onClick}>facebook login</div>
          )}
        /> */}
          {/* <FacebookLogin
            appId="2982476848741388"
            autoLoad={true}
            fields="name,first_name,last_name,email"
            scope="public_profile,user_friends"
            callback={onLogin}
            icon="fa-facebook"
            render={(renderProps:any) => (
              <button onClick={renderProps.onClick}>This is my custom FB button</button>
            )} /> */}
      </div>
    )
  }

export default FaceBookLogin;