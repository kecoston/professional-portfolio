// Web Development 

// Javascript Examples 
var jSProjects = [
    {   projectName: "Employee Directory",
        imageUrl:"assets/images/portfolio-img/employee-directory.jpg",
        description: "HTML, CSS, Javascript, React.Js, & Bootstrap",
        liveSite: "https://kecoston.github.io/employee-directory/",
        gitHub: "https://github.com/kecoston/employee-directory"
    },
    {
        projectName:"Budget Tracker",
        imageUrl: "assets/images/portfolio-img/budget-tracker.jpg", 
        description: "HTML, CSS, Javascript, Express, Lite-server Mongoose, Morgan, & Heroku",
        liveSite: "https://powerful-woodland-53250.herokuapp.com/",
        gitHub: "https://github.com/kecoston/budget_tracker"
    },
    {
        projectName:"Workout Tracker",
        imageUrl: "assets/images/portfolio-img/workout-tracker.jpg", 
        description: "HTML, CSS, Javascript, Express, Mongoose, Morgan, Path, & Router",
        liveSite: "https://guarded-thicket-11070.herokuapp.com/",
        gitHub: "https://github.com/kecoston/workout-tracker"
    },
    {
        projectName:"Relay",
        imageUrl: "assets/images/portfolio-img/relay.jpg", 
        description: "HTML, CSS, Material-UI, React.js, Passport.js, bcrypt, Mongoose, Express.js, and Vonage API",
        liveSite: "https://relay-app-2020.herokuapp.com/",
        gitHub: "https://github.com/kecoston/relay"
    }, 
    {
        projectName:"Moodii",
        imageUrl: "assets/images/portfolio-img/moodii-project.jpg", 
        description: " HTML, CSS, Bulma, Google Fonts, The MovieDatabase API, & JQuery",
        liveSite: "https://fullstackzack.github.io/moodii/",
        gitHub: "https://github.com/FullStackZack/moodii"
    },
    {
        projectName:"Esthete Gallery",
        imageUrl: "assets/images/portfolio-img/gallery.jpg", 
        description: "HTML, CSS, MySQL, Sequelize, Passport.js, Bycryptjs, Cloudinary, Dotenv, Heroku and Express",
        liveSite: "https://esthetegallery.herokuapp.com/",
        gitHub: "https://github.com/Sumayyahm/Project2"
    },
    {
        projectName:"Employee Database",
        imageUrl: "assets/images/portfolio-img/employee-database.jpg", 
        description: "Javascript, MySQL, Node.js, & Express",
        liveSite: "https://github.com/kecoston/employee-database",
        gitHub: "https://github.com/kecoston/employee-database"
    },
    {
        projectName:"Note Pad",
        imageUrl: "assets/images/portfolio-img/take-note.jpg", 
        description: "HTML, CSS, Javascript, Express, FS, & Path",
        liveSite: "https://stark-dawn-96998.herokuapp.com/",
        gitHub: "https://github.com/kecoston/take-note"
    },
    {
        projectName:"Staff Enrollment",
        imageUrl: "assets/images/portfolio-img/staff.jpg", 
        description: "Javascript, Node.js, Inquirer, Path, FS, and Util",
        liveSite: "https://github.com/kecoston/staff-enrollment",
        gitHub: "https://github.com/kecoston/staff-enrollment"
    },
    {
        projectName:"Generate Read.Me",
        imageUrl: "assets/images/portfolio-img/readme.jpg", 
        description: "Javascript, Node.js, Init, Util, and Inquirer",
        liveSite: "https://github.com/kecoston/generate-readme",
        gitHub: "https://github.com/kecoston/generate-readme"
    }
    ]


for (var i = 0; i < jSProjects.length; i++) {

var jsProjectCard = jSProjects[i]

var jsExample = $("<article>");
var jsTitle = $("<h3>");
var jsBackground = $("<img>");
var jsExampleDescription = $("<p>");
var jsLive = $("<a>");
var jsGit = $("<a>");

jsExample.addClass("example")
jsTitle.addClass("example-title")
jsBackground.addClass("example-background")
jsExampleDescription.addClass("example-descript")
jsLive.addClass("btn btn-outline-light")
jsGit.addClass("btn btn-outline-light")

jsLive.text("Live Site")
jsGit.text("GitHub Repository")


jsBackground.attr("src", jsProjectCard.imageUrl)
jsTitle.text(jsProjectCard.projectName)
jsExampleDescription.text(jsProjectCard.description)
jsLive.attr("href", jsProjectCard.liveSite).attr('target','_blank')

jsGit.attr("href", jsProjectCard.gitHub).attr('target','_blank')


jsExample.append(jsBackground, jsTitle, jsExampleDescription, jsLive, jsGit)
$("#javascript-examples").append(jsExample)

}

$("#javascript-examples").hide();

   
$("#javascript-btn").on("click", function(event) {
   console.log("is this working")
    $("#javascript-examples").toggle("slide");

    $("#html-examples").hide();
    $("#react-examples").hide();
    $("#database-examples").hide();
    $("#node-examples").hide();

});