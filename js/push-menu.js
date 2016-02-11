// Needs latest version of jQuery to run
$(function(){
    $('body').removeClass('noscript');
    //shows button when js is running
    
    //stes button to toggle data state
    $('.toggle-btn, .close-btn').click(function(){
          toggleNav();                              
     });                                        
});

function toggleNav() {
    if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
        //display nav when closed
        $('.site-wrapper').attr('data-state', 'slide-open');
    } else {
    //hide nav when open
          $('.site-wrapper').attr('data-state', 'slide-closed');

    }
    
    
}