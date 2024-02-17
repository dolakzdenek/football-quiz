import { TouchableOpacity, View } from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
  createVariant,
} from '@shopify/restyle';

import Text from './Text';
import { Theme } from './theme';
import { MainText } from './MainText';

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  createVariant({ themeKey: 'buttonVariants' }),
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
};

const Button = ({ onPress, label, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <MainText variant="buttonLabel">{label}</MainText>
      </View>
    </TouchableOpacity>
  );
};

export { Button }