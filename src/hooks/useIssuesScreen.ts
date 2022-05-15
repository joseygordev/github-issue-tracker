import { AppState, useTypedDispatch } from '../data/redux/index';
import { useSelector } from 'react-redux';
import * as issueActions from '../data/redux/actions/issues';
import { useCurrentScreenReturnValue } from '../types/issues';

export default function useIssuesScreen(): useCurrentScreenReturnValue {
  const issuesReducer = useSelector((state: AppState) => state.issuesReducer);
  const { error, owner, repo } = issuesReducer;

  const dispatch = useTypedDispatch()

  const commitOwner = (id: string) => {
    dispatch(issueActions.commitOwner(id));
  };
  const commitRepo = (id: string) => {
    dispatch(issueActions.commitRepo(id));
  };

  return {
    data: {
      owner,
      repo,
      error,
    },
    actions: {
      commitOwner,
      commitRepo,
    },
  };
}