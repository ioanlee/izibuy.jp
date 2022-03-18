<?php

    function build_request(string $methodtype){
        $auctionkey = "&eappid=" . get_auction_key();
        $base = "https://auctions.yahooapis.jp/AuctionWebService/V";
        $method = "2/json/search?";
            $query = "&query="."dota";
            $results = "&results="."20";
        $filters = "$query$results";
        $url = "$base$method$filters$auctionkey";
        return $url;
    }
    function request_json($url){                                        // returns clean JSON from URL request
        $rawjson      = file_get_contents($url);                                     // returns unformatted json          
        $cutjson      = stripslashes(substr($rawjson, 7, -1));                              // cuts edges & strips backslashes
        $decodedjson  = json_decode($cutjson, true);                                        // decodes json string into associative array
        return $decodedjson;
    }       //  НАПИСАТЬ ЗАПРОС НА JSON
    function get_auction_key(){
        // $url = "https://page.auctions.yahoo.co.jp/jp/auction/1041438083";
        // $html = htmlspecialchars(file_get_contents($url));     //htmlentities()
        
        // SCRAPE KEY FROM HTML RAW DATA

        $apikey = "tVHvT3mtmbwGxfMQEGIA5h.u2re0p1ZXUPheuhhn2OaVt6e1l6HPPaVSz0QrcWy_X5fX7cay6l3HKsyFw9VWyqJ7iEYCrjkEYu0q4zjw1LgLN4s-";
        return $apikey;}