import * as React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import Colors from '../../constants/Colors';

import CustomText from '../CustomText';

import styles from './styles';

export default function CustomTextInput(props: StyledTextInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  const { name, style } = props;

  return (
    <View style={styles.wrapper}>
      <View pointerEvents="none" style={[styles.row, { zIndex: 1 }]}>
        <View style={styles.overlappingWrapper}>
          <CustomText testID="inputName" style={styles.overlappingText}>{name}</CustomText>
        </View>
      </View>
      <TextInput
        placeholderTextColor={Colors.border}
        {...props}
        autoCapitalize="none"
        style={[styles.input, { borderColor: isFocused ? Colors.blue : Colors.border }, style]}
        returnKeyType="done"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

export interface StyledTextInputProps extends TextInputProps {
  name: string;
  initialValue?: string;
}
