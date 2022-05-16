import { Dispatch } from 'redux';
import * as commentEndpoints from '../../../api/comments';
import { CommentAction, CommentActionType } from '../../../../types/comments';

export const getComments = (url: string) => async (dispatch: Dispatch<CommentAction>) => {
  dispatch({ type: CommentActionType.GET_COMMENTS_PENDING });
  try {
    const comments = await commentEndpoints.get(url);
    dispatch({ type: CommentActionType.GET_COMMENTS_SUCCESS, payload: comments });
  } catch (error) {
    dispatch({ type: CommentActionType.GET_COMMENTS_ERROR, payload: error as Error });
  }
};
