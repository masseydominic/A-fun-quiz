	// $.noConflict();
	$(document).ready(function($){
	$(".test2").click(function (e) {
  
  // Remove any old one
  console.log("hello lame boy");
  // $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();
  
  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  
 // Make it round!
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  
 
  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
});





  // CSS
  
.ripple {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: scale(0);
  position: relative;
  opacity: 1;
}
.rippleEffect {
    animation: rippleDrop .6s linear;
}

@keyframes rippleDrop {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}