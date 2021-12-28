function elementLoader() {
    $('.item').load('../elements/item.html');
    $('header').load('../elements/header.html');
    $('.sidebar').load('../elements/sidebar.html');
    // $('.preview').load('../elements/preview.html');
}

$(function() {
    elementLoader();
});

function openPreview() {
    // $(#show).style="display: block;"
}