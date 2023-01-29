import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type ButtonProps = {
  label: string;
  type?: 'submit' | 'reset';
  disabled?: boolean;
  color?: 'primary' | 'clear';
  clicked?: () => void;
  width?: number;
  fullWidth?: boolean;
};

export const Button = ({
  label,
  type,
  disabled,
  color,
  clicked,
  width,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      type={type ?? 'submit'}
      className={cx('button', {
        //  colors settings
        button_primary: color === 'primary',
        button_clear: color === 'clear',
        //  display settings
        button_inactive: disabled,
        //  positioning settings
        button_fullWidth: !width && fullWidth,
      })}
      onClick={clicked}
      disabled={disabled}
      style={{ width }}
    >
      {label && label}
    </button>
  );
};