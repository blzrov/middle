import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div
      className={classNames(styles.LoginForm, {}, [className])}
    >
      <Input autoFocus className={styles.input} type='text'/> <Input className={styles.input} type='text'/>
      <Button>Войти</Button>
    </div>
  );
};

export default LoginForm;
