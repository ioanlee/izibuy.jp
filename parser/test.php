<?php

    include_once "lib.php";
    include_once "YahooAuction.php";

    // $auctionkey = "tVHvT3mtmbwGxfMQEGIA5h.u2re0p1ZXUPheuhhn2OaVt6e1l6HPPaVSz0QrcWy_X5fX7cay6l3HKsyFw9VWyqJ7iEYCrjkEYu0q4zjw1LgLN4s-";
    // $request = "https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?&query=dota&results=20&eappid=$auctionkey";
    // print_values(phpgetjson($request));

    // echo get_auc_key();

    // echo get_auction_key();
    
    // echo build_url("search");
    // echo print_values(request_json(build_url("")));

    // echo 'ねんどろいど Dota 2 クイーン・オブ・ペイン ノンスケール ABS&PVC製 塗装(新品未使用)';

    // echo build_url('');
    // echo $url = request_json($url) . "<br>";
    // echo "<br>". get_exchangerate('JPY','RUB');

    ////////////////////////////////

    // echo get_auction_key()."<br>";
    // $url = build_url("");
    // $json = request_json($url);
    // // print_values($json);
    // $item = $json["ResultSet"]["Result"]["Item"]["1"];
    
    // echo $item["AuctionID"] . '<br>';
    // echo $item["Title"] . '<br>';
    // // echo $item["CategoryId"]["Id"] . '<br>';
    // // echo $item["Seller"]["ItemListUrl"] . '<br>';
    // // echo $item["Seller"]["RatingUrl"] . '<br>';
    // echo $item["ItemUrl"] . '<br>';
    // echo $item["AuctionItemUrl"] . '<br>';
    // echo $item["Image"] . '<br>';
    // echo $item["OriginalImageNum"] . '<br>';
    // echo $item["CurrentPrice"] . '<br>';
    // echo $item["Bids"] . '<br>';
    // echo $item["EndTime"] . '<br>';
    // echo $item["IsReserved"] . '<br>';
    // // echo $item["CharityOption"]["Proportion"] . '<br>';
    // // echo $item["Option"]["StoreIcon"] . '<br>';
    // // echo $item["Option"]["FeaturedIcon"] . '<br>';
    // // echo $item["Option"]["NewItemIcon"] . '<br>';
    // // echo $item["Option"]["EasyPaymentIcon"] . '<br>';
    // // echo $item["Option"]["IsBold"] . '<br>';
    // // echo $item["Option"]["IsBackGroundColor"] . '<br>';
    // // echo $item["Option"]["IsOffer"] . '<br>';
    // // echo $item["Option"]["IsCharity"] . '<br>';
    // echo $item["IsAdult"] . '<br>';

    $base       = "https://auctions.yahooapis.jp/AuctionWebService/V";
    $method     = "1/saleCampaign?";
        $results    = "";//&results="   . "10";
        $key        = "&appid="     . get_auction_key();
    $filters    = "$results$key";
    
    $url = "$base$method$filters";
    echo "<a href='$url' target='_blank'>$url</a>";
    // fopen($url,'r');






    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&eappid=kVX4Ha5eyhdty70DWjRqCvDeJPJI8VjiVtBTqvp9
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&eappid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&eappid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&eappid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&eappid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&eappid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionId=1041438083&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionid=1041438083&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-
    
    
    
    
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=1041438083$appid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-






    // если написано bad request, то возможно нужен другой eappid



    // https://auctions.yahooapis.jp/AuctionWebService/V   2/sellingList?  &sellerID=megu3ho3      &eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    
    
    
    
    // https://auctions.yahooapis.jp/AuctionWebService/V   2/auctionItem?  &auctionid=1041438083   &eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    //                                                     2/auctionItem?
    //                                                     2/auctionItem?

