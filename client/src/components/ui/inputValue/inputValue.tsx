import { useMemo } from 'react';
import { useField } from 'formik';

//ui
import styles from './inputValue.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


type InputValueTypes = {
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  modifiedClassName?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  value?: string;
};

export const InputValue = ({
  name,
  value,
  placeholder,
  type,
  disabled,
  fullWidth,
  onChange,
}: InputValueTypes) => {

  const [field, { error, touched }] = useField<string>(name);


  const isInvalid = useMemo(() => {
    return Boolean(error) && touched;
  }, [error, touched]); 

  return (
    <div
      className={cx('input', {
        input_invalid: isInvalid,
        input_disabled: disabled,
        input_fullwidth: fullWidth,
      })}
    >
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {isInvalid && <div className={cx('input__error')}>{error}</div>}
    </div>
  );
};