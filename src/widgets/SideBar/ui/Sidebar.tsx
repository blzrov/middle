import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import Button, { ButtonSize } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
     <div className={styles.menu}>
     <AppLink className={styles.menu_item} theme={AppLinkTheme.LINK} to={RoutePath.main}>
        {collapsed ? '1' : 'Main'}
      </AppLink>
      <AppLink className={styles.menu_item} theme={AppLinkTheme.LINK} to={RoutePath.about}>
        {collapsed ? '2' : 'AboutPage'}
      </AppLink>
      <AppLink className={styles.menu_item} theme={AppLinkTheme.LINK} to={RoutePath.profile}>
        {collapsed ? '3' : 'Профиль'}
      </AppLink>
     </div>
      <Button className={styles.collapseBtn} size={ButtonSize.L} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
