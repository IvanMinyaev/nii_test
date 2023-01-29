import classNames from 'classnames/bind';

import styles from './Box.module.scss';
const cx = classNames.bind(styles);

type BoxProps = {
  flex?: boolean;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  children?: JSX.Element | JSX.Element[];
};

export const Box = ({
  children,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  flex,
}: BoxProps): JSX.Element => {
  return (
    <div
      style={{ margin: `${mt}px ${mr}px ${mb}px ${ml}px` }}
      className={cx('box', {
        box__flex: flex,
      })}
    >
      {children}
    </div>
  );
};
