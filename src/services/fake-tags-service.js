export const tags = [
  {
    id: 1,
    name: 'C++',
  },
  {
    id: 2,
    name: 'C#',
  },
  {
    id: 3,
    name: 'PHP',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'HTML',
  },
  {
    id: 6,
    name: 'CSS',
  },
  {
    id: 7,
    name: 'JavaScript',
  },
  {
    id: 8,
    name: 'TypeScript',
  },
  {
    id: 9,
    name: 'Java',
  },
  {
    id: 10,
    name: 'NodeJS',
  },
  {
    id: 11,
    name: 'Laravel',
  },
  {
    id: 12,
    name: 'ReactJs',
  },
];

/**
 * A function that returns a list of tags.
 *
 * @return {Promise} List of tags.
 */
export const getTags = () => Promise.resolve(tags);
