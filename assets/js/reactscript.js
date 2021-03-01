// Web Development 

// React Examples 
var reactProjects = [
    {
        projectName:"Employee Database",
        imageUrl: "images/portfolio-img/employee-database.jpg", 
        description: "Javascript, MySQL, Node.js, & Express",
        liveSite: "https://github.com/kecoston/employee-database",
        gitHub: "https://github.com/kecoston/employee-database"
    },
    {
        projectName:"Relay",
        imageUrl: "images/portfolio-img/relay.jpg", 
        description: "HTML, CSS, Material-UI, React.js, Passport.js, bcrypt, Mongoose, Express.js, and Vonage API",
        liveSite: "https://relay-app-2020.herokuapp.com/",
        gitHub: "https://github.com/kecoston/relay"
    }
]


for (var i = 0; i < reactProjects.length; i++) {

    var reactProjectCard = reactProjects[i]
    
    var reactExample = $("<article>");
    var reactTitle = $("<h3>");
    var reactBackground = $("<img>");
    var reactExampleDescription = $("<p>");
    var reactLive = $("<a>");
    var reactGit = $("<a>");
    
    reactExample.addClass("example")
    reactTitle.addClass("example-title")
    reactBackground.addClass("example-background")
    reactExampleDescription.addClass("example-descript")
    reactLive.addClass("btn btn-outline-light")
    reactGit.addClass("btn btn-outline-light")
    
    reactLive.text("Live Site")
    reactGit.text("GitHub Repository")
    
    
    reactBackground.attr("src", reactProjectCard.imageUrl)
    reactTitle.text(reactProjectCard.projectName)
    reactExampleDescription.text(reactProjectCard.description)
    reactLive.attr("href", reactProjectCard.liveSite).attr('target','_blank')
    
    reactGit.attr("href", reactProjectCard.gitHub).attr('target','_blank')
    
    
    reactExample.append(reactBackground, reactTitle, reactExampleDescription, reactLive, reactGit)
    $("#react-examples").append(reactExample)
    
    }
    
    $("#react-examples").hide();
    
       
    $("#react-btn").on("click", function(event) {
       console.log("is this working")
        $("#react-examples").toggle("slide");
        
        $("#html-examples").hide();
        $("#javascript-examples").hide();
        $("#database-examples").hide();
        $("#node-examples").hide();

    
    });