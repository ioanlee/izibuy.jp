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
            include '../yahooauctions/YahooAuction.php';
            translate_page();
            
            get_exchangerate('JPY','RUB');
            // populate_items(request_json(build_url('')));
        ?>
        </div>
        </main>
    </div>
</div>
<script src="../scripts/main.js" type="module"></script>
<script>document.cookie = 'googtrans=/en/ru';</script>
</body>
</html>