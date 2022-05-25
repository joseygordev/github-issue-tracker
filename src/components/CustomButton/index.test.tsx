import React from 'react';
import CustomButton from './index';
import { create } from 'react-test-renderer';
import Colors from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

describe('CustomButton', () => {
  it('it renders button correctly', async () => {
    const tree = create(<CustomButton testID="viewIssuesButton" type="primary" text="Button" onPress={() => {}} />);
  
    const textComponent = tree.root.findByProps({ testID: 'viewIssuesButton' }).props;
  
    expect(textComponent.type).toEqual('primary');
  });
  
  it('it renders button disabled', async () => {
    const tree = create(<CustomButton testID="viewIssuesButton" type="primary" text="Button" disabled onPress={() => {}} />);
  
    const textComponent = tree.root.findByProps({ testID: 'viewIssuesButton' }).props;
  
    expect(textComponent.disabled).toBeTruthy();
  });
  
  it('it renders button onPress', async () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('Link on press invoked');
    
    const tree = create(<CustomButton testID="viewIssuesButton" type="primary" text="Button" onPress={onPressEvent} />);
    tree.root.findByProps({ testID: 'viewIssuesButton' }).props.onPress();
    
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
  
  it('it renders button with leftIcon', async () => {
    const bookmarkIcon = <AntDesign size={20} color={Colors.blue} name={'star'} />;
    const tree = create(<CustomButton leftIcon={bookmarkIcon} testID="viewIssuesButton" type="primary" text="Button" onPress={() => {}} />).toJSON();
  
    expect(tree).toMatchSnapshot();
  });

  it('it renders button with rightIcon', async () => {
    const bookmarkIcon = <AntDesign size={20} color={Colors.blue} name={'star'} />;
    const tree = create(<CustomButton rightIcon={bookmarkIcon} testID="viewIssuesButton" type="primary" text="Button" onPress={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
