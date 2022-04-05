<?php include_once 'YahooShopping.php'; ?>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    // https://developer.yahoo.co.jp/webapi/shopping/shopping/v3/itemsearch.html
    filters = {};

    if (true) { $.extend(filters, { minprice: 0 }); }
    if (true) { $.extend(filters, { maxprice: 10000 }); }
    if (true) { $.extend(filters, { brand: [] }); }
    if (true) { $.extend(filters, { results: 20 }); }
    if (true) { $.extend(filters, { isinstock: true }); }
    if (true) { $.extend(filters, { isdiscounted: true }); }
    
    console.log(filters);   

</script>