import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

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
        <Suspense fallback={<div>Загрузка...</div>}>
          {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
