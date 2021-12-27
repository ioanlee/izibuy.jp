console.log('hello')

$(function() {
    $('.item').load('../elements/item.html');
});

function showPreview() {
    window.onmousemove = function (e) {
        document.getElementById('item-preview').style.top = (e.y - 300 + 20) + 'px';
        document.getElementById('item-preview').style.left = (e.x - 300 + 20) + 'px';
    };
}
