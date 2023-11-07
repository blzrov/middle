import { type FC } from 'react';

import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = props;

  return (
    <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
