Vue.component('my-footer', {
    template: `
    <div class="footer">
        <div class="links">
            <a href="../pages/about.html">О компании</a>
            <a href="../pages/payment.html">Оплата</a>
            <a href="../pages/delivery.html">Доставка</a>
            <a href="../pages/contacts.html">Контакты</a>
            <a href="../pages/help.html">Помощь</a>
            <a href="https://delomain.com/" class="copyright">© 2021 Разработано Digital Agency “Delomain”</a>
        </div>    
        <span>
            <a class="logo" href="/">
                <picture>
                    <source media="(min-width: 1024px)" srcset="../images/logos/logo_izibuy.svg">
                    <img src="../images/logos/logo_mobile.svg" width="110" height="35" alt="Логотип">
                </picture>  
            </a>
            <img width="90" height="20" src="../images/icons/mastercard.svg""></img>
            <img width="90" height="20" src="../images/icons/masterpass.svg""></img>
            <img width="90" height="20" src="../images/icons/mir.svg""></img>
            <img width="90" height="20" src="../images/icons/visa.svg""></img>
            <img width="90" height="20" src="../images/icons/applepay.svg""></img>
            <img width="90" height="20" src="../images/icons/googlepay.svg""></img>
        </span>


    </div>
    `
})

new Vue({ el: "#app-footer" });