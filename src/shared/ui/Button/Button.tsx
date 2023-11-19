import { FC } from 'react';

import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary'
}

export enum ButtonSize {
  M = 'M',
  L = 'L'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme = ButtonTheme.PRIMARY,
    size = theme === ButtonTheme.CLEAR ? '' : ButtonSize.M, ...otherProps
  } = props;

  return (
    <button className={classNames(styles.Button, {}, [className, styles[theme], styles[size]])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
