//Spectrum Gallery - Development 
//Author: Pete Farris 
//For: Spectrum Resorts, Marketing
//Version: 0.1 - Development 

//ChangeLog:: 
/* 
    1. Show. Hide. and partail resize functions created. ** 
    2. UL LInks populated with DATA ATTR for collection 
    3. Pull collection into thumbs, with unlimited thumbs. 
    4. back to gallery link 
    

*/ 

// PRELOAD FUNCTIONS:: 
$('<div id="overlay"></div>').appendTo('body').hide().css({
    zIndex:     889,
    position:   'absolute', 
    background: 'rgba(0,0,0,0.7)',
    top:        0, 
    left:       0, 
    bottom:     0, 
    right:      0, 
}); 
//CSS for gallery wrapper:: 
$('#gallery-wrapper').hide(); 
$('#gallery-container').hide(); 

//CLICK AND INIT FUNCTIONS:: 
$('a[href="#/show-gallery"]').click(function(){ 
   // VERIFIED console.log("gallery link clicked"); 
   $('#overlay').show(500); // Show overlay VERIFIED
   //Show container // Verified:: 
   $('#gallery-wrapper').width($(window).width()/1.5).height($(window).height()/1.2).css({
    position:'absolute',
    left: ($(window).width() - $('#gallery-wrapper').outerWidth())/2,
    top: ($(window).height() - $('#gallery-wrapper').outerHeight())/2,
    zIndex: 900,
  }).delay(500).show(150); 
    
  //Populate Gallery Groups::   
    $('#gallery-nav ul').append(); 
  //    
    
    
    
}); 

//functions: Generate Groups:: 







//END CLOSE FUNCTION:: 
//close function 
$('.close').click(function(){ 
    $('#gallery-wrapper').hide(150); 
    $('#overlay').delay(150).hide(500);
});  

//RESIZE FUNCTIONS:: 
$(window).resize(function() {
  //IF Clause for mobile(2.0)  
    //if window height is less than container hieght, adjust container height 
   
    
  $('#gallery-wrapper').css({
      left: ($(window).width() - $('#gallery-wrapper').outerWidth())/2, 
      top: ($(window).height() - $('#gallery-wrapper').outerHeight())/2,
  }); 
});