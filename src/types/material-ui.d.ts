import { createTheme } from '@material-ui/core/styles';

declare module "@material-ui/core/styles/createTheme" {
  interface CustomOptions {
    colors: {
      default: string;
    };
  }

  interface Custom {
    colors: {
      default: string;
    };
  }

  interface ThemeOptions {
    custom?: CustomOptions;
  }

  interface Theme {
    custom: Custom;
  }
}
