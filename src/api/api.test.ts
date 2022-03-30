import { getParams } from './api';

describe('api', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV, REACT_APP_MARVEL_PUBLIC_API_KEY: 'test' }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });
  it('getParams :: should remove empty params', () => {
    const params = { nameStartsWith: 'iron', name: '' };
    const expected = 'nameStartsWith=iron&apikey=test';
    expect(getParams(params)).toEqual(expected);
  });
});
