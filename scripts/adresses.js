Vue.component('adresses-list', {
    template: `
    <div>
        
        <span class="adress-row" v-for="(adress, index) in adresses">
            <p @click="adressEditActive = true"> {{ adress.position }} </p>
            <button type="button" @click="deleteAdress(index)">Удалить</button>
            <hr>
        </span>
        <button type="button" class="button" @click="adressActive = true">Добавить адрес</button>
        <div v-if="adressActive" class="popup popup--adress">
            <p>Добавить адрес</p>
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="adressActive = !adressActive"></button>
            <form method="post" action="#">
                <select id="country" v-model="country">
                    <option value="Russia" selected>Россия</option>
                    <option value="China">China</option>
                    <option value="USA">USA</option>
                </select>
                <input id="index" v-model="index" type="text" placeholder="Индекс" autocomplete="on">
                <input id="city" v-model="city" type="text" placeholder="Город" autocomplete="on">
                <input id="street" v-model="street" type="text" placeholder="Улица" autocomplete="on">
                <input id="building" v-model="building" type="text" placeholder="Дом/Корпус/Строение" autocomplete="on">
                <input id="apartment" v-model="apartment" type="text" placeholder="Квартира" autocomplete="on">
                <button type="submit" @click.prevent="addAdress" class="button">Добавить</button>
                <button type="reset" class="reset-button">Отменить</button>
            </form>
        </div>
        <div v-if="adressEditActive" class="popup popup--adress-edit">
            <p>Редактировать адрес</p>
            <button class="close-button" type="button" aria-label="Закрыть окно" @click="adressEditActive = false"></button>
            <form method="post" action="#">
                <select id="country" v-model="country">
                    <option value="Russia" selected>Россия</option>
                    <option value="China">China</option>
                    <option value="USA">USA</option>
                </select>
                <input id="index" v-model="index" type="text" placeholder="Индекс" autocomplete="on">
                <input id="city" v-model="city" type="text" placeholder="Город" autocomplete="on">
                <input id="street" v-model="street" type="text" placeholder="Улица" autocomplete="on">
                <input id="building" v-model="building" type="text" placeholder="Дом/Корпус/Строение" autocomplete="on">
                <input id="apartment" v-model="apartment" type="text" placeholder="Квартира" autocomplete="on">
                <button type="submit" @click.prevent="editAdress" class="button">Сохранить</button>
                <button type="reset" class="reset-button">Отменить</button>
            </form>
        </div>
    </div>
` ,
    data: function () {
        return {
            adresses: [
                { position: '690000, Россия, г. Владивосток, ул Нейбута, д. 17, кв. 168' },
                { position: '690015, Россия, г. Владивосток, ул Надибаидзе, д. 125, кв. 1956' }
            ],
            adressActive: false,
            adressEditActive: false,
            index: null,
            country: null,
            city: null,
            street: null,
            building: null,
            apartment: null,
        }
    },
    methods: {
        deleteAdress: function (index) {
            this.adresses.splice(index, 1);
        },
        addAdress: function () {
            let newAdress = { position: `${this.index} , ${this.country} , г. ${this.city} , ул ${this.street} , д. ${this.building} , кв. ${this.apartment}` }
            this.adresses.push(newAdress)
        },
        editAdress: function (index) {
            let editedAdress = { position: `${this.index} , ${this.country} , г. ${this.city} , ул ${this.street} , д. ${this.building} , кв. ${this.apartment}` }
            this.adresses.splice(index, 1, editedAdress);
        }
    }
})

new Vue({ el: '#app' })

// у кнопок формы заменить click  на submit чтобы данные уходили на сервер