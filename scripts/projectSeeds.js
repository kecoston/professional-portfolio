const mongoose = require("mongoose");
const Project = require("../models/projectModel")


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pro-port",
);

const projectSeed = [
  {
    name: "Moodhi",
    description: "Having been inspired by our current circumstances with COVID, we created an app that will provide the user with a movie or tv show recommendation based on their mood. All mood suggestions encourage a positive outlook. My main roles for this project were to explore and code various APIs, revise our team’s code to work with specific CSS framework, and to ensure the app is mobile responsive. For this project our team used: HTML, CSS, Bulma, Google Fonts, and The Movie Database API",
    repoHref: "https://github.com/FullStackZack/moodii",
    deployedHref: "https://fullstackzack.github.io/moodii/"
  },
  {
      name: "Eshetetic",
      description:"Esthete Gallery is an art gallery management system that allows an art gallery owner to maintain details of artists and paintings with great ease. My main roles for this project was to build the database and demo seeds for the models. I accomplished this by using Sequelize, Sequelize CLI, and mySQL Workbench. For this project our team used: HTML, CSS, UIKit, handlebars, bcryptjs, cloudinary, dotenv, express, mysql2, passport.js, and sequelize.",
      repoHref: "https://github.com/Sumayyahm/Project2",
      deployedHref: "https://esthetegallery.herokuapp.com/"
  },
  {
      name: "Budget Tracker",
      description:"This is a Budget Tracker application that has offline access. The user will be able to add expenses and deposits to their budget with or without connection. When entering transactions offline, they populate the total when brought back online.",
      repoHref: "https://github.com/kecoston/budget_tracker",
      deployedHref: "https://powerful-woodland-53250.herokuapp.com/"
  },
  {
      name: "Budget Tracker",
      description:"This is a Budget Tracker application that has offline access. The user will be able to add expenses and deposits to their budget with or without connection. When entering transactions offline, they populate the total when brought back online.",
      repoHref: "https://github.com/kecoston/budget_tracker",
      deployedHref: "https://powerful-woodland-53250.herokuapp.com/"
  },
  {
    name: "Note Taker",
    description:"This app allows you to create, store, and delete apps",
    repoHref: "https://github.com/kecoston/take-note",
    deployedHref: "https://stark-dawn-96998.herokuapp.com/"
}
 
];




Project.remove({})
  .then(() => Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

