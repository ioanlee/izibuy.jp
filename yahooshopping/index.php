<?php
    include_once 'YahooShopping.php';
    // translate_page();

    // $_GET["q"] = 'meat';



    // $category   = NULL;
    // $query      = 'NULL';
    // $apikey     = "appid=".get_key_yahoo_shopping();

    // if ((isset($_GET["q"])) and (
    //     $_GET["q"]==NULL)) { echo "Не указана строка запроса.";
    //     // echo "<script>document.getElementsByClassName('.skeleton-noborder').style.display = 'none';</script>";
    // }
    // else {
    //     if(isset($_GET["c"]))   { $category = "&genre_category_id=". $_GET["c"]; }
    //     if(isset($_GET["q"]))   { $query = "&query=". $_GET["q"]; }
        
    //     $url = "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?$apikey$category$query";
    //     $json = get_json($url);
    //     if ($json["totalResultsAvailable"] == 0) {echo "Не удалось найти товары.";}
    //     // echo "<br><br>".$json["Error"]["Message"]."<br><br>";
    //     // print_values($json);
    //     // if (($json[1]) or ($json["totalResultsAvailable"] == 0)) { echo "Не удалось найти товары.";}
    //     else populate_items($json);}

    function getURL(){
    // builds URL and returns it
    // return $url;
    }
    function getJSON(string $amount){
    // returns X amount of posts in JSON
    // return $json;
    }

// <div style="height: fit-content;min-height: 100vh;">
//         function x(int $start, int $end){
//             for ($x = $start; $x <= $end; $x++) {
//                 echo "<div style='width: 100px;height:100px;margin: auto;background-color:cyan;border: 1px solid black'>$x</div>";
//             }
//             echo "<hr>";
//         }

//         $nstart  = 10;
//         $nend    = 15;
//         $namount = 3;
        
//         if (true) {            
//             x($nstart, $nend);        
//             $nstart =+ $nend + 1;
//             $nend = $nend + $namount;
//         }
// </div>