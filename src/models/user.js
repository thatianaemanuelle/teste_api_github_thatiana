const axios = require('axios');
const { GITHUB_USERS_ROUTE } = require('../helpers/constants');
const { formatUsersResult, formatReposResult } = require('../helpers/user');

/**
 * @param {object} user 
 */
const getRepoByUser = async user => {
    const { data } = await axios.get(user.repos_url);

    if (!data.length) {
        return [];
    }

    return formatReposResult(data);
};

/**
 * @param {string} name 
 */
const getUsersByName = async name => {
    const { data } = await axios.get(`${GITHUB_USERS_ROUTE}?q=${name}`);

    if (!data.items.length) {
        return [];
    }

    return formatUsersResult(data.items);
};

module.exports = ({
    getRepoByUser,
    getUsersByName
});
