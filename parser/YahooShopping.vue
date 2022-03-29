<script>
    class YahooShopping {        
        category_from = "yahooshopping";
    }
</script>

<template>
    <div class="item">
        <div ref="productThumb" class="product-thumb">
            <div class="overlay" @click.self="closeModal">
                <div class="product-info">
                    <product-mini></product-mini>
                </div>
            </div>
        </div>
        <div class="item-image">
            <img src="
<!-- '.$imgsrc.' -->
            " alt="">
            <div class="zoom" @click="thumb"></div>
        </div>
        <a href="../pages/item.html#'.$id.'" class="item-description">
<!-- '.$title.' -->
        </a>
        <span class="price-wrapper">
            <span class="item-price">
<!-- '.number_format(floatval($price)*$_COOKIE["JPY/RUB"], 2 ).' -->
            </span>
            <button class="mobile-zoom" @click="thumb"></button>
            <button ref="fav" class="fav" @click="addToFavs" idx="
<!-- '.$id.' -->
            "></button>            
        </span>        
    </div>
</template>