import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.LINK} className={styles.mainLink} to="/">
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.LINK} to="/about">
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
