import { LayoutAnimation } from 'react-native';
import { useSelector } from 'react-redux';
import * as issueActions from '../data/redux/actions/issues';
import { AppState, useTypedDispatch } from '../data/redux';
import { useIssuesReturnedValue, IssueFilter } from '../types/issues';

export default function useIssues(): useIssuesReturnedValue {
  const { 
    issues,
    loading,
    filters,
    currentPage,
    error
} = useSelector((state: AppState) => state.issuesReducer);

  const dispatch = useTypedDispatch();

  const getIssues = () => {
    dispatch(issueActions.getIssues());
  };

  const setFilter = (filterIds: string[]) => {
    LayoutAnimation.easeInEaseOut();
    dispatch(issueActions.toggleFilter(filterIds));
    getIssues();
  };

  const setPage = (pageNumber: number) => {
    LayoutAnimation.easeInEaseOut();
    dispatch(issueActions.setPage(pageNumber));
    getIssues();
  };

  const filtersActived: IssueFilter[] = filters.filter((filter: IssueFilter) => filter.isActive);

  return {
    data: {
      issues,
      loading,
      filters,
      filtersActived,
      currentPage,
      error,
    },
    actions: {
      getIssues,
      setFilter,
      setPage,
    },
  };
}
