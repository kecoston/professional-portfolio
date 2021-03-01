// Web Development 

// Node Examples 
var nodeProjects = [
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
    },
    {
        projectName:"Employee Database",
        imageUrl: "assets/images/portfolio-img/employee-database.jpg", 
        description: "Javascript, MySQL, Node.js, & Express",
        liveSite: "https://github.com/kecoston/employee-database",
        gitHub: "https://github.com/kecoston/employee-database"
    }
]

for (var i = 0; i < nodeProjects.length; i++) {

    var nodeProjectCard = nodeProjects[i]
    
    var nodeExample = $("<article>");
    var nodeTitle = $("<h3>");
    var nodeBackground = $("<img>");
    var nodeExampleDescription = $("<p>");
    var nodeLive = $("<a>");
    var nodeGit = $("<a>");
    
    nodeExample.addClass("example")
    nodeTitle.addClass("example-title")
    nodeBackground.addClass("example-background")
    nodeExampleDescription.addClass("example-descript")
    nodeLive.addClass("btn btn-outline-light")
    nodeGit.addClass("btn btn-outline-light")
    
    nodeLive.text("Live Site")
    nodeGit.text("GitHub Repository")
    
    
    nodeBackground.attr("src", nodeProjectCard.imageUrl)
    nodeTitle.text(nodeProjectCard.projectName)
    nodeExampleDescription.text(nodeProjectCard.description)
    nodeLive.attr("href", nodeProjectCard.liveSite).attr('target','_blank')
    
    nodeGit.attr("href", nodeProjectCard.gitHub).attr('target','_blank')
    
    
    nodeExample.append(nodeBackground, nodeTitle, nodeExampleDescription, nodeLive, nodeGit)
    $("#node-examples").append(nodeExample)
    
    }
    
    $("#node-examples").hide();
    
       
    $("#node-btn").on("click", function(event) {
       console.log("is this working")
        $("#node-examples").toggle("slide");

        $("#html-examples").hide();
        $("#javascript-examples").hide();
        $("#database-examples").hide();
        $("#react-examples").hide();
    
    });