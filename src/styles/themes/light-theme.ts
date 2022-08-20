import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    purple: SimplePaletteColorOptions;
    blue: SimplePaletteColorOptions;
    default: {
      main: string,
      light: string;
    };
    secondaries: {
      magenta2: string;
      magenta3: string;
      magenta4: string;
      rosewood: string;
      beige: string;
    };
    neutrals: {
      disabled: string;
      white: string;
      alternative: string;
      session: string;
      outline: string;
    };
  }
  interface PaletteOptions {
    purple: SimplePaletteColorOptions;
    blue: SimplePaletteColorOptions;
    default: {
      main: string,
      light: string;
    };
    secondaries: {
      magenta2: string;
      magenta3: string;
      magenta4: string;
      rosewood: string;
      beige: string;
    };
    neutrals: {
      disabled: string;
      white: string;
      alternative: string;
      session: string;
      outline: string;
    };
  }
  interface TypographyVariants {
    bodyBig: React.CSSProperties;
    buttonSmall: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bodyBig?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyBig: true;
    buttonSmall: true;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    giant: true;
    xl: true;
  }
}

const theme = createTheme({
  spacing: 6,
  palette: {
    // secondary: undefined,
    background: {
      default: '#FEFBFE',
    },
    default: {
      main: '#000000',
      light: '#FAFBFD',
    },
    primary: {
      dark: '#73003B',
      main: '#ffe900',
      light: '#FFDDEE',
    },
    purple: {
      main: '#ECABFF',
      light: '#F9E6FF',
      dark: '#F9E6FF',
    },
    blue: {
      main: '#26BAC9',
      dark: '#1E747D',
      light: '#CCFAFF',
    },
    info: {
      dark: '#0D3C61',
      main: '#2196F3',
      light: '#E9F4FE',
    },
    warning: {
      dark: '#5F2B01',
      main: '#ED6C02',
      light: '#FDF0E6',
    },
    success: {
      dark: '#1E4620',
      main: '#4CAF50',
      light: '#EDF7ED',
    },
    error: {
      dark: '#D21B16',
      main: '#F44336',
      light: '#FEECEB',
    },
    text: {
      primary: '#24134A',
      secondary: '#4E4E71',
    },
    neutrals: {
      disabled: '#D6D6D6',
      white: '#FFFFFF',
      alternative: '',
      session: '#F6F7FC',
      outline: '#E2E8EE',
    },
    secondaries: {
      magenta2: '#E84892',
      magenta3: '#FF87D1',
      magenta4: '#FFBDE6',
      rosewood: '#F190B7',
      beige: '#FBD6D2',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontFamily: 'Montserrat',
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: '42px',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: '32px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '26px',
      letterSpacing: '-0.25px',
    },
    button: {
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '26px',
      letterSpacing: '-0.25px',
      textTransform: 'none',
    },
    buttonSmall: {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '0',
    },
    bodyBig: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '30px',
      letterSpacing: '0.15px',
    },
    body1: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '25px',
      letterSpacing: '0',
    },
    body2: {
      fontFamily: 'Roboto',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0',
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '0.1px',
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0',
    },
    overline: {
      fontFamily: 'Roboto',
      fontSize: '0.625rem',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '1.5px',
    },
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'giant',
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
      variants: [
        {
          props: { size: 'giant' },
          style: ({ theme: _theme }) => ({
            height: '56px',
            ..._theme.typography.button,
          }),
        },
        {
          props: { size: 'xl' },
          style: ({ theme: _theme }) => ({
            height: '48px',
            ..._theme.typography.button,
            fontSize: '0.875rem',
            fontWeight: 500,
          }),
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'linear-gradient(115.92deg, #FEFBFE 3.19%, #FFFFFF 30.35%, #FEFFF7 53.64%, #FEF8FB 72.58%, #FFF7FE 86.13%, #FDF4FF 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
});

export default theme;
