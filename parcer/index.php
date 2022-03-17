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
        <div class="product-container" style="display:flex; flex-direction:row; flex-wrap: wrap;">    
            <?php 
                include 'lib.php';
                populate_items(get_json()); 
            ?>
        </div>
        </main>
    </div>
</div>
<script src="../scripts/main.js" type="module"></script> 
</body>
</html>