import { fetch } from 'node-fetch';
import { getPeople } from './script2.js';

it('calls swapi to get people', () => {
    //expect.assertions(1)
    return getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
    })
})
