import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';

const Google = (props: { success: (arg0: any) => void; fail: (arg0: any) => void; }) => {
  const clientId = process.env.REACT_APP_GOOGLE || '';

  const success = (payload: any) => {
    props.success(payload);

  };

  const fail = (payload: any) => {
    props.fail(payload);
  };

  if (!clientId) return <> .env의 REACT_APP_GOOGLE을 확인해주세요. </>

  return ( <
    GoogleLogin clientId = {
      clientId
    }
    onSuccess = {
      success
    }
    onFailure = {
      fail
    }
    cookiePolicy = {
      'single_host_origin'
    }
    render = {
      renderProps => ( 
        <button 
          onClick = {renderProps.onClick}
          disabled = {renderProps.disabled} > Google Login 
        </button > 
      )
    }
    />
  );
};
Google.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Google;