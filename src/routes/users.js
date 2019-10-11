const express = require('express');
const router = express.Router();
const { USERS_ROUTE } = require('../helpers/constants');
const { getUsersWithRepo } = require('../services/user');

router.get(USERS_ROUTE, async (req, res) => {
    try {
        res.json(await getUsersWithRepo(req.query.name));
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;