Vue.component('remind-password-popup', {
    template: `
    <div class="overlay" @click.self="closeModal">
        <div class="popup popup--remind-password">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
            <p class="form-title">Восстановить пароль</p>
            <p v-if="submit">Вам выслано СМС с кодом</p>
            <input type="text" autocomplete="on" placeholder="E-mail или телефон" required>
            <button type="submit" v-on:submit="submit = !submit">Далее</button>
            </form>         
        </div>
    </div>
` ,
    data: function() {
        return {
          submit: false  
        }
    },
    methods: {
        closeModal: function () {
            document.getElementById('remindPassPopup').style.display = 'none'
        },
    }
})

new Vue({ el: '#remindPassPopup' })

