import { FC, ReactNode } from 'react';

import styles from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void
}

const Button: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, ...otherProps } = props;
  if (!isOpen) return <></>;

  return (
    <div className={classNames(styles.Modal, {}, [className])} {...otherProps}>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
};

export default Button;
