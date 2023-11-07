import { FC } from 'react';

import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ButtonTheme.PRIMARY, ...otherProps } = props;

  return (
    <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
