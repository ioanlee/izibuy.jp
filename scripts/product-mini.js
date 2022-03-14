Vue.component('product-mini', {
    template: `
    <div ref="product" class="product">
        <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
        <p class="product-title">Ноутбук 15.6" Acer A515-55G-52ZS i5-1035G1 Чёрный</p>
        <div class="product-photos">   
            <div class="full-wrapper">
                <img src="../images/img-item.jpg" alt="full" class="current"></img>
            </div>                                               
            <div class="thumbnails-wrapper" @click.stopPropagation="display">
                <img src="../images/img-item.jpg" alt="laptop" class="thumb"></img>
                <img src="../images/item/item3.jpg" alt="keyboard" class="thumb"></img>
                <img src="../images/item/item4.jpg" alt="parameters" class="thumb"></img>
                <img src="../images/item/item1.jpg" alt="left side" class="thumb"></img>
                <img src="../images/item/item2.jpg" alt="right side" class="thumb"></img>
                <img src="../images/item/item5.jpg" alt="right side" class="thumb"></img>
            </div>
        </div>
        <div class="product-desc">
            <div class="text-content">                
                    <span class="table-row">
                        <span class="parameter">Начало торгов (Jpn):</span>
                        <span class="value">2021-10-13 10:44:13</span>
                    </span>
                    <span class="table-row">
                        <span class="parameter">Конец торгов (Jpn):</span>
                        <span class="value">2021-10-13 10:44:13</span>
                    </span>
                    <span class="table-row">
                        <span class="parameter">Количество:</span>
                        <span class="value">1 шт.</span>
                    </span>
                    <span class="table-row">
                        <span class="parameter">Состояние товара:</span>
                        <span class="value">б/у</span>
                    </span>
                    <span class="table-row">
                        <span class="parameter">Раннее завершение:</span>
                        <span class="value">есть</span>
                    </span>                                
                    <span class="table-row">
                        <span class="parameter">Авто продление:</span>
                        <span class="value">есть</span>
                    </span>
                    <span class="table-row">
                        <span class="parameter">Стартовая цена:</span>
                        <span class="value">12 000 i</span>
                    </span>                                
                    <span class="table-row">
                        <span class="parameter">Число ставок:</span>
                        <span class="value">24</span>
                    </span>                                
                    <span class="table-row">
                        <span class="parameter">Текущая ставка:</span>
                        <span class="value">35 000 i</span>
                    </span>                                
                    <span class="table-row">
                        <span class="parameter">Блиц цена:</span>
                        <span class="value">42 000 i</span>
                    </span>
                    <span class="table-row">
                        <span class="parameter">Осталось времени:</span>
                        <span class="value">6 час 30 мин</span>
                    </span>                
            </div>
            <img class="logo" src="../images/logos/yahoo.svg" alt="Yahoo logo" height="30" width="160">
            <button type="button" class="button make-bet" @click="makeBet();closeModal();">Сделать ставку</button>
            <button type="button" ref="addFavs" class="add-favs" @click="addToFavs">Добавить в избранное</button>
        </div>
    </div>
`,
    data: function() {
        return {

        }
    },
    methods: {
        makeBet() {
            let betPopup = document.getElementById('betPopup')
            betPopup.style.display = 'block'
            betPopup.querySelector('.popup--bet').style.display = "block"
            
        },
        closeModal() {
            const parent = this.$refs.product.parentNode.parentNode.parentNode
            if (parent.classList.contains('product-thumb')) {
                parent.style.display = "none"
            }            
        },
        display() {
            let current = this.$el.querySelector('.current');
            let ph = event.target.getAttribute('src');
            current.setAttribute('src', ph);
        },
        addToFavs() {
            this.$refs.addFavs.classList.toggle('added')
            const headerFavoriteIcon = document.querySelector('#favorite-icon')
            if (headerFavoriteIcon.classList.contains('favorite--active')) {
                return
            } else {
                headerFavoriteIcon.classList.add('favorite--active')
            }
        }
    },
    export: {
        name: 'product-mini'
    }
})

new Vue({ el: '.product-info' })