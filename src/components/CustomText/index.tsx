import React from 'react';
import { Text as DefaultText } from 'react-native';

import { useThemeColor } from '../../hooks/useThemeColor';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];

export default function CustomText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style, { fontFamily: 'space-mono' }]} {...otherProps} />;
}