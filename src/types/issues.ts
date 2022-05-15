import { Comment } from './comments';
import { RootTabScreenProps } from './navigation';

export interface Issue {
  url: string;
  id: number;
  number: string;
  title: string;
  body: string;
  user: IssueUser;
  labels: IssueLabel[];
  created_at: string;
  state: 'open' | 'closed';
  comments_url: string;
  pull_request?: object;
  isBookmarked?: boolean;
}

export interface IssueUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
}

export interface IssueLabel {
  id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface IssueFilter {
  id: string;
  label: string;
  isActive: boolean;
}

export interface IssueState {
  issues: Issue[];
  loading: boolean;
  error?: Error;
  owner: string;
  repo: string;
  filters: IssueFilter[];
  currentPage: number;
}

export interface IssueAction {
  type: IssueActionType;
  payload?: Issue[] | Comment[] | string | number | Error | string[];
}

export interface GetIssuesParams {
  owner: string;
  repo: string;
  filter: string;
  page: number;
}

export interface IssueItemProps {
  issue: Issue;
  navigation: RootTabScreenProps<'Issues'|'Bookmark'>;
}

export interface IssueHeaderProps {
  issue: Issue;
}

export enum IssueActionType {
  SET_ISSUES_LOADING = 'SET_ISSUES_LOADING',
  SET_ISSUES_SUCCESS = 'SET_ISSUES_SUCCESS',
  SET_ISSUES_ERROR = 'SET_ISSUES_ERROR',
  COMMIT_OWNER = 'COMMIT_OWNER',
  COMMIT_REPO = 'COMMIT_REPO',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
  SET_PAGE = 'SET_PAGE',
}

export interface useIssuesReturnedValue {
  data: {
    issues: Issue[];
    loading: boolean;
    filters: IssueFilter[];
    filtersActived: IssueFilter[];
    currentPage: number;
    error?: Error;
  };
  actions: {
    getIssues: () => void;
    setFilter: (filterIds: string[]) => void;
    setPage: (page: number) => void;
  };
}
export interface useCurrentScreenReturnValue {
  data: {
    owner: string;
    repo: string;
    error?: Error;
  };
  actions: {
    commitOwner: (id: string) => void;
    commitRepo: (id: string) => void;
  };
}
