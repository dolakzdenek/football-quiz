import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from './theme';

type Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>;
const Card = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: 'cardVariants' }),
]);

export { Card };