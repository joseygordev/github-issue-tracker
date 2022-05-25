import React from 'react';
import CustomView from './index';
import CustomText from '../CustomText';
import { create } from 'react-test-renderer';

describe('CustomView', () => {
  it('it renders CustomText correctly', async () => {
    const content = 'Custom View';
  
    const tree = create(<CustomView><CustomText>{content}</CustomText></CustomView>);
  
    const textComponent = tree.root.findByProps({ testID: 'customView' }).props;
  
    expect(textComponent.children).toEqual(<CustomText>{content}</CustomText>);
  });
});
