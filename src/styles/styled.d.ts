import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;
    mediaSizes: {
      tablet: number;
      desktop: number;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      white: string;
      black: string;
    };
  }
}
