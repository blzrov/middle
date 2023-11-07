import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
  LINK = 'link',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme = AppLinkTheme.LINK, ...otherProps } = props;

  return (
    <Link className={classNames(styles.AppLink, {}, [className, styles[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
