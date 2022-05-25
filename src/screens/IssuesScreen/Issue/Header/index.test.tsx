import React from 'react';
import { create, act } from 'react-test-renderer';

import mockIssues from '../../../../data/mocks/issues';
import Header from './index';

describe('Header', () => {  
  const issue = mockIssues[0];

  it('it renders Header correctly', async () => {
    const tree = create(<Header issue={issue} />);

    expect(tree).toMatchSnapshot();
  });
  
  it('it renders Header with the user name', async () => {
    const tree = create(<Header issue={issue} />);
    const headerComponent = tree.root.findByProps({ testID: 'userName' }).props;
  
    expect(headerComponent.children).toEqual(issue.user.login);
  });
  
  it('it renders Header bookmarked', async () => {
    const tree = create(<Header issue={{...issue, isBookmarked: true}} />);
    const headerComponent = tree.root.findByProps({ testID: 'bookmarked' });

    await act(async () => jest.runAllTimers());
  
    expect(headerComponent).toBeTruthy();
  });
});
