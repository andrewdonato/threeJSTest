//// old_luminar.js

$(document).ready(function() {

  // $(".container").width($(window).width());

  // getLocationOfMouse();

  showNavigationMenu();

});

var showNavigationMenu = function() {
  // $('.showNavigationMenuButton').on('click', console.log("pineapple"))};
// var showNavigationMenu = function() {
  $('.showNavigationMenuButton').on('click', function(event){
    event.preventDefault();
    console.log("this is working!");
//     $('.navigationmenu').toggle();
  });
}


// Y positions of lines ~ 0.47 - 0.61
// Below positions are enlarged to be easier to click

// Button positions
// red:   X start at 0.470 - 0.515    Y  0.43 - 0.64
// green: X start at 0.515 - 0.560    Y  0.43 - 0.64
// blue:  X start at 0.560 - 0.610    Y  0.43 - 0.64

var getLocationOfMouse = function() {
    // $('body').on('click', function(event){    //// This is for finding the mouse coordinates
  $('body').mousemove(function(event){

    var mousePositionX = (event.pageX / $('body').width());
    var mousePositionY = (event.pageY / $('body').height());

    console.log(event.pageX, event.pageY)     //// This is for finding the mouse coordinates

    checkForButtons(mousePositionX, mousePositionY);

  });
};

//
//
var checkForButtons = function(mousePositionX, mousePositionY) {
  if(mousePositionY >= 0.43 && mousePositionY <= 0.64){
    if (mousePositionX >= 0.470 && mousePositionX < 0.515){
      var color = "red"
      // checkForClick(color);

    } else if (mousePositionX >= 0.515 && mousePositionX < 0.560){
      var color = "green"
      // checkForClick(color);

    } else if (mousePositionX >= 0.560 && mousePositionX < 0.610){
      var color = "blue"
      // checkForClick(color);

    } else {
      // var color = "nothingX"
      var color = ""
      // checkForClick(color);
    };
    checkForClick(color);

  } else {
    // var color = "nothingY"
    // var color = ""
    // checkForClick(color);
  };

  mouseHoverOnButton(color);
};


var checkForClick = function(color) {
  $('body').on('click', function(event){

    //// for figuring out mouse X,Y
    // changeDisplayText(event.pageX + ", " + event.pageY)

    if (color === "red"){
      changeDisplayText("red clicked")
    } else if (color === "green"){
      changeDisplayText("green clicked")
    } else if (color === "blue"){
      changeDisplayText("blue clicked")
    } else {
      changeDisplayText("")
    };

  });
};

var mouseHoverOnButton = function(color){
  if (color === "red"){
    changeDisplayText("About Us")
  } else if (color === "green"){
    changeDisplayText("Products")
  } else if (color === "blue"){
    changeDisplayText("Contact Us")
  } else {
    changeDisplayText("")
  };

  // case statement
  // if (color === "red"){
    // then
  // }
}


var changeDisplayText = function(buttonInput){
  var textValue = buttonInput
  $("p.textdisplay").text(textValue);
};



// var getLocationOfMouse = function(){
//   $('.container').on('click', function(event){
//   // $('body').on('click', function(event){
//     event.preventDefault();

//     // var buttonContainer =  610, 349  -  720, 443
//     // if ((event.pageX >= 610 && event.pageX <= 720) && (event.pageY >= 349 && event.pageY <= 443)){
//     //   function

//     // }else{

//     // };


//     console.log("Hello");
//     // console.log(event.pageX, event.pageY)

//   });
// };


// document.body.width
// document.body.height
// .container.width
// .container.height


// 800pm
