const router = require("express").Router();
const projectController = require("../../controllers/projectsControllers")

router.route("/")
    .get(projectController.findAll)


module.exports = router;