import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import GoogleLogin from 'react-google-login';

const SocialLoginGoogle = (props:any) => {
  const { onLoginGoogle } = props;
  return (
    <div className={('login')}>
        구글로그인
    {/* <div> */}
      <GoogleLogin
         clientId='333939784079-eopm9kcvq2ru3hksjbic8n63duucft2e.apps.googleusercontent.com'
         render={(props: any) => (
           <div onClick={props.onClick} />
         )}
         onSuccess={result => onLoginGoogle(result)}
         onFailure={result => console.log(result)}
         cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default SocialLoginGoogle;
