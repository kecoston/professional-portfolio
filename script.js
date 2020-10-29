$("#web-info").hide();
$("#graphic-info").hide();

$("#graphic-btn").on("click", function(event) {
   
   $("#graphic-info").toggle("slide");
    
    $("#bio-info").hide();
    $("#web-info").hide();

});

$("#web-btn").on("click", function(event) {

    $("#web-info").toggle("slide");

    $("#bio-info").hide();
     $("#graphic-info").hide();
 });

 $("#about-btn").on("click", function(event) {

    $("#bio-info").toggle("slide");
     
    $("#web-info").hide();
     $("#graphic-info").hide();
 });



 $('.carousel').carousel()


// var textWrapper = document.querySelector('.button-title:focus');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.button-title .letter:focus',
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i
//  })
 // Transition out 
 //.add({
//     targets: '.ml12 .letter',
//     translateX: [0,-30],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: (el, i) => 100 + 30 * i
//   });