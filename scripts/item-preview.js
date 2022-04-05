$(document).on("click", ".item-image", function(){
    $(".preview.active").removeClass("active");
    $("html").scrollTop(event.pageY - window.outerHeight * .5);
    $(this).children(".preview").addClass("active");
    $(".preview.active > .loader").show();
    //  call data
    // $(".preview.active > .loader").hide();
})

$("*:not(.preview.active)").on("click", function(){
    $(".preview.active").removeClass("active");
});