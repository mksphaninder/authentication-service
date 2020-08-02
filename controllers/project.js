const axios = require('axios');

exports.showProjects = (req, res, next) => {
    axios.get(`http://localhost:8080/users/${req.params.userId}/projects`)
    .then(response => {
        // console.log(response);
        res.statusCode = response.status;
        res.json(response.data);
    })
    .catch(err => {
        res.status = 500;
        res.json({
            message: "Internal server error"
        })
    });
};

exports.addProjects = (req, res, next) => {
    axios.post(`http://localhost:8080/users/${req.params.userId}/projects`, req.body)
    .then(response => {
        console.log(response);
        res.statusCode = response.status;
        res.json(response.data);
    })
    .catch(err => {
        console.log(err);
        res.statusCode = err.response.status;
        res.json(err.response.data);
    });
};