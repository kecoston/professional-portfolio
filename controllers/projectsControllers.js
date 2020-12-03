const Projects = require("../models/projectModel");

module.exports = {
    findAll: function(req,res) {
        Projects
            .find(req.res)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}