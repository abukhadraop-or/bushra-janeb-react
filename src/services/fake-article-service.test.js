import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import { getArticles } from 'services/fake-articles-service';
import { articles } from './fake-articles-service';

Enzyme.configure({ adapter: new Adapter() });

describe('fake-tags-service', () => {
  it('should return a list of articles', async () => {
    const article = getArticles();
    article.then((result) => expect(result).toStrictEqual(articles));
  });
});
