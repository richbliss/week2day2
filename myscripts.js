
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".navItem").addClass("active");
        $(".logo").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
    $(".navItem").removeClass("active");
    $(".logo").removeClass("active");

    }
});