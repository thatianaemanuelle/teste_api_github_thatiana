const userHelper = require('../../src/helpers/user');

describe('userHelper', () => {
    describe('formatUsersResult', () => {
        it('should format and clean user github json', () => {
            const githubUserReturn = [
                {
                    id: '236456',
                    login: 'jasmine',
                    repos_url: 'https://google.com',
                    potatoChips: true,
                }
            ]

            const [formatedResult] = userHelper.formatUsersResult(githubUserReturn);

            expect(formatedResult.id).toBe(githubUserReturn[0].id);
            expect(formatedResult.login).toBe(githubUserReturn[0].login);
            expect(formatedResult.repos_url).toBe(githubUserReturn[0].repos_url);
            expect(formatedResult.potatoChips).toBe(undefined);
        });

        it('should return false passing !array argument', () => {
            const githubFakeReturn = {
                orange: 'blue'
            }

            const formatedResult = userHelper.formatUsersResult(githubFakeReturn);

            expect(formatedResult).toBe(false);
        });
    });

    describe('formatReposResult', () => {
        it('should format and clean user github json', () => {
            const githubRepoReturn = [
                {
                    id: '1515142',
                    name: 'jasmineRules',
                    stargazers_count: 8,
                    abracadabra: true,
                }
            ]

            const [formatedResult] = userHelper.formatReposResult(githubRepoReturn);

            expect(formatedResult.id).toBe(githubRepoReturn[0].id);
            expect(formatedResult.name).toBe(githubRepoReturn[0].name);
            expect(formatedResult.stargazers_count).toBe(githubRepoReturn[0].stargazers_count);
            expect(formatedResult.abracadabra).toBe(undefined);
        });

        it('should return false passing !array argument', () => {
            const githubFakeReturn = {
                orange: 'blue'
            }

            const formatedResult = userHelper.formatReposResult(githubFakeReturn);

            expect(formatedResult).toBe(false);
        });
    });
});