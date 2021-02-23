// Web Development 

//Html CSS cards 
var htmlCssProjects = [
    {   projectName: "Moodii",
        imageUrl:"images/portfolio-img/moodii.jpg",
        description: "This application will provide you with movie suggestions based on your current mood. ",
        liveSite: "https://fullstackzack.github.io/moodii/"
    },
    {
        projectName:"Code Refractor",
        imageUrl: "images/portfolio-img/horiseon-cover.jpg", 
        description: "Having been provided with existing code, for this assignment, I was tasked with refactoring the code to create a codebase that follows accessibility standards, to help optimize the site for search engines.",
        liveSite: "https://kecoston.github.io/Horiseon-Homepage/"
    },
    {
        projectName: "Generate Password",
        imageUrl: "images/portfolio-img/generate-password.jpg",
        description: "This application generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS that is powered by Javascript code. This app is responsive and adapts to multiple screen sizes.",
        liveSite: "https://kecoston.github.io/generate-password/"
    },
    {
        projectName: "Work Planner",
        imageUrl: "images/portfolio-img/workhours-planner.jpg",
        description: "The goal of this assignment was to make a planner that was for the span of the work day. The hours would be highlighted different colors depending on if the hour was past, present, or future. The user would also be able to type in task that would be saved to the local storages, and therefore remain if the browser was refreshed.",
        liveSite: "https://kecoston.github.io/workhours-planner/"
    }
    ]

for (var i = 0; i < htmlCssProjects.length; i++) {

varProjectCard = htmlCssProjects [i]

var cardEl = $("<div>")
var cardImage = $("<img>")
var cardBody = $("<div>")
var cardTitle = $("<h5>")
var cardText = $("<p>")
var cardBtn = $("<button>")
var col = $("<div>")


cardEl.addClass("card")
cardImage.addClass("card-img-top")
cardBody.addClass("card-body")
cardTitle.addClass("card-title")
cardText.addClass("p")
cardBtn.addClass("btn btn-secondary").text("Visit the Live Site")
col.addClass("col")

cardImage.attr("src", htmlCssProjects[i].imageUrl)
cardTitle.text(htmlCssProjects[i].projectName)
cardText.text(htmlCssProjects[i].description)
cardBtn.attr("href", htmlCssProjects[i].liveSite)

cardEl.append(cardImage, cardTitle, cardText, cardBtn)
col.append(cardEl)
$("#web-examples").append(col)

}

$("#web-examples").hide();

$("#html-css-btn").on("click", function(event) {
   console.log("is this working")
    $("#web-examples").toggle("slide");

});


//Fade in project divs
$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });