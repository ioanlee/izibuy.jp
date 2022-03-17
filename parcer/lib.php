<?php

    function get_json(string $path = NULL){                                         // returns clean JSON from URL request
        $rawjson = shell_exec('python C:\xampp\htdocs\izibuy\parcer\yahoo_auction.py');     // returns unformatted json      
        $cutjson = stripslashes(substr($rawjson, 9, -3));                                   // cuts edges & strips backslashes
        $json    = json_decode($cutjson, true);                                             // decodes json string into associative array
        return $json;
    }
    function read_json_file(string $path){                                          // returns local JSON file data
        ob_start();
        include($path);
        $json = ob_get_contents(); 
        ob_end_clean();
        return $json;
    }
    function print_values($json, ?bool $pretty = true){                             // prints all JSON values to list view
        foreach($json as $key=>$value){
            if (is_string($value)){
                echo "<strong>$key:</strong> $value<br>";
            } 
            else{     
                if($pretty){if(is_int($key)){ echo "<hr>"; }}
                echo "<strong>$key:</strong>";
                if($pretty){echo "<div style='padding-left: 30px;'>";}
                print_values($value, $pretty); 
                if($pretty){echo "</div>";}
            }
        }
    }
    function get_value(string $value, $json){                                       // выборка определенных данных
        $decodedjson = $json;
        foreach($decodedjson as $key=>$keyvalue){
            if($key == $value){
                echo "<strong>$key</strong>\t$keyvalue<br>";
                break;
            }
        }
    }                                                                                   // deprecated
    function populate_items($json){                                                 // populates webpage with elements & adds values for every item
        foreach($json["ResultSet"]["Result"]["Item"] as $key=>$item){   // желательно быстрее + не хардкод []
            echo '
                <div class="item">
                    <div ref="productThumb" class="product-thumb">
                        <div class="overlay" @click.self="closeModal">
                            <div class="product-info">
                                <product-mini></product-mini>
                            </div>
                        </div>
                    </div>
                    <div class="item-image">
                        <img src="'.$item["Image"].'" alt="">
                        <div class="zoom" @click="thumb"></div>
                    </div>
                    <a href="../pages/item.html#'.$item["AuctionID"].'" class="item-description">'.$item["Title"].'</a>
                    <span class="price-wrapper">
                        <span class="item-price">'.floatval($item["CurrentPrice"])*0.88.'</span>
                        <button class="mobile-zoom" @click="thumb"></button>
                        <button ref="fav" class="fav" @click="addToFavs" idx="'.$item["AuctionID"].'"></button>            
                    </span>        
                </div>
            ';
        } 
    }
    
    
    
    
    function populate_item($json){}                                                 // populate single item page with values
    function translate_text(string $string, string $langfrom, string $langto){}     // returns translated text
    function convert_currency(float $value, string $curfrom, string $curto){}       // returns converted currency
    


    

    // YAHOO API CURRENCY CONVERTER
    // function currencyConverter($currency_from,$currency_to,$currency_input){
    //     $yql_base_url = "http://query.yahooapis.com/v1/public/yql";
    //     $yql_query = 'select * from yahoo.finance.xchange where pair in ("'.$currency_from.$currency_to.'")';
    //     $yql_query_url = $yql_base_url . "?q=" . urlencode($yql_query);
    //     $yql_query_url .= "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    //     $yql_session = file_get_contents($yql_query_url);
    //     $yql_json =  json_decode($yql_session,true);
    //     $currency_output = (float) $currency_input*$yql_json['query']['results']['rate']['Rate'];
    //     return $currency_output;
    // }
    // $currency_input = 2;
    // //currency codes : http://en.wikipedia.org/wiki/ISO_4217
    // $currency_from = "JPY";
    // $currency_to = "RUB";
    // $currency = currencyConverter($currency_from,$currency_to,$currency_input);
    // echo $currency_input.' '.$currency_from.' = '.$currency.' '.$currency_to;



    // GOOGLE AUTO TRANSLATE
    // function auto_translate($from_lan, $to_lan, $text){
    //    // do    
    //    $json = json_decode(file_get_contents('https://ajax.googleapis.com/ajax/services/language/translate?v=1.0&q=' . urlencode($text) . '&langpair=' . $from_lan . '|' . $to_lan));
    //    $translated_text = $json['responseData']['translatedText'];
    //     error_reporting(1);
    //     require_once('GTranslate.php');
    //     try{
    //         $gt = new Gtranslate();
    //         $translated_text = $gt->english_to_german($text);    
    //     } catch (GTranslateException $ge){
    //         $translated_text= $ge->getMessage();
    //     }
    //     return $translated_text;
    // }
    // $text = '下敷き';
    // echo translate('jp', 'en', $text);
    // translate('hello','en','ru');



    // ЕСЛИ НЕ ВЫВОДИТ ДАННЫЕ, ТО В ЗАПРОСЕ ЕСТЬ ДАННЫЕ С ОШИБКАМИ
    // НАДО СДЕЛАТЬ ERROR HANDLERS