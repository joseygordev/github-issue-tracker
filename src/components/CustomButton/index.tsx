import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Colors from '../../constants/Colors';

import CustomText from '../CustomText';

import styles from './styles';

export default function CustomButton(props: TouchableOpacityProps & ButtonProps) {
  const { 
    style,
    type = 'default',
    text,
    disabled,
    leftIcon,
    rightIcon,
} = props;

  const buttonStyle = [
    styles.container,
    styles[(type + 'Button') as keyof ButtonStyle],
    disabled ? { borderColor: Colors.border } : {},
    style,
  ];

  const buttonTextStyle = [styles.defaultText, disabled ? { color: Colors.border } : {}];

  return (
    <TouchableOpacity {...props} style={buttonStyle}>
      {leftIcon}
      {Boolean(text) && <CustomText style={buttonTextStyle}>{text.toUpperCase()}</CustomText>}
      {rightIcon}
    </TouchableOpacity>
  );
}
export interface ButtonProps {
  text?: String;
  type?: 'primary' | 'secondary';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
interface ButtonStyle {
  primaryButton: object;
  secondaryButton: object;
}
