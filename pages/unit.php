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
        <sidebar-full-filters></sidebar-full-filters>
      </div>
      <div class="main-content">
        <header id="app-header">
          <my-header></my-header>
        </header>
        <main>
          <div id="loginPopup">
            <login-popup></login-popup>
          </div>
          <div id="remindPassPopup">
            <remind-password-popup></remind-password-popup>
          </div>
          <div id="betPopup">
            <bet-popup></bet-popup>
          </div>
          <div class="bread-crumbs">
            <a href="../pages/catalog.html">Электроника</a>
            <a href="../pages/unit.html">Аудиосистемы</a>
          </div>
          <section id="product">
            <h1>Аудиосистемы</h1>
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
              <product-item></product-item>
              <product-item></product-item>
              <product-item></product-item>
              <product-item></product-item>
              <product-item></product-item>
            </div>
            <div class="pagination" style="width: 100%">
              <button type="button" class="showMore">Показать еще</button>
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
