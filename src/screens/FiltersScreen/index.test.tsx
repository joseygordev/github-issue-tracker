import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../data/redux';
import MockNavigation from '../../data/mocks/navigation';
import FiltersScreen from './index';
import { mockFilters } from '../../data/mocks/issues';
import CustomText from '../../components/CustomText';

const createFreshTree = () =>
  create(
    <ReduxProvider store={store}>
      <MockNavigation component={FiltersScreen} />
    </ReduxProvider>
  );

const tree = createFreshTree();

describe('Filters Screen', () => {
  it('renders correctly', async () => {
    await act(async () => jest.runAllTimers());

    expect(tree).toMatchSnapshot();
  });
  
  it('renders with owner set', async () => {
    const owner = tree.root.findByProps({ testID: 'ownerInput' }).props;

    expect(owner.value).toEqual('facebook');
  });

  it('renders with repo set', async () => {
    const owner = tree.root.findByProps({ testID: 'repoInput' }).props;

    expect(owner.value).toEqual('react-native');
  });
  
  it('renders with filters', async () => {
    const firstFilter = mockFilters[0];
    const filter = tree.root.findByProps({ testID: firstFilter.id }).props;

    expect(filter).toBeTruthy();
  });
});
