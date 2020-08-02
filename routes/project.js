const express = require('express');

const router = express.Router();
const isAuth = require('../middleware/is-auth.js');
const projectController = require('../controllers/project.js');

router.get('/users/:userId/projects', isAuth, projectController.showProjects)

router.post('/users/:userId/projects', isAuth, projectController.addProjects)

module.exports = router;
