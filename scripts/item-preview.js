// Preview card loader
$(document).on("click", ".zoom", function(){
    $(".preview.active").removeClass("active");
    $("html").scrollTop(event.pageY - window.outerHeight * .5);
    $(this).parent().siblings(".preview").addClass("active");
    if ($(".preview.active>.preview__content").length){return}
    else {
        console.log();
        var id = $(this).attr('idx');
        $.get('../yahooshopping/LoadItemPreview.php', { itemId: id }, function(data){
            $('.preview.active').append(data);
            $(".preview.active > .preview__loader").hide();
        })
    }
})

$("*:not(.preview.active)").on("click", function(){
    $(".preview.active").removeClass("active");
});