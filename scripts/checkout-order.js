Vue.component("checkout-order", {
  template: `
    <div class="overlay" @click.self="closeModal">
        <div class="popup popup--checkout-order">
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
            <form method="get" action="#">
                <p class="form-title">Адрес доставки</p>
                <input type="radio" value="1" name="selectedAdress" id="first-adress" checked>
                <label for="first-adress">690000, Россия, г. Владивосток, ул Нейбута, д. 17, кв. 168</label>
                <input type="radio" value="2" name="selectedAdress" id="second-adress">
                <label for="second-adress">690015, Россия, г. Владивосток, ул Надибаидзе, д. 125, кв. 1956</label>
                <a href="../pages/adresses.html">Добавить адрес</a>
                <button type="submit" class="button">Подтвердить</button>
                <button type="button" class="white-button" @click="closeModal">Отменить</button> 
            </form>         
        </div>
    </div>
`,
  data: function () {
    return {};
  },
  methods: {
    closeModal: function () {
      document.getElementById("checkout-order-container").style.display =
        "none";
    },
  },
});

new Vue({ el: "#checkout-order-container" });

//В кнопке сделать ставку заменить click на submit, чтобы значок на корзину навешивался по успешно сделанной ставке и отправленных данных на сервер
