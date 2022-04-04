<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../styles/style.css" />
    <title>Document</title>
    <script src="../scripts/vue.min.js"></script>
    <script src="../scripts/index.js"></script>
  </head>

  <body>
    <div class="wrapper">
      <div id="sidebar-container" class="sidebar">
        <sidebar-catalog></sidebar-catalog>
      </div>
      <div class="main-content">
        <header id="app-header">
          <my-header></my-header>
        </header>
        <main>
          <div id="loginPopup"><login-popup></login-popup></div>
          <div id="remindPassPopup"><remind-password-popup></remind-password-popup></div>
          <div id="betPopup"><bet-popup></bet-popup></div>
          
          <?php 
            include_once 'YahooShopping.php';
            translate_page();
            $apikey = get_key_yahoo_shopping();

            $item = 'soup-stock-tokyo_100007a';
            if(isset($_GET["item"])){ $item = $_GET["item"]; }
            $url = "https://shopping.yahooapis.jp/ShoppingWebService/V1/php/itemLookup?&appid=$apikey&responsegroup=large&itemcode=$item";
            $json = unserialize(file_get_contents($url));  
            populate_single($json);
          ?>

          <!-- <div class="product-info"><product-mini></product-mini></div> -->
          <section id="product">
            <div class="similar-goods">
              <h2>Похожие товары</h2>
              <div class="product-container">
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>

              </div>
            </div>
            <div class="viewed-goods">
              <h2>Ранее вы смотрели</h2>
              <div class="product-container">
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
                <product-item></product-item>
              </div>
            </div>
          </section>
        </main>
        <footer id="app-footer">
          <my-footer></my-footer>
        </footer>
      </div>
    </div>
    <script src="../scripts/bet.js"></script>
    <script src="../scripts/main.js" type="module"></script>
  </body>
</html>
