import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import { getTags } from './fake-tags-service';

Enzyme.configure({ adapter: new Adapter() });

describe('fake-tags-service', () => {
  it('should return a list of tags', async () => {
    const tags = getTags();
    tags.then((result) =>
      expect(result).toStrictEqual([
        { id: 1, name: 'C++' },
        { id: 2, name: 'C#' },
        { id: 3, name: 'PHP' },
        { id: 4, name: 'Python' },
        { id: 5, name: 'HTML' },
        { id: 6, name: 'CSS' },
        { id: 7, name: 'JavaScript' },
        { id: 8, name: 'TypeScript' },
        { id: 9, name: 'Java' },
        { id: 10, name: 'NodeJS' },
        { id: 11, name: 'Laravel' },
        { id: 12, name: 'ReactJs' },
      ])
    );
  });
});
