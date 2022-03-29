<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css" />
    <title>Document</title>
    <script src="../scripts/vue.min.js"></script>
</head>
<body>
<div class="wrapper">
    <div id="sidebar-container" class="sidebar">
        <sidebar-catalog></sidebar-catalog>
        <sidebar-full-filters></sidebar-full-filters>
    </div>
    <div class="main-content">
        <header id="app-header">
            <my-header></my-header>
        </header>
        <main>
            <?php           
                include '../parser/YahooShopping.php';
                translate_page();
                
                // get_exchangerate('JPY','RUB');              // Убрать

                $category   = NULL;
                $query      = NULL;
                $apikey     = "appid=".get_key_yahoo_shopping();

                if ((isset($_GET["q"])) and (
                    $_GET["q"]==NULL)) { echo "Не указана строка запроса.";
                    // echo "<script>document.getElementsByClassName('.skeleton-noborder').style.display = 'none';</script>";
                }
                else {
                    if(isset($_GET["c"]))   { $category = "&genre_category_id=". $_GET["c"]; }
                    if(isset($_GET["q"]))   { $query = "&query=". $_GET["q"]; }
                    
                    $url = "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?$apikey$category$query";
                    $json = get_json($url);
                    // echo "<br><br>".$json["Error"]["Message"]."<br><br>";
                    // print_values($json);
                    // if (($json[1]) or ($json["totalResultsAvailable"] == 0)) { echo "Не удалось найти товары.";}
                    populate_items($json);
                }                
            ?>

            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
            <div class="item skeleton-noborder">
                <div class="item-image skeleton skeleton-image"></div>
                <div class="item-description" style="display:flex; flex-direction: column; gap:8px; padding: 0;">
                    <span class="item-price skeleton skeleton-text"></span> 
                    <span class="item-price skeleton skeleton-text"></span>                     
                    <span class="item-price skeleton skeleton-text"></span>
                </div>    
            </div>
        </main>
    </div>
</div>
<script src="../scripts/main.js" type="module"></script> 
<script src="exchangerate.js"></script>
<script>document.cookie = 'googtrans=/en/ru';</script>
</body>
</html>