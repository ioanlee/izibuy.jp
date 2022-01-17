Vue.component('remind-password-popup', {
    template: `
    <div class="overlay" @click.self="closeModal">
        <div class="popup popup--remind-password">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
                <p class="form-title">Восстановить пароль</p>
                <input type="text" autocomplete="on" placeholder="E-mail или телефон" required>
                <button class="button" type="submit" @click="sendCode = !sendCode">Далее</button> 
            </form>         
        </div>

        <div class="popup" v-if="sendCode">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
                <p class="form-title">Восстановить пароль</p>
                <p>Вам выслано СМС с кодом</p>
                <input type="number" placeholder="Код" required>
                <button class="button" type="submit" @click="getCode = !getCode">Восстановить пароль</button> 
            </form>  
        </div>

        <div class="popup" v-if="getCode">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="post" action="#">
                <p class="form-title">Введите новый пароль</p>
                <input type="password" placeholder="Пароль" required>
                <input type="password" placeholder="Пароль еще раз" required>
                <button class="button" type="submit" @submit="closeModal">Сменить пароль</button> 
            </form>
        </div>
    </div>
` ,
    data: function() {
        return {
          sendCode: false,
          getCode: false
        }
    },
    methods: {
        closeModal: function () {
            document.getElementById('remindPassPopup').style.display = 'none'
        },
    }
})

new Vue({ el: '#remindPassPopup' })

// в первых 2х формах на button заменить click на submit, чтобы окно менялось после успешной отправки формы
