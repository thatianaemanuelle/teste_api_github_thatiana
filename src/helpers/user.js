/**
 * @param {Array} results
 * @returns {Array} clean results
 */
const formatUsersResult = results => {
    return Array.isArray(results) && results.map(({ id, login, repos_url }) => {
        return { id, login, repos_url };
    });
};


/**
 * @param {Array} results
 * @returns {Array} clean results
 */
const formatReposResult = results => {
    return Array.isArray(results) && results.map(({ id, name, stargazers_count }) => {
        return { id, name, stargazers_count };
    });
};

module.exports = {
    formatUsersResult,
    formatReposResult
};
