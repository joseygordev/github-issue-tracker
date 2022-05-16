import { GetIssuesParams, Issue } from '../../types/issues';
import methods from './methods';

export async function get(queryParams: GetIssuesParams): Promise<Issue[]> {
  const { owner, repo, filter, page } = queryParams;

  return await methods.get(`repos/${owner}/${repo}/issues?state=${filter}&page=${page}`);
}
