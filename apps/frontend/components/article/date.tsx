import Moment from '../../lib/moment';
import { ARTICLE_DATE_FORMAT } from '../../lib/moment';

export function ArticleDate({ publishedAt }) {
  return <Moment format={ARTICLE_DATE_FORMAT}>{publishedAt}</Moment>;
}
