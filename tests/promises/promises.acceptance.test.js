import promises from '../../src/promises/promises';

describe('Test acceptation test for promises use the movie db api', () => {
    test('Should return the ids of n most popular movies', () => {
        const expectedValue = [];

        promises.getTopMoviesIds(2).then(response => {
            expect(response.length).toBe(2);
        });
    })
});