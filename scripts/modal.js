import {eventBus} from '../scripts/main.js'

Vue.component('my-popup', {
    template: `
    <div class="overlay" v-if="show" @click.self="closeModal">
        <div class="popup popup--login">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form>
                <p class="form-title">Вход в профиль</p>
                <input type="text" placeholder="E-mail или телефон">
                <a class="help-link" href="#">Зарегистрироваться</a>
                <input type="password" placeholder="Пароль">
                <a class="help-link" href="#">Восстановить пароль</a>
                <span class="unsafe-pc">
                    <input type="checkbox" id="unsafe-pc" checked name="unsafe-pc" value="">
                    <label for="unsafe-pc">Чужой компьютер</label>
                </span>
                <button type="submit">Войти</button>
                <a class="social-login-button" href="#">Войти через Google</a>
                <a class="social-login-button" href="#">Войти через Facebook</a>
            </form>                        
        </div>
    </div>
` ,
    name: "ModalWindow",
    data: function () {
        return {
            show: true
        }
    },
    methods: {
        closeModal: function () {
            this.show = false
        },
         openModal () {
            eventBus.$emit(this.show = true) 
        }
    }
})

new Vue({ el: '#popup-container' })

