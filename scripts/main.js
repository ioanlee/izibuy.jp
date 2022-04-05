// import '../scripts/my-header.js'
// import '../scripts/product-item.js'
import '../scripts/sidebar.js'
// import '../scripts/login.js'
// import '../scripts/remindPass.js'
// import '../scripts/product-mini.js'
import '../scripts/index.js'
// import '../scripts/my-footer.js'

$(function() {
    $('header').load('../elements/header.html');
    $('footer').load('../elements/footer.html');
    $('product-item').load('../elements/product-item.html');
    $('large-banner').load('../elements/large-banner.html');
    $('medium-banner').load('../elements/medium-banner.html');

    $('adresses').load('../elements/adresses.html');
    $('bet').load('../elements/bet.html');
    $('cart-item').load('../elements/cart-item.html');
    $('login-popup').load('../elements/login-popup.html');
    $('product-mini').load('../elements/product-mini.html');
    $('remind-pass').load('../elements/remind-pass.html');
    $('tracking-item').load('../elements/tracking-item.html');
    $('favorite-item').load('../elements/favorite-item.html');
    $('sidebar-nav').load('../elements/sidebar-nav.html');

});