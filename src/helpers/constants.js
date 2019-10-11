const config = require('config');

const MAIN_PATH = `/api`;
const USERS_ROUTE = `${MAIN_PATH}/users`
const PORT = config.get('port');
const GITHUB_MAIN_ROUTE = `https://api.github.com`;
const GITHUB_USERS_ROUTE = `${GITHUB_MAIN_ROUTE}/search/users`;

module.exports = Object.freeze({
    MAIN_PATH,
    USERS_ROUTE,
    PORT,
    GITHUB_MAIN_ROUTE,
    GITHUB_USERS_ROUTE
});