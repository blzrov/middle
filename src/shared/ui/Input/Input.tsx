import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type InputBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends InputBaseProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const { className, children, value, onChange, ...otherProps } = props;

  return (
    <input
      className={classNames(styles.Input, {}, [className])}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...otherProps}
    />
  );
};

export default Input;
