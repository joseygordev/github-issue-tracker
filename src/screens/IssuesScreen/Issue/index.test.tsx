import React from 'react';
import { create } from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';

import mockIssues from '../../../data/mocks/issues';
import Issue from './index';

describe('Issue', () => {
  const issue = mockIssues[0];
  const createFreshTree = () =>
      create(
        <NavigationContainer>
          <Issue navigation={{}} issue={issue} />
        </NavigationContainer>
      );
  const treeComponent = createFreshTree();

  it('it renders Issue correctly', async () => {
    expect(treeComponent).toMatchSnapshot();
  });
  
  it('it renders Issue with correctly title', async () => {
    const issueComponent = treeComponent.root.findByProps({ testID: 'issueTitle' }).props;
  
    expect(issueComponent.children).toEqual(issue.title);
  });
});
