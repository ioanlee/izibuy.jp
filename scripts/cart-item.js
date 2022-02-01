Vue.component("cart-item-win", {
  template: `
    <div class="cart-item">
        <div class="thumbnail-wrapper">
            <img src="../images/img-item.jpg" height="160" width="170" alt="">
        </div>
        <div class="info-wrapper">
            <div class="timer">
                <span>Вы выиграли лот за 62 000р</span>               
            </div>
            <a href="../pages/item.html">[XX44]Windows11 or Windows10[ASUS GL752VW]Core i7-6700HQ/ новый товар SSD 240GB/GTX 960M/ память 16GB/Web камера /Office2019/BluRay</a>
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
      document.querySelector("#checkout-order-container").style.display = "block";
    },
  },
});

Vue.component("cart-item", {
  template: `
    <div class="cart-item">
        <div class="thumbnail-wrapper">
            <img src="../images/img-item.jpg" height="160" width="170" alt="">
        </div>
        <div class="info-wrapper">
            <div class="timer">
                <span>Осталось 8 минут</span>               
            </div>
            <a href="../pages/item.html">[XX44]Windows11 or Windows10[ASUS GL752VW]Core i7-6700HQ/ новый товар SSD 240GB/GTX 960M/ память 16GB/Web камера /Office2019/BluRay</a>
            <div class="button-wrapper">
                <span>Текущая ставка: 62 000р (Моя)</span>
                <button type="button" class="text-button" @click="makeMaxBet">Максимальная ставка: 70 000р</button>
                <button type="button" class="text-button" @click="makeSniperBet">Снайперская ставка: 72 000р</button>
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
