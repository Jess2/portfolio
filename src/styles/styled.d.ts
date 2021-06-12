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
      night: string;
      gray50: string;
      gray60: string;
      gray80: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
    };
  }
}
