Vue.component('sidebar-catalog', {
    template: `
            <div>
                <input type="search" name="" id="" placeholder="найти">
                <details class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <div class="category" v-for="category in categorys">
                        <a class="catalog-item" href="../pages/catalog.html" @click.prevent="openSubCategory">{{ category }}</a>
                        <div class="sub-category">
                            <next-sub-category></next-sub-category>
                            <next-sub-category></next-sub-category>
                            <next-sub-category></next-sub-category>
                            <next-sub-category></next-sub-category>
                        </div>
                    </div>
                </details>                
            </div>
`,
        data: function() {
            return {
                catalogItemClicked : false,
                categorys: [
                            'Компьютеры',
                            'Электроника', 
                            'AV-камеры',
                            'Бытовая техника',
                            'Игры и игрушки',
                            'Музыка',
                            'Книги и журналы',
                            'Хобби и рукоделие',
                            'Антиквариат',
                            'Спорт и отдых',
                            'Авто и мото',
                            'Аксессуары и часы',
                            'Здоровье и красота',
                            'Еда и напитки',
                            'Дом и интерьер',
                            'Домашние питомцы',
                            'Бизнес и офис',
                            'Цветы и растения',
                            'Детские товары',
                            'Знаменитости',
                            'Аниме и манга',
                            'Мода',
                            'Благотворительность',
                            'Другое',
                        ]
            }
        },
        methods: {
            openSubCategory() {                       
                event.target.nextElementSibling.classList.toggle('sub-category--opened')
            }
        }
})

Vue.component('next-sub-category', {
    template: `
            <div class="next-sub-category-wrapper">
                <a href="" class="catalog-item" href="../pages/catalog.html" @click.prevent="nextSubCategoryClicked = !nextSubCategoryClicked">Подкатегория</a>
                <div class="next-sub-category" v-if="nextSubCategoryClicked">
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                </div>
            </div>
    `,
    data: function() {
        return {
            nextSubCategoryClicked: false
        }
    }
})

Vue.component('sidebar-full-filters', {
    template: `
            <div class="filters">
                <h2>Сортировка</h2>
                <select name="" id="">
                    <option value="most-expensive">Сначала самые дорогие</option>
                </select>
                <h2>Фильтр</h2>
                <h3>Цена</h3>
                <div class="number-inputs">
                    <input type="number" name="" id="number-min" value="2200" onchange="updateRange()">
                    <input type="number" name="" id="number-max" value="9500" onchange="updateRange()">
                </div>
                <div class="double-range-input">
                    <hr>
                    <input type="range" name="" id="range-min" min="200" max="11500" value="2200"
                        onmousemove="updateNumbers()">
                    <input type="range" name="" id="range-max" min="200" max="11500" value="9500"
                        onmousemove="updateNumbers()">
                </div>
                <h3>Бренд</h3>
                <select name="" id="">
                    <option value="1">Вариант 1</option>
                    <option value="2">Вариант 2</option>
                    <option value="3">Вариант 3</option>
                </select>
                <h3>Исполнение</h3>
                <div class="checkboxes">
                    <div class="checkbox-row">
                        <input type="checkbox" name="checkboxes" id="">
                        <label for="checkboxes">Ламповый</label>
                    </div>
                    <div class="checkbox-row">
                        <input type="checkbox" name="checkboxes" id="">
                        <label for="checkboxes">Электроника</label>
                    </div>
                    <div class="checkbox-row">
                        <input type="checkbox" name="checkboxes" id="">
                        <label for="checkboxes">Механика</label>
                    </div>
                    <div class="checkbox-row">
                            <input type="checkbox" name="checkboxes" id="">
                            <label for="checkboxes">Нанотехнологии</label>
                    </div>
                </div>
            </div>
`
})


Vue.component('sidebar-cut-filters', {
    template: `
            <div class="filters">
                <h2>Фильтр</h2>
                <select name="" id="">
                    <option value="">Все</option>
                    <option value="">Фильтр 1</option>
                    <option value="">Фильтр 2</option>
                    <option value="">Фильтр 3</option>
                </select>
                <h2>Сортировка</h2>
                <select name="" id="">
                    <option value="">Сначала актуальные</option>
                    <option value="">Фильтр 1</option>
                    <option value="">Фильтр 2</option>
                    <option value="">Фильтр 3</option>
                </select>
            </div>
    `,
})


Vue.component('sidebar-nav', {
    template: `
            <div class="sidebar-nav">                            
                <p>Личный кабинет</p>
                <a href="../pages/orders.html">Заказы</a>
                <a class="active-tab" href="../pages/payments.html">Платежи (85 000р)</a>
                <a href="../pages/adresses.html">Адреса доставки (2)</a>
                <a href="../pages/profile.html">Личная информация</a>                    
            </div>
    `,
})

new Vue({ el: '#sidebar-container' })