

//Web Development
var webBtnLabel = ["HTML/CSS", "Javascript", "JQuery", "Local Storage", "API"];

for (var i = 0; i < webBtnLabel.length; i++) {

webBtnEl = webBtnLabel[i]   

var categoryButton = $("<button>").text(webBtnEl);
categoryButton.addClass("button3 a.button3:hover a.button3:active");



$("#web-buttons").append(categoryButton)
}


//Graphic Design 
var webBtnLabel = ["Brochure Design", "Web Design", "Publications", "Logo Design", "Posters"];

for (var i = 0; i < webBtnLabel.length; i++) {

webBtnEl = webBtnLabel[i]   

var categoryButton = $("<button>").text(webBtnEl);
categoryButton.addClass("button3 a.button3:hover a.button3:active");



$("#graphic-buttons").append(categoryButton)
}