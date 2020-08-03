const axios = require("axios");

exports.showProjects = (req, res, next) => {
  axios
    .get(`http://localhost:8080/users/${req.params.userId}/projects`)
    .then((response) => {
      // console.log(response);
      res.statusCode = response.status;
      res.json(response.data);
    })
    .catch((err) => {
      res.status = 500;
      res.json({
        message: "Internal server error",
      });
    });
};

exports.addProjects = (req, res, next) => {
  axios
    .post(`http://localhost:8080/users/${req.params.userId}/projects`, req.body)
    .then((response) => {
      console.log(response);
      res.statusCode = response.status;
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = err.response.status;
      res.json(err.response.data);
    });
};

exports.editProject = (req, res, next) => {
  axios
    .put(
      `http://localhost:8080/users/${req.params.userId}/projects/${req.params.projectId}`,
      req.body
    )
    .then((response) => {
      res.statusCode = response.status;
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = err.response.status;
      res.json(err.response.data);
    });
};

exports.removeProject = (req, res, next) => {
    axios
    .delete(
      `http://localhost:8080/users/${req.params.userId}/projects/${req.params.projectId}`
    )
    .then((response) => {
      res.statusCode = response.status;
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = err.response.status;
      res.json(err.response.data);
    });
};

exports.showTasks = (req, res, next) => {
    axios
    .get(
      `http://localhost:8080/users/${req.params.userId}/projects/${req.params.projectId}/tasks`
    )
    .then((response) => {
      res.statusCode = response.status;
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err.data);
      res.statusCode = err.response.status;
      res.json(err.response.data);
    });
}

exports.addTasks = (req, res, next) => {
    axios
    .post(
      `http://localhost:8080/users/${req.params.userId}/projects/${req.params.projectId}/tasks`, req.body
    )
    .then((response) => {
      res.statusCode = response.status;
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = err.response.status;
      res.json(err.response.data);
    });
}

exports.editTasks = (req, res, next) => {
  axios
  .put(
    `http://localhost:8080/users/${req.params.userId}/projects/${req.params.projectId}/tasks/${req.params.taskId}`, req.body
  )
  .then((response) => {
    res.statusCode = response.status;
    res.json(response.data);
  })
  .catch((err) => {
    console.log(err);
    res.statusCode = err.response.status;
    res.json(err.response.data);
  });
}

exports.removeTasks = (req, res, next) => {
  axios
  .delete(`http://localhost:8080/users/${req.params.userId}/projects/${req.params.projectId}/tasks/${req.params.taskId}`)
  .then((response) => {
    res.statusCode = response.status;
    res.json(response.data);
  })
  .catch((err) => {
    console.log(err);
    res.statusCode = err.response.status;
    res.json(err.response.data);
  });
}