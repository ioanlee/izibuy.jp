Vue.component('my-header', {
    template: ` <div class="header">
                    <nav>
                        <a href="">О компании</a>
                        <a href="">Оплата</a>
                        <a href="">Доставка</a>
                        <a href="">Контакты</a>
                        <a href="">Помощь</a>
                        <a href="" class="currency-select"></a>
                        <a href="" class="language-select"></a>
                    </nav>
                    <div class="header__sticky-bar">
                        <a class="logo"><img src="./images/logos/logo_izibuy.svg" alt="Логотип"></a>
                        <input type="search" name="" id="" placeholder="найти">
                        <a class="favorite" href=""></a>
                        <a class="profile" href=""></a>
                    </div>     
                </div>               
` 
})

new Vue({ el: '#app-header' })
