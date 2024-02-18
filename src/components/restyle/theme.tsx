import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    textColor: palette.white,
    mainBackground: palette.greenDark,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      textAlign: 'center',
      color: 'textColor',
      padding: 'm'
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    buttonLabel: {
      fontSize: 16,
      textAlign: 'center',
      color: 'textColor',
    },
    question: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'textColor',
      padding: 'm'
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
  boxVariants: {
    defaults: {
      flex: 1,
    //alignItems: 'center',
      backgroundColor: 'mainBackground',
    },
    main: {
      padding: 'm',
      backgroundColor: 'cardPrimaryBackground',
      borderRadius: 'm',
    }
  },
  inputVariants: {
    defaults: {
      backgroundColor: 'cardPrimaryBackground',
      margin: 'm',
      padding: 's',
      borderRadius: 10,
    }
  },
  buttonVariants: {
    defaults: {
      backgroundColor: 'cardPrimaryBackground',
      padding: 'm',
      margin: 'm',
      borderRadius: 10,
    }
  }
});

export type Theme = typeof theme;
export { theme };