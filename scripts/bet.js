Vue.component('bet-popup', {
    template: `
    <div class="overlay" @click.self="closeModal">
        <div class="popup popup--bet">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
                <p class="form-title">Сделать ставку</p>
                <input type="number" placeholder="Автоставка">
                <p>Ставка будет повышаться автоматически</p>
                <input type="number" placeholder="Снайперская ставка">
                <p>Ставка автоматически разместится в последнюю минуту аукциона</p>
                <button type="submit" class="button" @click.prevent="addToCart">Сделать ставку</button> 
            </form>         
        </div>
    </div>
` ,
    data: function () {
        return {

        }
    },
    methods: {
        closeModal: function () {
            document.getElementById('betPopup').style.display = 'none'
        },
        addToCart() {
            const headerCartIcon = document.querySelector('#cart-icon')
            if (headerCartIcon.classList.contains('cart--active')) {
                document.getElementById('betPopup').style.display = 'none'
            } else {
                headerCartIcon.classList.add('cart--active')
                document.getElementById('betPopup').style.display = 'none'
            }
        }
    }
})

new Vue({ el: '#betPopup' })

//В кнопке сделать ставку заменить click на submit, чтобы значок на корзину навешивался по успешно сделанной ставке и отправленных данных на сервер