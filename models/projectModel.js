const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  // url for project repo
  repoHref: {
    type: String,
    default: "",
    unique: true
  },
  // url for project deployed page
  deployedHref: {
    type: String,
    default: "",
    unique: true
  },

});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
