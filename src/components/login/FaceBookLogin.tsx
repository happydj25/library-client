
import React from 'react';
import ReactDOM from 'react-dom';
// import FacebookLogin from 'react-facebook-login';
 

const FaceBookLogin = (props: { onLogin: any; }) => {
    const { onLogin } = props;
    return (
        <div>
        {/* <FacebookLogin
          appId="39...014"
          autoLoad={false}
          fields="name,first_name,last_name,email"
          callback={onLogin}
          render={(renderProps: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; }) => (
            <div onClick={renderProps.onClick}>facebook</div>
          )}
        /> */}
      </div>
    )
  };

export default FaceBookLogin;
