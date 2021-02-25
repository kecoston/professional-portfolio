// Web Development 

// Html CSS cards 
// var htmlCssProjects = [
//     {   projectName: "Horiseon",
//         imageUrl:"images/portfolio-img/horiseon-icon.png",
//         description: "HTML & CSS",
//         liveSite: "https://kecoston.github.io/Horiseon-Homepage/",
//         gitHub: "https://github.com/kecoston/"
//     },
//     {
//         projectName:"Generate Password",
//         imageUrl: "images/portfolio-img/generate-password-icon.png", 
//         description: "HTML, CSS, Google Fonts, & Javascript",
//         liveSite: "https://kecoston.github.io/generate-password/",
//         gitHub: "https://github.com/kecoston/generate-password"
//     },
//     {
//         projectName:"Moodii",
//         imageUrl: "images/portfolio-img/moodii-icon.png", 
//         description: " HTML, CSS, Bulma, Google Fonts, The MovieDatabase API, & JQuery",
//         liveSite: "https://fullstackzack.github.io/moodii/",
//         gitHub: "https://github.com/FullStackZack/moodii"
//     },
//     {
//         projectName:"Relay",
//         imageUrl: "images/portfolio-img/relay-icon.png", 
//         description: "HTML, CSS, Material-UI, React.js, Passport.js, bcrypt, Mongoose, Express.js, and Vonage API",
//         liveSite: "https://relay-app-2020.herokuapp.com/",
//         gitHub: "https://github.com/kecoston/relay"
//     }
//     ]

// for (var i = 0; i < htmlCssProjects.length; i++) {

// varProjectCard = htmlCssProjects [i]

// var cardEl = $("<div>")
// var cardImage = $("<img>")
// var cardBody = $("<div>")
// var cardTitle = $("<h5>")
// var cardText = $("<p>")
// var cardBtn = $("<button>")
// var cardBtnTwo = $("<button>")
// var col = $("<div>")


// cardEl.addClass("card")
// cardImage.addClass("card-img-top")
// cardBody.addClass("card-body")
// cardTitle.addClass("card-title")
// cardText.addClass("p")
// cardBtn.addClass("btn btn-outline-secondary").text("Live Site")
// cardBtnTwo.addClass("btn btn-outline-secondary").text("GitHub Repository")
// col.addClass("col")

// cardImage.attr("src", htmlCssProjects[i].imageUrl)
// cardTitle.text(htmlCssProjects[i].projectName)
// cardText.text(htmlCssProjects[i].description)
// cardBtn.attr("href", htmlCssProjects[i].liveSite)
// cardBtnTwo.attr("href", htmlCssProjects[i].gitHub)


// cardEl.append(cardImage, cardTitle, cardText, cardBtn, cardBtnTwo)
// col.append(cardEl)
// $("#html-examples").append(col)

// }

$("#html-examples").hide();

$("#html-css-btn").on("click", function(event) {
   console.log("is this working")
    $("#html-examples").toggle("slide");

});
