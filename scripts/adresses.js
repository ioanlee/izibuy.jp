Vue.component('adresses-list', {
    template: `
    <div>
        <span class="adress-row" v-for="adress in adresses">
            <p> {{ adress.position }} </p>
            <button type="button" @click="deleteAdress">Удалить</button>
            <hr>
        </span>
        <button type="button" class="button" @click="addAdress">Добавить адрес</button>
    </div>
` ,
    data: function () {
        return {
            adresses: [
                { position: '690000, Россия, г. Владивосток, ул Нейбута, д. 17, кв. 168' },
                { position: '690015, Россия, г. Владивосток, ул Надибаидзе, д. 125, кв. 1956' }
            ]
        }
    },
    methods: {
        deleteAdress: function(index) {
            this.adresses.splice(index, 1);
        },
        addAdress() {

        }
    }
})

new Vue({ el: '#app' })
