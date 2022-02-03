Vue.component("adresses", {
  template: `
  <div>
    <add-adress></add-adress>
    <edit-address></edit-address>
    <adresses-list></adresses-list>
  <div>
`,
});

Vue.component("adresses-list", {
  template: `
    <div>        
      <span class="adress-row" v-for="(adress, index) in adresses">
        <p @click="openEditAdress"> {{ adress.position }} </p>
        <button type="button" @click="deleteAdress(index)" class="white-button">Удалить</button>
        <hr>
      </span>
      <button type="button" class="button" @click="openAddAdress">Добавить адрес</button>
    </div>
`,
  data: function () {
    return {
      adresses: [
        {
          position:
            "690000, Россия, г. Владивосток, ул Нейбута, д. 17, кв. 168",
        },
        {
          position:
            "690015, Россия, г. Владивосток, ул Надибаидзе, д. 125, кв. 1956",
        },
      ],
    };
  },
  methods: {
    deleteAdress: function (index) {
      this.adresses.splice(index, 1);
    },
    addAdress: function () {
      let newAdress = {
        position: `${this.index} , ${this.country} , г. ${this.city} , ул ${this.street} , д. ${this.building} , кв. ${this.apartment}`,
      };
      this.adresses.push(newAdress);
    },
    editAdress: function (index) {
      let editedAdress = {
        position: `${this.index} , ${this.country} , г. ${this.city} , ул ${this.street} , д. ${this.building} , кв. ${this.apartment}`,
      };
      this.adresses.splice(index, 1, editedAdress);
    },
    openAddAdress() {
      document.querySelector("#addAdress").style.display = "block";
    },
    openEditAdress() {
      document.querySelector("#editAdress").style.display = "block";
    },
  },
});

Vue.component("add-adress", {
  template: `
            <div class="overlay" id="addAdress" @click.self="closeModal">
              <div class="popup popup--adress">
                <p>Добавить адрес</p>
                <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
                <form method="post" action="#">
                  <select>
                    <option value="Russia" selected>Россия</option>
                    <option value="China">China</option>
                    <option value="USA">USA</option>
                  </select>
                  <input class="index" type="text" placeholder="Индекс" autocomplete="on">
                  <input class="city" type="text" placeholder="Город" autocomplete="on">
                  <input class="street" type="text" placeholder="Улица" autocomplete="on">
                  <input class="building" type="text" placeholder="Дом/Корпус/Строение" autocomplete="on">
                  <input class="apartment" type="text" placeholder="Квартира" autocomplete="on">
                  <button type="submit"  class="button">Добавить</button>
                  <button type="reset" class="reset-button white-button">Отменить</button>
                </form>
              </div>
            </div>
  `,
  methods: {
    closeModal() {
      this.$el.style.display = "none";
    },
  },
});

Vue.component("edit-address", {
  template: `
              <div class="overlay" id="editAdress" @click.self="closeModal">                
                <div class="popup popup--adress-edit">
                  <p>Редактировать адрес</p>
                  <button class="close-button" type="button" aria-label="Закрыть окно" @click="closeModal"></button>
                  <form method="post" action="#">
                    <select>
                      <option value="Russia" selected>Россия</option>
                      <option value="China">China</option>
                      <option value="USA">USA</option>
                    </select>
                    <input class="index" type="text" placeholder="Индекс" autocomplete="on">
                    <input class="city" type="text" placeholder="Город" autocomplete="on">
                    <input class="street" type="text" placeholder="Улица" autocomplete="on">
                    <input class="building" type="text" placeholder="Дом/Корпус/Строение" autocomplete="on">
                    <input class="apartment" type="text" placeholder="Квартира" autocomplete="on">
                    <button type="submit"  class="button">Сохранить</button>
                    <button type="reset" class="reset-button white-button">Отменить</button>
                  </form>
                </div>
              </div>
    `,
  methods: {
    closeModal() {
      this.$el.style.display = "none";
    },
  },
});

new Vue({ el: "#app" });

// у кнопок формы заменить click  на submit чтобы данные уходили на сервер
