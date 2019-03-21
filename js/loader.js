$(window).on('load', function() {
    // Show the scoll
    $("body").css("overflow","auto");
    // Loading Element
    $(".loading-overlay .sk-folding-cube").fadeOut(1000,
        function(){
            $(this).parent().fadeOut(2000,
                function(){
                    $(this).remove();
                });
        });
    
    
});