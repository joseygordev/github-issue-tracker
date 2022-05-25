import React from 'react';
import { View as DefaultView } from 'react-native';

import { useThemeColor } from '../../hooks/useThemeColor';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewProps = ThemeProps & DefaultView['props'];

export default function CustomView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView testID='customView' style={[{ backgroundColor }, style]} {...otherProps} />;
}
