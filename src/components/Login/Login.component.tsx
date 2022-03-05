import {useLogin} from './Login.hook';
import GoogleButton from 'react-google-button';
import {useStyletron} from 'baseui';

export const Login = () => {
  const {loginWithGoogleHandler} = useLogin();
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <GoogleButton
        onClick={loginWithGoogleHandler}
        type={theme.name === 'light-theme' ? 'light' : 'dark'}
      >
        Login with Google
      </GoogleButton>
    </div>
  );
};
