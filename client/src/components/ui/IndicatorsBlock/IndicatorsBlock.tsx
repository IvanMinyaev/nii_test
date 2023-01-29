
//ui
import styles from './IndicatorsBlock.module.scss';

type IndicatorsBlockTypes = {
  children: React.ReactNode;
  placeholder: string;
};

export const IndicatorsBlock = ({ placeholder }: IndicatorsBlockTypes): JSX.Element => {

  return (
    <div className={styles.main}>
      <p>
        {placeholder}
      </p>
    </div>
  );
};
