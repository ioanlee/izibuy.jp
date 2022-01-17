Vue.component('login-popup', {
    template: `
    <div class="overlay" @click.self="closeModal">
        <div v-if="!registerActive" class="popup popup--login">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
                <p class="form-title">Вход в профиль</p>
                <input type="text" autocomplete="on" placeholder="E-mail или телефон" required>
                <a class="help-link" href="#" @click="registerActive = !registerActive">Зарегистрироваться</a>
                <input type="password" placeholder="Пароль" required>
                <a class="help-link" href="#" @click="remindPassword">Восстановить пароль</a>
                <span class="unsafe-pc">
                    <input type="checkbox" id="unsafe-pc" checked name="unsafe-pc" value="" required>
                    <label for="unsafe-pc">Чужой компьютер</label>
                </span>
                <button class="button" type="submit">Войти</button>
                <a class="social-login-button" href="#">Войти через Google</a>
                <a class="social-login-button" href="#">Войти через Facebook</a>
            </form>                        
        </div>

        <div v-else class="popup popup--registration">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
                <p class="form-title">Регистрация</p>
                <input type="email" autocomplete="on" placeholder="E-mail" required>
                <input type="telephone" autocomplete="on" placeholder="Телефон" required>
                <input type="password" placeholder="Пароль" required>
                <input type="password" placeholder="Пароль еще раз" required>
                <span class="no-robot">
                    <input type="checkbox" id="no-robot" checked name="no-robot" value="">
                    <label for="no-robot">Я не робот</label>
                </span>
                <button class="button" type="submit">Зарегистрироваться</button>
                <p>Уже есть акаунт?<a href="#" @click="registerActive = !registerActive">Войти</a></p>
            </form>           
        </div>
    </div>
` ,
    data: function() {
        return {
          registerActive : false  
        }   
    },
    methods: {
        closeModal: function () {
            document.getElementById('loginPopup').style.display = 'none'
        },
        remindPassword: function () {
            document.getElementById('loginPopup').style.display = 'none'
            document.getElementById('remindPassPopup').style.display = 'block'
        },

    }
})

new Vue({ el: '#loginPopup' })

