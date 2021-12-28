function elementLoader() {
    $('.item').load('../elements/item.html');
    $('header').load('../elements/header.html');
    $('.sidebar').load('../elements/sidebar.html');
}

$(function() {
    elementLoader();
});
