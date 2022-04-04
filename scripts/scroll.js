results = 10;
start   = 0;
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

// $(document).ready(function () {
//     start += results;
//     $.get('../parser/LoadItems.php', { results_amount: results, start_position: start, q: $_GET['q']}, function(data){
//         $('.product-container').append(data);
//     })
// });

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        start += results;
        $.get('../parser/LoadItems.php', { results_amount: results, start_position: start, q: $_GET['q']}, function(data){
            $('.product-container').append(data);
        })
    }
};