import '../scripts/product-mini.js'

Vue.component('product-item', {
    template: `
    <div class="item">
        <div class="product-thumb">
            <div class="product-info">
                <product-mini></product-mini>
            </div>
        </div>
        <div class="item-image">
            <img src="/images/img_item_thumbnail.jpg" alt="">
            <div class="zoom" @click="thumb"></div>
        </div>
        <a href="../pages/item.html" class="item-description">Одиночный усилитель Mazda 6V6 в хорошем состоянии</a>
        <span class="price-wrapper">
            <span class="item-price">6 824</span>
            <button class="fav" @click="addToFavs"></button>
        </span>
        
    </div>
`,
    methods: {
        addToFavs: function () {
            this.$el.querySelector('.fav').classList.toggle('added')
            const headerFavoriteIcon = document.querySelector('#favorite-icon')
            if (headerFavoriteIcon.classList.contains('favorite--active')) {
                return
            } else {
                headerFavoriteIcon.classList.add('favorite--active')
            }
        },
        thumb: function () {
            this.$el.querySelector('.product-thumb').style.display = "block"
        }
    }
})

Vue.component('large-banner', {
    template: `
    <div class="banners-wrapper large-banner">    
        <div v-for="item in items" class="banner">
            <img v-bind:src="item.img">
            <p>{{ item.description }}</p>
        </div>
    </div>

`,
    data() {
        return {
            items: [
                {
                    description: 'Рыбное место',
                    img: './images/banners/fish.jpg'
                },
                {
                    description: 'Все для похода',
                    img: './images/banners/hike.jpg'
                }
            ]
        }
    }
})

Vue.component('medium-banner', {
    template: `
    <div class="banners-wrapper medium-banner">    
        <div v-for="item in items" class="banner">
            <img v-bind:src="item.img">
            <p>{{ item.description }}</p>
        </div>
    </div>

`,
    data() {
        return {
            items: [
                {
                    description: 'Часы',
                    img: './images/banners/watch.jpg'
                },
                {
                    description: 'Ноутбуки',
                    img: './images/banners/laptop.jpg'
                },
                {
                    description: 'Косметика',
                    img: './images/banners/asian-girl.jpg'
                }
            ]
        }
    }
})

new Vue({ el: '#product' })