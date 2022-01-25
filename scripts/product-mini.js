Vue.component('product-mini', {
    template: `
    <div class="product">
        <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
        <h1 class="product-title">[XX44]Windows11 or Windows10[ASUS GL752VW]Core i7-6700HQ/ новый товар SSD 240GB/GTX 960M/ память 16GB/Web камера /Office2019/BluRay</h1>
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
                <table>
                    <tr>
                        <th>Начало торгов (Jpn):</th>
                        <td>
                            <span>2021-10-13 10:44:13</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Конец торгов (Jpn):</th>
                        <td>
                            <span>2021-10-13 10:44:13</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Количество:</th>
                        <td>
                            <span>1 шт.</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Состояние товара:</th>
                        <td>
                            <span>б/у</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Раннее завершение:</th>
                        <td>
                            <span>есть</span>
                        </td>
                    </tr>                                
                    <tr>
                        <th>Авто продление:</th>
                        <td>
                            <span>есть</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Стартовая цена:</th>
                        <td>
                            <span>12 000 i</span>
                        </td>
                    </tr>                                
                    <tr>
                        <th>Число ставок:</th>
                        <td>
                            <span>24</span>
                        </td>
                    </tr>                                
                    <tr>
                        <th>Текущая ставка:</th>
                        <td>
                            <span>35 000 i</span>
                        </td>
                    </tr>                                
                    <tr>
                        <th>Блиц цена:</th>
                        <td>
                            <span>42 000 i</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Осталось времени:</th>
                        <td>
                            <span>6 час 30 мин</span>
                        </td>
                    </tr>
                </table>
            </div>
            <img class="logo" src="../images/logos/yahoo.svg" alt="Yahoo logo" height="30" width="160">
            <button type="button" class="button make-bet" @click="makeBet">Сделать ставку</button>
            <button type="button" class="add-favs" @click="addToFavs">Добавить в избранное</button>
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
            this.$el.parentNode.parentNode.style.display = "none"
        },
        display() {
            let current = this.$el.querySelector('.current');
            let ph = event.target.getAttribute('src');
            current.setAttribute('src', ph);
        },
        addToFavs() {
            this.$el.querySelector('.add-favs').classList.toggle('added')
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