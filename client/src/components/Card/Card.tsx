
//ui
import { useState } from 'react';
import { Typography } from '../ui/Typography/Typography';
import styles from './Card.module.scss';

type CardProps = {
  title: string;
  picture_path?: string;
  active?:boolean;
};

export const Card = ({
  title,
  picture_path,
  active
}: CardProps): JSX.Element => {

  return (
    <div className={!active ? styles.wrapper : styles.wrapper__active}>
      <div className={styles.wrapper__typography}>
        <Typography color={!active ? "primary" : "white"} size="l" fontWeight={600} font={'RobotoMedium'} customLineHeight={24}> 
        {title}
        </Typography>
      </div>
      <div className={styles.wrapper__logo}>
        <img src={picture_path} alt='image'></img>
      </div>
    </div>
  );
};
