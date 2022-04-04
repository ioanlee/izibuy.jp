<?php           
    include 'YahooShopping.php';
    
    // get_exchangerate('JPY','RUB');              // Убрать


    $results  = "&results=". $_GET['results_num'];
    $start    = "&start=".   $_GET['start_pos'];
    $appid    = "&appid=".   get_key_yahoo_shopping();

    $category = NULL;
    $query    = NULL;

    if ((isset($_GET["q"])) and ($_GET["q"]==NULL)) { echo "Не указана строка запроса."; }
    else {
        if(isset($_GET["c"]))   { $category = "&genre_category_id=".    $_GET["c"]; }
        if(isset($_GET["q"]))   { $query    = "&query=".                $_GET["q"]; }
    }

    $url = "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?$appid$query$start$results$category";
    $json = get_json($url);
    if ($json["totalResultsAvailable"] == 0) {echo "<p style='margin-top: 10px;'>Не удалось найти товары.</p>";}
    else { populate_items($json); }