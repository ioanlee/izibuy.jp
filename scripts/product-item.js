Vue.component('product-item', {
    template: `
    <a href="../pages/item.html" class="item">
        <div class="item-image"><img src="" alt=""></div>
        <p class="item-description">Одиночный усилитель Mazda 6V6 в хорошем состоянии/Одиночный усилитель Mazda 6V6 в хорошем состоянии</p>
        <span class="item-price">6 824</span>
    </a>
`
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