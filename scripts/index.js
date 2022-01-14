// function elementLoader() {
//     $('.item').load('../elements/item.html');
//     $('header').load('../elements/header.html');
//     $('.sidebar').load('../elements/sidebar.html');
//     // $('.preview').load('../elements/preview.html');
// }

// $(function() {
//     // elementLoader();//       deprecated
// });

// function openPreview() {
//     // $(#show).style="display: block;"
// }

function updateNumbers() {
    document.getElementById('number-max').value = document.getElementById('range-max').value
    document.getElementById('number-min').value = document.getElementById('range-min').value
}
function updateRange() {
    document.getElementById('range-max').value = document.getElementById('number-max').value
    document.getElementById('range-min').value = document.getElementById('number-min').value
}