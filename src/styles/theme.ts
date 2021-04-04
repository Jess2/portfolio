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
};
const theme: DefaultTheme = {
  basicWidth: '360px',
  colors,
  mediaSizes,
  media,
};

export { theme };
