import { useSelector, useStore } from 'react-redux';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from '../model/slice/loginSlice';
import { getLoginState } from '../model/loginSelector';
import { loginByUsername } from '../model/services/loginByUsername';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
  className?: string;
  onLogin: () => void
}

const LoginForm = ({ className, onLogin }: LoginFormProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // сделать это по кнопке войти
    store.reducerManager.add('loginForm', loginReducer);
    dispatch({ type: '' });
    return () => {
      store.reducerManager.remove('loginForm');
      dispatch({ type: '' });
    };
  }, []);

  const loginForm = useSelector(getLoginState);

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, []);

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username: loginForm.username, password: loginForm.password, onLogin }));
  }, [loginForm]);

  if (!loginForm) return null;

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      {loginForm?.error && <div>Произошка ошибка, попробуйте позже</div>}
      <Input autoFocus className={styles.input} value={loginForm?.username} onChange={onChangeUsername} type="text" />
      <Input className={styles.input} value={loginForm?.password} onChange={onChangePassword} type="text" />
      <Button disabled={loginForm?.isLoading} onClick={onLoginClick}>
        Войти
      </Button>
    </div>
  );
};

export default LoginForm;
