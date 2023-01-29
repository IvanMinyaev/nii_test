//ui
import styles from './Typography.module.scss';

export type TypographyColors =
  | 'primary'
  | 'gray'
  | 'white'

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  font: 'PoppinsMedium' | 'RobotoItalic' | 'RobotoMedium' | 'RobotoMediumItalic';
  size: 's' | 'm' | 'l';
  fontWeight?: 400 | 600;
  customLineHeight?: number;
  color?: TypographyColors;
  upperCase?: boolean;
  vMargin?: number;

};

export const Typography = ({
  size = 'm',
  vMargin,
  children,
  color = 'primary',
  upperCase = false,
  className,
  font = 'RobotoMedium',
  fontWeight = 400,
  customLineHeight,
}: TypographyProps): JSX.Element => {

  const calcSize = (s: string): number => {
    switch (s) {
      case 's':
        return 14;
      case 'm':
        return 24;
      case 'l':
        return 40;
      default:
        return 24;
    }
  };

  const calcLineHeight = (s: string): string => {
    switch (s) {
      case 's':
        return '22px';
      case 'm':
      default:
        return '22px';
    }
  };

  const getColor = (color: string) => {
    switch (color) {
      case 'primary':
        return styles.primary;
      case 'gray':
        return styles.gray;
      case 'white':
        return styles.white;
      default:
        return styles.primary;
    }
  };


  return (
    <p
    style={{
      marginTop: vMargin,
      marginBottom: vMargin,
      fontSize: calcSize(size),
      textTransform: upperCase ? 'uppercase' : 'none',
      fontFamily: font,
      lineHeight: customLineHeight
        ? customLineHeight + 'px'
        : calcLineHeight(size),
      fontWeight,
    }}
    className={`${getColor(color)} ${className} text-wrap`}
  >
    {children}
  </p>
  );
};

