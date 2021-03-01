// Web Development 

// Database Examples 
var dataProjects = [
    {
        projectName:"Budget Tracker",
        imageUrl: "images/portfolio-img/budget-tracker.jpg", 
        description: "HTML, CSS, Javascript, Express, Lite-server Mongoose, Morgan, & Heroku",
        liveSite: "https://powerful-woodland-53250.herokuapp.com/",
        gitHub: "https://github.com/kecoston/budget_tracker"
    },
    {
        projectName:"Workout Tracker",
        imageUrl: "images/portfolio-img/workout-tracker.jpg", 
        description: "HTML, CSS, Javascript, Express, Mongoose, Morgan, Path, & Router",
        liveSite: "https://guarded-thicket-11070.herokuapp.com/",
        gitHub: "https://github.com/kecoston/workout-tracker"
    },
    {
        projectName:"Relay",
        imageUrl: "images/portfolio-img/relay.jpg", 
        description: "HTML, CSS, Material-UI, React.js, Passport.js, bcrypt, Mongoose, Express.js, and Vonage API",
        liveSite: "https://relay-app-2020.herokuapp.com/",
        gitHub: "https://github.com/kecoston/relay"
    },
    {
        projectName:"Esthete Gallery",
        imageUrl: "images/portfolio-img/gallery.jpg", 
        description: "HTML, CSS, MySQL, Sequelize, Passport.js, Bycryptjs, Cloudinary, Dotenv, Heroku and Express",
        liveSite: "https://esthetegallery.herokuapp.com/",
        gitHub: "https://github.com/Sumayyahm/Project2"
    },
    {
        projectName:"Employee Database",
        imageUrl: "../images/portfolio-img/employee-database.jpg", 
        description: "Javascript, MySQL, Node.js, & Express",
        liveSite: "https://github.com/kecoston/employee-database",
        gitHub: "https://github.com/kecoston/employee-database"
    }
]

for (var i = 0; i < dataProjects.length; i++) {

    var dataProjectCard = dataProjects[i]
    
    var dataExample = $("<article>");
    var dataTitle = $("<h3>");
    var dataBackground = $("<img>");
    var dataExampleDescription = $("<p>");
    var dataLive = $("<a>");
    var dataGit = $("<a>");
    
    dataExample.addClass("example")
    dataTitle.addClass("example-title")
    dataBackground.addClass("example-background")
    dataExampleDescription.addClass("example-descript")
    dataLive.addClass("btn btn-outline-light")
    dataGit.addClass("btn btn-outline-light")
    
    dataLive.text("Live Site")
    dataGit.text("GitHub Repository")
    
    
    dataBackground.attr("src", dataProjectCard.imageUrl)
    dataTitle.text(dataProjectCard.projectName)
    dataExampleDescription.text(dataProjectCard.description)
    dataLive.attr("href", dataProjectCard.liveSite).attr('target','_blank')
    
    dataGit.attr("href", dataProjectCard.gitHub).attr('target','_blank')
    
    
    dataExample.append(dataBackground, dataTitle, dataExampleDescription, dataLive, dataGit)
    $("#database-examples").append(dataExample)
    
    }
    
    $("#database-examples").hide();
    
       
    $("#database-btn").on("click", function(event) {
       console.log("is this working")
        $("#database-examples").toggle("slide");

        $("#html-examples").hide();
        $("#javascript-examples").hide();
        $("#react-examples").hide();
        $("#node-examples").hide();
    
    });