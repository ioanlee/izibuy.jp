Vue.component('sidebar-catalog', {
    template: `
            <div>
                <div class="closeCatalog">
                    <a href="/"  @click.prevent="closeCatalog">
                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.602 6.034L3.402 3.556L0.602 1.092L1.176 0.448L4.676 3.514L1.176 6.622L0.602 6.034Z" fill="#8C3E7D"/>
                        </svg>
                    </a>
                    <input type="search" name="" id="" placeholder="найти">
                </div>            
                <details ref="catalog" class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <div class="category" v-for="category in categories.yahooshopping">
                        <a class="catalog-item" href="/izibuy/pages/searchshop" :href="category.href" @mouseover.prevent="openSubCategory">{{ category.name }}</a>
                        <!-- <a class="catalog-item" href="/izibuy/pages/searchshop" v-bind:href="category.href" @click.prevent="openSubCategory">{{ category.name }}</a> -->
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
                categories: {
                    yahooshopping : [
                        { name: 'Компьютеры',               id: '2502',     href: '/izibuy/pages/searchshop?c=2502',  subcategories: []},
                        { name: 'Электроника',              id: '2519',     shref: '/izibuy/pages/searchshop',         subcategories: []}, 
                        { name: 'Бытовая техника',          id: '2505',     href: '/izibuy/pages/searchshop?c=2505',  subcategories: []},
                        { name: 'Игры и игрушки',           id: '2511',     href: '/izibuy/pages/searchshop?c=2511',  subcategories: []},
                        { name: 'Музыка',                   id: '2516',     href: '/izibuy/pages/searchshop?c=2516',  subcategories: []},
                        { name: 'Книги и журналы',          id: '10002',    href: '/izibuy/pages/searchshop?c=10002', subcategories: []},
                        { name: 'Хобби и рукоделие',        id: '2503',     href: '/izibuy/pages/searchshop?c=2503',  subcategories: []},
                        { name: 'Спорт и отдых',            id: '2512',     href: '/izibuy/pages/searchshop?c=2512',  subcategories: []},
                        { name: 'Авто и мото',              id: '2514',     href: '/izibuy/pages/searchshop?c=2514',  subcategories: []},
                        { name: 'Аксессуары и часы',        id: '2496',     href: '/izibuy/pages/searchshop?c=2496',  subcategories: []},
                        { name: 'Здоровье и диета',         id: '2500',     href: '/izibuy/pages/searchshop?c=2500',  subcategories: []},
                        { name: 'Косметика и Парфюмерия',   id: '2501',     href: '/izibuy/pages/searchshop?c=2501',  subcategories: []},
                        { name: 'Еда и напитки',            id: '2498',     href: '/izibuy/pages/searchshop?c=2498',  subcategories: []},
                        { name: 'Дом и интерьер',           id: '2506',     href: '/izibuy/pages/searchshop?c=2506',  subcategories: []},
                        { name: 'Домашние питомцы',         id: '2509',     href: '/izibuy/pages/searchshop?c=2509',  subcategories: []},
                        { name: 'Бизнес и офис',            id: '',         href: '/izibuy/pages/searchshop',         subcategories: []},
                        { name: 'Цветы и растения',         id: '2507',     href: '/izibuy/pages/searchshop?c=2507',  subcategories: []},
                        { name: 'Детские товары',           id: '2497',     href: '/izibuy/pages/searchshop?c=2497',  subcategories: []},
                        { name: 'Аниме и манга',            id: '10002',    href: '/izibuy/pages/searchshop?c=10002', subcategories: []},
                        { name: 'Мода',                     id: '13457',    href: '/izibuy/pages/searchshop?c=13457', subcategories: []},
                    ],
                    yahooauction : [
                        // { name: 'Знаменитости',             id: '',         href: '/izibuy/pages/searchshop',         subcategories: []},
                        // { name: 'Антиквариат',              id: '',         href: '/izibuy/pages/searchshop',         subcategories: []},
                        // { name: 'AV-камеры',                id: '',         href: '/izibuy/pages/searchshop',         subcategories: []},
                        { name: 'Благотворительность',      id: '',         href: '/izibuy/pages/searchshop',         subcategories: []},
                        { name: 'Другое',                   id: '',         href: '/izibuy/pages/searchshop',         subcategories: []},
                    ],
                    amazonjapan : [],
                    rakuten : [],
                }
            }
        },
        methods: {
            openSubCategory() {                
                this.$refs.catalog.querySelectorAll('.sub-category').forEach((item) => {
                    item.classList.remove('sub-category--opened')
                })
                event.target.nextElementSibling.classList.add('sub-category--opened')
                document.querySelector('.main-content').classList.add('zindex')
            },
            closeSubCategory() {                
                if (event.target.nextElementSibling.classList.contains('sub-category--opened')) {
                    event.target.nextElementSibling.classList.remove('sub-category--opened')
                    document.querySelector('.main-content').classList.remove('zindex')
                }
            },
            closeCatalog() {
                document.querySelector('.main-content').style.display = "block"
                document.querySelector('.sidebar').style.display = "none"
            }
        }
})

Vue.component('next-sub-category', {
    template: `
            <div class="next-sub-category-wrapper">
                <a href="" class="catalog-item" href="../pages/catalog.html" @click.prevent="openNextSubCategory">Подкатегория</a>
                <div class="next-sub-category">
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                    <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
                </div>
            </div>
    `,
    data: function() {
        return {
            
        }
    },
    methods: {
        openNextSubCategory() {                        
            document.querySelectorAll('.next-sub-category').forEach((item) => {
                item.classList.remove('next-sub-category--opened')
            })            
            event.target.nextElementSibling.classList.add('next-sub-category--opened')            
        },
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

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper')
    const main = document.querySelector('.main-content')
    const categories = document.querySelectorAll('.sub-category')
    const subcategories = document.querySelectorAll('.next-sub-category')
    window.addEventListener('click', () => {
        if (event.target == wrapper) {
            categories.forEach((item) => {
                item.classList.remove('sub-category--opened')                
            })
            subcategories.forEach((item) => {
                item.classList.remove('next-sub-category--opened')
            })
            main.classList.remove('zindex')
        }
    })
})