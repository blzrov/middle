import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
       {authData !== undefined && <> {authData?.id
         ? (
          <div>
            <div>{authData.username}</div>
            <AppLink onClick={() => dispatch(userActions.logout())} theme={AppLinkTheme.LINK} className={styles.mainLink} to="/">
              Выйти
            </AppLink>
          </div>
           )
         : (
          <AppLink onClick={() => setIsAuthModal(true)} theme={AppLinkTheme.LINK} className={styles.mainLink} to="/">
            Войти
          </AppLink>
           )}</>}
        <Suspense fallback={<></>}>
          {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
