import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink onClick={() => setIsAuthModal(true)} theme={AppLinkTheme.LINK} className={styles.mainLink} to="/">
          Войти
        </AppLink>
        <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
