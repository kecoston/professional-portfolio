const { db } = require("../models/projectModel");
const Projects = require("../models/projectModel");

module.exports = {
    findAll: function(req,res) {
        Projects
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}