Vue.component("cart-item-win", {
  template: `
    <div class="cart-item">
        <div class="thumbnail-wrapper">
            <img src="../images/item/macbook-win.jpeg" height="160" width="170" alt="">
        </div>
        <div class="info-wrapper">
            <div class="timer">
                <span>Вы выиграли лот за 62 000р</span>               
            </div>
            <a href="../pages/item.html">Apple MacBook Pro 13" (M1, 2020) 8 ГБ, 512 ГБ SSD, Touch Bar, «серый космос»</a>
            <button @click="checkoutOrder" type="button" class="button">Оформить доставку</button>
        </div>
        <hr>
    </div>
`,
  data: function () {
    return {};
  },
  methods: {
    checkoutOrder() {
      document.querySelector("#checkout-order-container").style.display =
        "block";
    },
  },
});

Vue.component("cart-item", {
  template: `
    <div class="cart-item">
        <div class="thumbnail-wrapper">
            <img src="../images/item/macbook.jpg" height="160" width="170" alt="">
        </div>
        <div class="info-wrapper">
            <div class="timer">
                <span>Осталось 8 минут</span>               
            </div>
            <a href="../pages/item.html">Apple MacBook Air (M1, 2020) 8 ГБ, 256 ГБ SSD, золотой</a>
            <div class="button-wrapper">
                <span>Ставка: 62 000р (Моя)</span>
                <button type="button" class="text-button max-bet" @click="makeMaxBet">Максимальная ставка: 70 000р</button>
                <button type="button" class="text-button snipe-bet" @click="makeSniperBet">Снайперская ставка: 72 000р</button>
            </div>
        </div>
        <hr>
    </div>
`,
  data: function () {
    return {};
  },
  methods: {
    makeMaxBet() {
      let betPopup = document.getElementById("betPopup");
      betPopup.style.display = "block";
      betPopup.querySelector(".popup--max-bet").style.display = "block";
    },
    makeSniperBet() {
      let betPopup = document.getElementById("betPopup");
      betPopup.style.display = "block";
      betPopup.querySelector(".popup--sniper-bet").style.display = "block";
    },
  },
});

new Vue({ el: "#cart-item-container" });
