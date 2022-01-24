Vue.component('tracking-item', {
    template: `
    <div class="tracking-item">
            <div class="thumbnail-wrapper">
                <img src="../images/img_item_thumbnail.jpg" height="" width="" alt="">
                <span>
                    <p>[XX44]Windows11 or Windows10[ASUS GL752VW]Core i7-6700HQ/ новый товар SSD 240GB/GTX 960M/ память 16GB/Web камера /Office2019/BluRay</p>
                    <span class="price">74 000 Р</span>
                </span>
            </div>
            <div class="tracking-status">
                <span class="identificator">№ 2358965</span>
                <span class="status">В пути по Японии</span>
                <button type="button" class="button">Отследить</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Дата покупки: </th>
                        <td>01.01.2022</td>
                    </tr>
                    <tr>
                        <th>Адрес доставки: </th>
                        <td>Россия, г.Владивосток, ул. Нейбута 10,Ю кв. 13</td>
                    </tr>
                    <tr>
                        <th>Получатель: </th>
                        <td>Иванов Иван Иванович</td>
                    </tr>
                    <tr>
                        <th>Конт.телефон: </th>
                        <td>8 999 000 12 34</td>
                    </tr>
                    <tr>
                        <th>Дата доставки</th>
                        <td>15.02.2022</td>
                    </tr>
                    <tr>
                        <th>Стоимость лота</th>
                        <td>65 000р</td>
                    </tr>
                    <tr>
                        <th>Доставка</th>
                        <td>5 000р</td>
                    </tr>
                    <tr>
                        <th>Номер заказа</th>
                        <td>№123456</td>
                    </tr>
                    <tr>
                        <th>Статус заказа</th>
                        <td>В пути</td>
                    </tr>
                </table>
            </div>
            <hr>
    </div>
` ,
    data: function () {
        return {

        }
    },
    methods: {

    }
})

new Vue({ el: '#tracking-container' })
