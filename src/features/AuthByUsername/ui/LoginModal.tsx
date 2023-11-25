import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from './LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;

}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm onLogin={onClose}/>
    </Modal>
  );
};

export default LoginModal;
