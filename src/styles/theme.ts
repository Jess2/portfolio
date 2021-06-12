import { DefaultTheme } from 'styled-components';

const mediaSizes = {
  tablet: 768,
  desktop: 1240,
};

const media = {
  mobile: `@media only screen and (max-width: ${mediaSizes.tablet}px)`, // 768 이하
  tablet: `@media only screen and (min-width: ${mediaSizes.tablet}px) and (max-width: ${mediaSizes.desktop}px)`, // 768 ~ 1240
  desktop: `@media only screen and (min-width: ${mediaSizes.desktop}px)`, // 1240 이상
};

const colors = {
  white: '#ffffff',
  black: '#000000',
  night: '#0c1a2f',
  gray50: '#f8f9fa',
  gray60: '#f5f6f7',
  gray80: '#f1f3f5',
  gray100: '#e9ecef',
  gray200: '#dee2e6',
  gray300: '#ced4da',
  gray400: '#adb5bd',
  gray500: '#848c94',
  gray600: '#666d75',
  gray700: '#495056',
  gray800: '#343a40',
  gray900: '#212529',
};
const theme: DefaultTheme = {
  basicWidth: '360px',
  colors,
  mediaSizes,
  media,
};

export { theme };
