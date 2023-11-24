import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;

}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  const loginForm = useSelector(getUserAuthData);
  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={!loginForm?.id && isOpen}
      onClose={onClose}
    >
      <LoginForm/>
    </Modal>
  );
};

export default LoginModal;
