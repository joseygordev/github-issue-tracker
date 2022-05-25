import React from 'react';
import CustomText from './index';
import { create } from 'react-test-renderer';
import Colors from '../../constants/Colors';

describe('CustomText', () => {
  it('it renders text correctly', async () => {
    const text = 'Mock Input';
  
    const tree = create(<CustomText>{text}</CustomText>);
  
    const textComponent = tree.root.findByProps({ testID: 'textValue' }).props;
  
    expect(textComponent.children).toEqual(text);
  });
  
  it('it renders text with light color', async () => {
    const text = 'Mock Input';
  
    const tree = create(<CustomText lightColor={Colors.blue}>{text}</CustomText>);
  
    const textComponent = tree.root.findByProps({ testID: 'textValue' }).props;
  
    expect(textComponent.style[0].color).toBe(Colors.blue);
  });
});
