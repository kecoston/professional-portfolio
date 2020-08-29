

//Web Development
var webBtnLabel = ["HTML/CSS", "Javascript", "JQuery", "Local Storage", "API"];

for (var i = 0; i < webBtnLabel.length; i++) {

webBtnEl = webBtnLabel[i]   

var categoryButton = $("<button>").text(webBtnEl);
categoryButton.addClass("button3");
categoryButton.attr("id", "button-"+ webBtnEl);




$("#web-buttons").append(categoryButton)
}


//Graphic Design 
var graphBtnLabel = ["Brochure Design", "Web Design", "Publications", "Logo Design", "Posters"];

for (var i = 0; i < graphBtnLabel.length; i++) {

graphBtnEl = graphBtnLabel[i]   

var categoryButton = $("<button>").text(graphBtnEl);
categoryButton.addClass('button3');
categoryButton.attr("id", "button-"+ graphBtnEl);



$("#graphic-buttons").append(categoryButton)
}