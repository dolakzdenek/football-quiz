import React, { forwardRef } from "react";
import {
  ColorProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BorderProps,
  BackgroundColorProps,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { Theme } from ".restyle/theme";


const Input = (props: TextInputProps) => (
  <RNTextInput
    style={{
      backgroundColor: 'white',
      margin: 20,
      padding: 10,
      borderRadius: 10,
      width: '50%'
    }}
    {...props}
  />
);

export { Input }
