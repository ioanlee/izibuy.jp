<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css" />
    <title>Document</title>
    <script src="../scripts/vue.min.js"></script>
    <script src="../parser/scroll.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
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
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" type="text/javascript"></script>
        <main>
            <!-- // gtranslate start // -->
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
            <script>document.cookie = "googtrans=/jp/ru";</script>
            <!-- // gtranslate end // -->
            <div class="product-container">   
            </div>
        </main>
    </div>
</div>
<script src="../scripts/main.js" type="module"></script>
<script>document.cookie = 'googtrans=/en/ru';</script>
<?php //echo get_exchangerate('JPY','RUB') ?>
</body>
</html>