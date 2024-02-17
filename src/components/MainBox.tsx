import { createBox, createRestyleComponent, createVariant } from '@shopify/restyle';
import { Theme } from './restyle/theme';

const MainBox = createRestyleComponent([createVariant({ themeKey: 'boxVariants' })])

export { MainBox };