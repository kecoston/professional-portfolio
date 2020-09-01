

//Web Development Buttons

var webBtnLabel = ["HTML-CSS", "Javascript", "JQuery", "Local-Storage", "API"];

for (var i = 0; i < webBtnLabel.length; i++) {

webBtnEl = webBtnLabel[i]   

var categoryButton = $("<button>").text(webBtnEl);
categoryButton.addClass("button3 a.button3:hover a.button3:active");
categoryButton.attr("id", "button-"+ (webBtnLabel[i]));

$("#web-buttons").append(categoryButton)
}

//Web Portfolio Display

function displayWebHtmlOp () {
    console.log("test")

    
}

function displayWebJavaOp () {
    console.log("test")
}

function displayWebJqueryOp () {
    console.log("test")
}

function displayWebLocalOp () {
    console.log("test")
}

function displayWebApiOp () {
    console.log("test")
}

//Web Development Button Events
$("#button-HTML-CSS").on("click", function(event) {
    event.preventDefault();

    displayWebHtmlOp();

})

$("#button-Javascript").on("click", function(event) {
    event.preventDefault();

    displayWebJavaOp();

})

$("#button-JQuery").on("click", function(event) {
    event.preventDefault();

    displayWebJqueryOp();

})

$("#button-Local-Storage").on("click", function(event) {
    event.preventDefault();

    displayWebLocalOp();

})

$("#button-API").on("click", function(event) {
    event.preventDefault();

    displayWebApiOp();

})



//Graphic Design Buttons 

var graphBtnLabel = ["Brochure-Design", "Web-Design", "Publications", "Logo-Design", "Posters"];

for (var i = 0; i < graphBtnLabel.length; i++) {

graphBtnEl = graphBtnLabel[i]   

var categoryButton = $("<button>").text(graphBtnEl);
categoryButton.addClass('button3');
categoryButton.attr("id", "button-"+ graphBtnEl);


$("#graphic-buttons").append(categoryButton)
}


//Graphic Design Portfolio Options
function displayGraphBrochureOp () {
    console.log("test")
}

function displayGraphWebOp () {
    console.log("test")
}

function displayGraphPubOp () {
    console.log("test")
}

function displayGraphLogoOp () {
    console.log("test")
}

function displayGraphPostOp () {
    console.log("test")
}


//Graphic Design Button Events
$("#button-Brochure-Design").on("click", function(event) {
    event.preventDefault();

    displayGraphBrochureOp();

})

$("#button-Web-Design").on("click", function(event) {
    event.preventDefault();

    displayGraphWebOp();

})

$("#button-Publications").on("click", function(event) {
    event.preventDefault();

    displayGraphPubOp();

})

$("#button-Logo-Design").on("click", function(event) {
    event.preventDefault();

    displayGraphLogoOp();

})

$("#button-Posters").on("click", function(event) {
    event.preventDefault();

    displayGraphPostOp();

})

