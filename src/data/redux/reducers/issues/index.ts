import { Issue, IssueActionType, IssueState, IssueAction } from '../../../../types/issues';

const defaultFilters = [
  { id: 'open', label: 'Open', isActive: true },
  { id: 'closed', label: 'Closed', isActive: true },
];

export const initialState: IssueState = {
  issues: [],
  owner: 'facebook',
  repo: 'react-native',
  filters: defaultFilters,
  loading: false,
  currentPage: 1,
};

export default (state: IssueState = initialState, action: IssueAction): IssueState => {
  switch (action.type) {
    case IssueActionType.SET_ISSUES_LOADING:
      return { ...state, loading: true };

    case IssueActionType.SET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.payload as Issue[],
        loading: false,
        error: undefined,
      };

    case IssueActionType.SET_ISSUES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload as Error,
        issues: [],
        currentPage: 1,
      };

    case IssueActionType.COMMIT_OWNER:
      return {
        ...state,
        owner: action.payload as string,
      };

    case IssueActionType.COMMIT_REPO:
      return {
        ...state,
        repo: action.payload as string,
      };

    case IssueActionType.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload as number,
      };

    case IssueActionType.TOGGLE_FILTER:
      const payload = action.payload as string[];
      const newFilters = [...state.filters].map((filter) => ({...filter, isActive: !!payload.includes(filter.id)}));

      return {
        ...state,
        filters: newFilters,
        currentPage: 1,
      };

    default:
      return state;
  }
};
