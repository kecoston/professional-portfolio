// Web Development 

// Html CSS Examples 
var htmlCssProjects = [
    {   projectName: "Horiseon",
        imageUrl:"assets/images/portfolio-img/horiseon-cover.jpg",
        description: "HTML & CSS",
        liveSite: "https://kecoston.github.io/Horiseon-Homepage/",
        gitHub: "https://github.com/kecoston/"
    },
    {
        projectName:"Generate Password",
        imageUrl: "assets/images/portfolio-img/generate-password.jpg", 
        description: "HTML, CSS, Google Fonts, & Javascript",
        liveSite: "https://kecoston.github.io/generate-password/",
        gitHub: "https://github.com/kecoston/generate-password"
    },
    {
        projectName:"Moodii",
        imageUrl: "assets/images/portfolio-img/moodii-project.jpg", 
        description: " HTML, CSS, Bulma, Google Fonts, The MovieDatabase API, & JQuery",
        liveSite: "https://fullstackzack.github.io/moodii/",
        gitHub: "https://github.com/FullStackZack/moodii"
    },
    {
        projectName:"Relay",
        imageUrl: "assets/images/portfolio-img/relay.jpg", 
        description: "HTML, CSS, Material-UI, React.js, Passport.js, bcrypt, Mongoose, Express.js, and Vonage API",
        liveSite: "https://relay-app-2020.herokuapp.com/",
        gitHub: "https://github.com/kecoston/relay"
    }
    ]

for (var i = 0; i < htmlCssProjects.length; i++) {

var projectCard = htmlCssProjects[i]


var example = $("<article>");
var title = $("<h3>");
var background = $("<img>");
var exampleDescription = $("<p>");
var live = $("<a>");
var git = $("<a>");

example.addClass("example")
title.addClass("example-title")
background.addClass("example-background")
exampleDescription.addClass("example-descript")
live.addClass("btn btn-outline-light")
git.addClass("btn btn-outline-light")

live.text("Live Site")
git.text("GitHub Repository")


background.attr("src", projectCard.imageUrl)
title.text(projectCard.projectName)
exampleDescription.text(projectCard.description)
live.attr("href", projectCard.liveSite).attr('target','_blank')

git.attr("href", projectCard.gitHub).attr('target','_blank')


example.append(background, title, exampleDescription, live, git)
$("#html-examples").append(example)

}

$("#html-examples").hide();

   
$("#html-css-btn").on("click", function(event) {
   console.log("is this working")
    $("#html-examples").toggle("slide");

    $("#react-examples").hide();
    $("#javascript-examples").hide();
    $("#database-examples").hide();
    $("#node-examples").hide();

});

