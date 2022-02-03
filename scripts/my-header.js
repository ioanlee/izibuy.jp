Vue.component("my-header", {
  template: ` <div ref="header" class="header loginOn">                    
                    <nav id="nav">
                        <a href="../pages/404.html">О компании</a>
                        <a href="../pages/payments.html">Оплата</a>
                        <a href="../pages/adresses.html">Доставка</a>
                        <a href="../pages/404.html">Контакты</a>
                        <a href="../pages/404.html">Помощь</a>
                        <a href="" class="currency-select">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#E1BBA5"/>
                            <circle cx="12" cy="12" r="9.5" stroke="white"/>
                            <path d="M9.02507 6.678H11.8641C12.4307 6.678 12.9577 6.746 13.4451 6.882C13.9324 7.018 14.3517 7.222 14.7031 7.494C15.0657 7.766 15.3434 8.106 15.5361 8.514C15.7401 8.922 15.8421 9.398 15.8421 9.942C15.8421 11.064 15.4794 11.9253 14.7541 12.526C14.0287 13.1267 13.0031 13.427 11.6771 13.427H10.3511V18H9.02507V6.678ZM11.6771 12.305C12.6744 12.305 13.3884 12.1067 13.8191 11.71C14.2611 11.3133 14.4821 10.741 14.4821 9.993C14.4821 9.67567 14.4311 9.381 14.3291 9.109C14.2384 8.837 14.0797 8.60467 13.8531 8.412C13.6377 8.21933 13.3544 8.072 13.0031 7.97C12.6517 7.85667 12.2267 7.8 11.7281 7.8H10.3511V12.305H11.6771Z" fill="#8C3E7D"/>
                            <path d="M7.39307 13.342H16.6071V14.379H7.39307V13.342Z" fill="#8C3E7D"/>
                            </svg>
                        </a>
                        <a href="" class="language-select">
                            <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="39" height="8" fill="white"/>
                            <rect y="8" width="39" height="8" fill="#107DE2"/>
                            <rect y="16" width="39" height="8" fill="#F61358"/>
                            <rect x="0.5" y="0.5" width="38" height="23" stroke="black" stroke-opacity="0.25"/>
                            </svg>
                        </a>
                    </nav>
                    <div class="header__sticky-bar">
                        <a class="logo" href="/">
                            <picture>
                                <source media="(min-width: 1024px)" srcset="../images/logos/logo_izibuy.svg">
                                <img src="../images/logos/logo_mobile.svg" alt="Логотип">
                            </picture>
                        </a>
                        <input type="search" name="" id="" placeholder="найти">
                        <div class="header__bottom-bar">
                            <a id="catalog-open" href="..pages/catalog" class="mobile-catalog-button" @click.prevent="openCatalog">
                                <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.790649 25.1163L12.7906 25.1163" stroke="#757575" stroke-width="4" stroke-miterlimit="10"/>
                                    <path d="M0.790649 13.5581L12.7906 13.5581" stroke="#757575" stroke-width="4" stroke-miterlimit="10"/>
                                    <path d="M0.511597 2L36.5116 2" stroke="#757575" stroke-width="4" stroke-miterlimit="10"/>
                                    <path d="M27.093 25.8139C31.7168 25.8139 35.4651 22.0656 35.4651 17.4419C35.4651 12.8181 31.7168 9.06976 27.093 9.06976C22.4693 9.06976 18.7209 12.8181 18.7209 17.4419C18.7209 22.0656 22.4693 25.8139 27.093 25.8139Z" stroke="#757575" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M35.1304 23.3579L34.0698 22.2973L31.9484 24.4186L33.0091 25.4793L35.1304 23.3579ZM38.5905 31.0607C39.1763 31.6465 40.126 31.6465 40.7118 31.0607C41.2976 30.4749 41.2976 29.5251 40.7118 28.9393L38.5905 31.0607ZM33.0091 25.4793L38.5905 31.0607L40.7118 28.9393L35.1304 23.3579L33.0091 25.4793Z" fill="#757575"/>
                                </svg>                            
                            </a>
                            <a id="favorite-icon" class="favorite" href="../pages/favs.html">
                                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7082 16.0341C18.2886 18.6023 15.4233 20.5879 13.6858 21.6764C13.3421 21.8901 12.9569 22 12.5706 22C12.1017 22 11.6522 21.8454 11.2621 21.5395C9.68707 20.3024 7.08684 18.0964 4.88948 15.4688C2.66094 12.8039 1 9.88481 1 7.20241C1 3.72568 3.65018 1 6.78074 1C8.49916 1 10.1255 1.8093 11.2395 3.25824L11.24 3.25895C11.6595 3.80344 12.2992 4.13461 13 4.13461C13.7008 4.13461 14.3405 3.80344 14.76 3.25895L14.7605 3.25824C15.8745 1.8093 17.5008 1 19.2193 1C22.3498 1 25 3.72568 25 7.20241C25 10.4069 23.1474 13.4452 20.7082 16.0341Z" fill="" stroke="" stroke-width="2"/>
                                </svg>
                            </a>
                            <a id="cart-icon" class="cart" href="../pages/cart.html">
                                <svg width="35" height="30" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.785034 1.5H8.70738L11.8388 21.541H28.5824C30.4425 21.541 32.0113 20.1506 32.2336 18.3063L33.22 10.1615C33.4862 7.96948 31.7764 6.04054 29.5688 6.04054H13.9901" stroke="#757575" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M14.2922 26.5844C15.5581 26.5844 16.5844 25.5581 16.5844 24.2922C16.5844 23.0262 15.5581 22 14.2922 22C13.0262 22 12 23.0262 12 24.2922C12 25.5581 13.0262 26.5844 14.2922 26.5844Z" stroke="#757575" stroke-width="1.5"/>
                                    <path d="M27.2922 26.5844C28.5581 26.5844 29.5844 25.5581 29.5844 24.2922C29.5844 23.0262 28.5581 22 27.2922 22C26.0262 22 25 23.0262 25 24.2922C25 25.5581 26.0262 26.5844 27.2922 26.5844Z" stroke="#757575" stroke-width="1.5"/>
                                    <path d="M13.6049 11H29.1961" stroke="#757575" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M15.1925 15.6782H27.6085" stroke="#757575" stroke-width="2" stroke-miterlimit="10"/>
                                </svg>                           
                            </a>
                            <a ref="profile" id="profile-button" class="profile profile--loginOn" @click.prevent="openModal" href="#">
                                <svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9999 18.5301C19.0257 18.5301 23.0999 14.4559 23.0999 9.43008C23.0999 4.40429 19.0257 0.330078 13.9999 0.330078C8.9741 0.330078 4.89989 4.40429 4.89989 9.43008C4.89989 14.4559 8.9741 18.5301 13.9999 18.5301Z" fill=""/>
                                <path d="M15.56 19.94H12.44C5.83999 19.94 0.48999 25.29 0.48999 31.89V35.03C4.37999 37.54 9.01999 39 14 39C18.98 39 23.62 37.54 27.51 35.03V31.89C27.51 25.29 22.16 19.94 15.56 19.94Z" fill=""/>
                                </svg>
                            </a>
                            <div ref="userNav" id="userNav" class="user-nav">
                                <span class="closeUserNav">
                                    <a class="closeUserNav__link" href="/"  @click.prevent="openModal">
                                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.602 6.034L3.402 3.556L0.602 1.092L1.176 0.448L4.676 3.514L1.176 6.622L0.602 6.034Z" fill="#8C3E7D"/>
                                        </svg>
                                    </a>
                                    <p>Иванов Иван</p>
                                </span>
                                <a href="../pages/orders.html">Заказы</a>
                                <a href="../pages/payments.html">Платежи (85 000р)</a>
                                <a href="../pages/adresses.html">Адреса доставки (2)</a>
                                <a href="../pages/profile.html">Личная информация</a>
                                <a href="" @click.prevent="loginOff">Выход</a>
                            </div>
                        </div>
                    </div>
                </div>
`,

  data: function () {
    return {};
  },
  methods: {
    openModal() {
      if (this.$refs.header.classList.contains("loginOn")) {
        this.$refs.userNav.classList.toggle("user-nav--opened");
      } else {
        document.getElementById("loginPopup").style.display = "block";
      }
    },
    loginOff() {
      this.$refs.header.classList.remove("loginOn");
      this.$refs.profile.classList.remove("profile--loginOn");
      this.$refs.userNav.classList.remove("user-nav--opened");
    },
    openCatalog() {
      document.querySelector(".main-content").style.display = "none";
      document.querySelector(".sidebar").style.display = "block";
    },
  },
});

new Vue({ el: "#app-header" });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const pageWidth = document.body.clientWidth;
  const mobileWidth = 1024;

  if (pageWidth > mobileWidth) {
    window.addEventListener("scroll", function () {
      if (scrollY > 100) {
        header.style.transform = "translateY(-60px)";
        header.style.transition = "0.6s";
      } else {
        header.style.transform = "translateY(0)";
      }
    });
  }
});
