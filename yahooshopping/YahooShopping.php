<?php 
    
    include_once '../lib/simple_html_dom.php';
    include_once '../config.php';

    error_reporting(0);

    function build_url(){
        return "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-&query=soup";   
             // https://shopping.yahooapis.jp/ShoppingWebService/V1/php/itemSearch?appid=dj00aiZpPW42bWdCR2x5NEhFNyZzPWNvbnN1bWVyc2VjcmV0Jng9Y2Q-&query=soup
 
    }
    function get_json(string $url){
        $rawjson    = file_get_contents($url);
        // $cutjson    = substr($rawjson, 7, -1);
        $jsonarray  = json_decode($rawjson, true);
        return $jsonarray;
    }
    function get_exchangerate(string $currfrom, string $currto){        // ОЧЕНЬ МЕДЛЕННО
        $url    = "https://www.marketwatch.com/investing/currency/$currfrom$currto";
        $html   = file_get_html($url);
        $target = 'bg-quote[class="value"]';
        // return $_COOKIE["$currfrom/$currto"] = $html->find("$target", 0)->plaintext;
        return setcookie("$currfrom/$currto", $html->find("$target", 0)->plaintext, time()+900);
        // echo get_exchangerate('JPY', 'RUB');
        // 0.8811
    }
    function check_cookie(){
        if(!isset($_COOKIE["JPY/RUB"]))     { get_exchangerate('JPY','RUB'); }
    }
    function var_name( $v ) {                                                       // RETURNS VAR NAME
        $trace = debug_backtrace();
        $vLine = file( __FILE__ );
        $fLine = $vLine[ $trace[0]['line'] - 1 ];
        preg_match( "#\\$(\w+)#", $fLine, $match );
        return $match[1];
    }
    function convert(){}
    function translate_page(){
        echo '
            <div id="google_translate_element">
                <div class="skiptranslate goog-te-gadget" dir="ltr" style="display:none">
                    <div id=":0.targetLanguage" class="goog-te-gadget-simple" style="white-space: nowrap;">
                        <img
                            alt=""
                            src="https://www.google.com/images/cleardot.gif" 
                            class="goog-te-gadget-icon" 
                            style="background-image: url(&quot;https://translate.googleapis.com/translate_static/img/te_ctrl3.gif&quot;); background-position: -65px 0px;"
                        >
                        <span style="vertical-align: middle;">
                            <a aria-haspopup="true" class="goog-te-menu-value" href="javascript:void(0)">
                                <span>Select Language</span>
                                <img src="https://www.google.com/images/cleardot.gif" alt="" width="1" height="1">
                                <span style="border-left: 1px solid rgb(187, 187, 187);">​</span>
                                <img src="https://www.google.com/images/cleardot.gif" alt="" width="1" height="1">
                                <span aria-hidden="true" style="color: rgb(155, 155, 155);">▼</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({
                        pageLanguage: "ru", 
                        includedLanguages: "ar,ru,zh-CN", 
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
                        multilanguagePage: true
                    }, "google_translate_element");
                }
            </script>
            <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" type="text/javascript"></script> 
        ';
    }
    function populate_single($json){

        function add_thumb_gallery($var){
            echo "<img src='".$var["Image"]["Medium"]."' alt='".$var["Image"]["Id"]."' class='thumb'></img>";
            $pics = $var['RelatedImages'];
            if ($pics == "") { return; }
            else {
                foreach($pics as $values){                
                    if(is_array($values))  {
                        $imgalt = $values['Id'];
                        $imgsrc = $values['Small'];
                        print "<img src='$imgsrc' alt='$imgalt' class='thumb'></img>";
                    }   
                }
            }
        }
        check_cookie();
        $item = $json["ResultSet"][0]["Result"][0];
        
        $id             = $item["Code"];
        $url            = $item["Url"];
        $title          = $item["Name"];
        $headline       = $item["Headline"];
        $condition      = $item["Condition"];
        $description    = $item["Description"];
        $Additional3    = $item["Additional3"];
        $rating         = $item["Review"]["Rate"];
        $imgalt         = $item["Image"]["Id"];
        $imgsrc         = $item["Image"]["Medium"];
        $price          = $item["Price"]["_value"];     
        $currency       = $item["Price"]["_attributes"]["currency"];// JPY
        $currfrom       = $currency;
        $currto         = "RUB";        
        $category       = $item["ProductCategory"]["ID"];

        $isbargain      = $item["IsBargain"];
        $rating         = $item["Review"]["Rate"];
        $ratingcount    = $item["Review"]["Count"];
        $taxincluded    = $item["PriceLabel"]["_attributes"]["taxIncluded"];
        if ($item["Availability"] == 'instock') {$instock = "да";}
        else                                    {$instock = "нет";}
        $amount         = $item["Inventories"][0]["Quantity"];
        $paymentcode0   = $item["Payment"][0]["Code"];
        $paymentname0   = $item["Payment"][0]["Name"];
        $paymentcode1   = $item["Payment"][1]["Code"];
        $paymentname1   = $item["Payment"][1]["Name"];
        $paymentcode2   = $item["Payment"][2]["Code"];
        $paymentname2   = $item["Payment"][2]["Name"];
        $shippingcode   = $item["Shipping"]["Code"];
        $shippingname   = $item["Shipping"]["Name"];
        $isadult        = $item["IsAdult"];

        echo "        
            <div class='bread-crumbs'>
                <a category-id='$category' href='#'>Компьютеры</a>      <!-- /category/$category -->
                <a category-id='' href='#'>Ноутбуки</a>
            </div>
            <div ref='product' class='product'>
                <button class='close-button' type='button' aria-label='Закрыть окно' @click='closeModal'></button>
                <p class='product-title'>$title</p>
                <div class='product-photos'>   
                    <div class='full-wrapper'>
                        <img src='$imgsrc' alt='$imgalt' class='current'></img>
                    </div>                                               
                    <div class='thumbnails-wrapper' @click.stopPropagation='display'>
                    "; 
                        add_thumb_gallery($item);
                    echo "
                    </div>
                </div>
                <div class='product-desc'>
                    <div class='text-content'>
                            <span class='table-row'><span class='parameter'>Цена:</span><span class='value'>$price JPY (".$price*$_COOKIE['JPY/RUB']." RUB)</span></span>
                            <span class='table-row'><span class='parameter'>Тип:</span><span class='value'>$headline</span></span>
                            <span class='table-row'><span class='parameter'>Состояние:</span><span class='value'>$condition</span></span>
                            <span class='table-row'><span class='parameter'>В наличии:</span><span class='value'>$instock</span></span>
                            <span class='table-row'><span class='parameter'>Рейтинг:</span><span class='value'>$rating</span></span>
                            <span class='table-row'><span class='parameter'>Количество:</span><span class='value'>$amount шт.</span></span>
                            <span class='table-row'><span class='parameter'>Категория:</span><span class='value'><a href='/izibuy/yahooshopping/search?c=$category'>$category</a></span></span>
                    </div>
                    <a href='$url' target='_blank'><img class='logo' src='../images/logos/yahoo.svg' alt='Yahoo logo' height='30' width='160'></a>
                    <a><button type='button' class='button make-bet' @click='makeBet();closeModal();'>Сделать ставку</button></a>
                    <!-- <button type='button' class='button make-bet' @click='makeBet();closeModal();'>Сделать ставку</button> -->
                    <button idx='$id' type='button' ref='addFavs' class='add-favs' @click='addToFavs'>Добавить в избранное</button>
                </div>
            </div>
            <div class='product-details'>
                <p>$description</p>
                <p>$Additional3</p>
            </div>
        ";
    }
    function populate_items($json){
        $izibuy_rate = get_izibuy_rate();
        $_COOKIE["JPY/RUB"] = .9;   // fixed, change with get_exchangerate('JPY','RUB')
        
        foreach($json["hits"] as $key=>$item){   // желательно быстрее + не хардкод []
            $id     = $item["imageId"];
            $url    = $item["url"];
            $title  = $item["name"];
            $imgalt = $item["imageId"];
            $imgsrc = $item["image"]["medium"];
            $price  = number_format(floatval($item["price"])*$_COOKIE["JPY/RUB"]*$izibuy_rate, 2 );
            
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
                        <img src="'.$imgsrc.'" alt="'.$imgalt.'" style="width: 100%;">
                        <div class="zoom" @click="thumb"></div>
                    </div>
                    <a href="./item?item='.$id.'" target="_blank" class="item-description">'.$title.'</a>
                    <span class="price-wrapper">
                        <span class="item-price">'.$price.'</span>
                        <!-- <span class="item-price">'.$price.'</span> -->
                        <button class="mobile-zoom" @click="thumb"></button>
                        <button ref="fav" class="fav" @click="addToFavs" idx="'.$id.'"></button>            
                    </span>        
                </div>
            ';
        }
    }