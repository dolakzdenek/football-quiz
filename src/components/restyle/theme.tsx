import { createTheme } from '@shopify/restyle';
import { adjust, invertColor } from '../../helper/generalHelper';



const palette = {
  primary: '#123888',
  secondary: '#0ECD9D',
  green: '#0ECD9D',
};

let colorSet = {
  mainBackground: adjust(palette.primary, -15),
  cardPrimaryBackground: adjust(palette.secondary, 20),
  correctAnswer: adjust(palette.green, 0),
};

colorSet.cardTextColor = invertColor(colorSet.cardPrimaryBackground, true);
colorSet.mainTextColor = invertColor(colorSet.mainBackground, true);
colorSet.selected = adjust(colorSet.cardPrimaryBackground, 35);





const theme = createTheme({
  colors: colorSet,
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
      color: 'mainTextColor',
      padding: 'm'
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'mainTextColor',

    },
    buttonLabel: {
      fontSize: 16,
      textAlign: 'center',
      color: 'cardTextColor',
    },
    question: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'mainTextColor',
      padding: 'm'
    },
    defaults: {
      color: 'mainTextColor',

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