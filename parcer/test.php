<?php

    include_once "lib.php";
    include_once "YahooAuction.php";

    // $auctionkey = "tVHvT3mtmbwGxfMQEGIA5h.u2re0p1ZXUPheuhhn2OaVt6e1l6HPPaVSz0QrcWy_X5fX7cay6l3HKsyFw9VWyqJ7iEYCrjkEYu0q4zjw1LgLN4s-";
    // $request = "https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?&query=dota&results=20&eappid=$auctionkey";
    // print_values(phpgetjson($request));

    // echo get_auc_key();

    // echo get_auction_key();
    echo build_request("search");