import asyncFetch from './fetcher';

describe('asyncFetch', () => {
  it('can fetch', async () => {
    const response = await asyncFetch('https://swapi.dev/api/people');
    const data = await response.json();
    expect(data.count).toEqual(82);
    //expect(response).toEqual("something");
  });
});