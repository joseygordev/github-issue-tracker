import { CommentActionType, CommentAction, CommentState, Comment } from '../../../../types/comments';

const initialState: CommentState = {
  comments: [],
  loading: false,
};

export default (state: CommentState = initialState, action: CommentAction): CommentState => {
  switch (action.type) {
    case CommentActionType.GET_COMMENTS_PENDING:
      return { ...state, loading: true };
    case CommentActionType.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload as Comment[],
        loading: false,
        error: undefined,
      };
    case CommentActionType.GET_COMMENTS_ERROR:
      return { ...state, loading: false, error: action.payload as Error, comments: [] };

    default:
      return state;
  }
};
