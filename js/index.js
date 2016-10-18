$(document).ready(function (){
  $('#search').on( "click", function(evt){
    $(evt.target).css( "width", "25%");
       $(evt.target).one('mouseleave', function(){
        checkInput(evt);
    });   
    
  });
  
  var EnterKey = 13,
      cssVals = {
        "width": "15%",
     },
      checkInput = function(evt) {
        $(evt.target).css(cssVals);
        $(evt.target).val('');
      };
 
   $('#search').keypress(function(evt) {
    if (evt.which === EnterKey && $('#search').val() !== '') {
      checkInput(evt);
    };                                   
    
    });

});