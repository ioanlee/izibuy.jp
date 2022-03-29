<?php
    include_once 'YahooShopping.php';










    // echo get_exchangerate('JPY','RUB');
    // populate_items(request_json(build_url('')));



    //////////////////

    // $auctionkey = "tVHvT3mtmbwGxfMQEGIA5h.u2re0p1ZXUPheuhhn2OaVt6e1l6HPPaVSz0QrcWy_X5fX7cay6l3HKsyFw9VWyqJ7iEYCrjkEYu0q4zjw1LgLN4s-";
    // $request = "https://auctions.yahooapis.jp/AuctionWebService/V2/json/search?&query=dota&results=20&eappid=$auctionkey";
    // print_values(phpgetjson($request));

    // echo get_auc_key();

    // echo get_key_yahoo_auction();

    // print
    
    // echo build_url("search");
    // echo print_values(request_json(build_url("")));

    // echo 'ねんどろいど Dota 2 クイーン・オブ・ペイン ノンスケール ABS&PVC製 塗装(新品未使用)';

    // echo build_url('');
    // echo $url = request_json($url) . "<br>";
    // echo "<br>". get_exchangerate('JPY','RUB');

    ////////////////////////////////

    // echo get_key_yahoo_auction()."<br>";
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

    // $base       = "https://auctions.yahooapis.jp/AuctionWebService/V";
    // $method     = "2/auctionItem?";
    //     $auctionID  = "&auctionID=" . "b1043593720";
    //     $appid      = "&appid="     . "dj0zaiZpPU9jRE5IdWYyQVFOaCZkPVlXazlaVlp6UmxGTE5XRW1jR285TUEtLSZzPWNvbnN1bWVyc2VjcmV0Jng9M2M-";
    // $filters    = "$auctionID$appid";
    
    // $url = "$base$method$filters";
    // echo "<a href='$url' target='_blank'>$url</a>";
    // fopen($url,'r');




    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=dj0zaiZpPU9jRE5IdWYyQVFOaCZkPVlXazlaVlp6UmxGTE5XRW1jR285TUEtLSZzPWNvbnN1bWVyc2VjcmV0Jng9M2M
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=dj00aiZpPVV0TlFMNkIxbTE0MCZzPWNvbnN1bWVyc2VjcmV0Jng9Y2M
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=dj0zaiZpPU9jRE5IdWYyQVFOaCZkPVlXazlaVlp6UmxGTE5XRW1jR285TUEtLSZzPWNvbnN1bWVyc2VjcmV0Jng9M2M
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=.FmPDo.tmbxRI7e.UcoOmf1O2bgs8QYCTQzn1AfGe80Z8NVxFefs1NKQOIWXzFD9Qtv1xGftghJFEpHJoSMvto6q8jlrRDb_gq2MzbMy1idCaIs-
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=Hy5EaxCxg66QNDm0cEojk3JOZS470WbaRqWtIpaQ4Tc7s8v6IK8AO45lFd3bwAwJzlZc
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=mUwgMuKtmbyrG8i_24FghnkW0SdD1TO_xjeJWvpaQ1puGxrT2T.0j0yxqTPBbF06Kzbqn2nlloqee2nwO_YOXRknyD.aoOPRHakvJqLQpaFGSJ4cqh1vfoXDAfySvOg-
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=Wt5u61ytmbyqj5V1AVyw7nR9.B8d4vXcUViMKAmz1grJt5sYHMdYFH1nP2peCCWJ_UPFN580oz0Ss4wNQ_B6uAbqnVEt0KDxvfcQPC3mZo0hTio-

    //  bad request https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=dj0zaiZpPU9jRE5IdWYyQVFOaCZkPVlXazlaVlp6UmxGTE5XRW1jR285TUEtLSZzPWNvbnN1bWVyc2VjcmV0Jng9M2M
    //  bad request https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q
    //  bad request https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=dj00aiZpPVV0TlFMNkIxbTE0MCZzPWNvbnN1bWVyc2VjcmV0Jng9Y2M
    //  bad request https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=dj0zaiZpPU9jRE5IdWYyQVFOaCZkPVlXazlaVlp6UmxGTE5XRW1jR285TUEtLSZzPWNvbnN1bWVyc2VjcmV0Jng9M2M
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=.FmPDo.tmbxRI7e.UcoOmf1O2bgs8QYCTQzn1AfGe80Z8NVxFefs1NKQOIWXzFD9Qtv1xGftghJFEpHJoSMvto6q8jlrRDb_gq2MzbMy1idCaIs-
    //  bad request https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=Hy5EaxCxg66QNDm0cEojk3JOZS470WbaRqWtIpaQ4Tc7s8v6IK8AO45lFd3bwAwJzlZc
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=mUwgMuKtmbyrG8i_24FghnkW0SdD1TO_xjeJWvpaQ1puGxrT2T.0j0yxqTPBbF06Kzbqn2nlloqee2nwO_YOXRknyD.aoOPRHakvJqLQpaFGSJ4cqh1vfoXDAfySvOg-
    //  forbidden   https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&eappid=Wt5u61ytmbyqj5V1AVyw7nR9.B8d4vXcUViMKAmz1grJt5sYHMdYFH1nP2peCCWJ_UPFN580oz0Ss4wNQ_B6uAbqnVEt0KDxvfcQPC3mZo0hTio-


    // https://auctions.yahooapis.jp/AuctionWebService/V2/auctionItem?&auctionID=b1043593720&appid=websearch05ki999

    // если написано bad request, то возможно нужен другой eappid



    // https://auctions.yahooapis.jp/AuctionWebService/V   2/sellingList?  &sellerID=megu3ho3      &eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    
    
    
    
    // https://auctions.yahooapis.jp/AuctionWebService/V   2/auctionItem?  &auctionid=1041438083   &eappid=S46.u6qtmbxvEuZW3QFZLT2YyOIgb0C_KA9DoKBq7uOLJItejcZfQr5k7l54L.7wIvwM8bUP5UnKW3JWzOMN9yK_LdoqlDjVhnSs.hUIKX6ot5I-
    //                                                     2/auctionItem?
    //                                                     2/auctionItem?