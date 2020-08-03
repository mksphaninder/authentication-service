const express = require('express');

const router = express.Router();
const isAuth = require('../middleware/is-auth.js');
const projectController = require('../controllers/project.js');

router.get('/users/:userId/projects', isAuth, projectController.showProjects);

router.post('/users/:userId/projects', isAuth, projectController.addProjects);

router.put('/users/:userId/projects/:projectId', isAuth, projectController.editProject);

router.delete('/users/:userId/projects/:projectId', isAuth, projectController.removeProject);

router.get('/users/:userId/projects/:projectId/tasks', isAuth, projectController.showTasks);

router.post('/users/:userId/projects/:projectId/tasks', isAuth, projectController.addTasks);

router.put('/users/:userId/projects/:projectId/tasks/:taskId', isAuth, projectController.editTasks);

router.delete('/users/:userId/projects/:projectId/tasks/:taskId', isAuth, projectController.removeTasks);

module.exports = router;
