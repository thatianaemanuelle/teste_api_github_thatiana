const { getUsersByName, getRepoByUser } = require('../models/user');
const { USER_NOT_FOUND, NAME_REQUIRED } = require('../helpers/messages');

/**
 * @param {string} name 
 */
const getUsersWithRepo = async name => {
    if (!name) {
        throw new Error(NAME_REQUIRED);
    }

    const usersFound = await getUsersByName(name);

    if (!usersFound.length) {
        throw new Error(USER_NOT_FOUND);
    }

    return usersWithRepo = await Promise
        .all(usersFound.map(async user => {
            return {
                ...user,
                repos: await getRepoByUser(user)
            }
        }));
};

module.exports = {
    getUsersWithRepo
};