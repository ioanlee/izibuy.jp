const app = Vue.createApp({})

app.component('sidebar-catalog', {
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
                    <div class="category" v-for="(category, index) in allcategories.yahooshopping.categories">
                        <a class="catalog-item" :href="allcategories.yahooshopping.path + category.id">{{ category.name }}</a>
                        <div class="sub-category" v-if="category.subcategories.length > 0">
                            <div class="next-sub-category-wrapper" @mouseout="closeSubCategory" v-for="subcategory in category.subcategories">
                                <a class="catalog-item" :href="subcategory.href">{{subcategory.name}}</a>
                            </div>
                        </div>
                    </div>
                </details>                
            </div>
`,
        data: function() {
            return {
                allcategories: {
                    yahooshopping: {
                        path: '/izibuy/yahooshopping/search.php?c=',
                        categories: [
                            { name: 'Компьютеры',               id: '2502',       subcategories: []},
                            { name: 'Электроника',              id: '2519',       subcategories: []}, 
                            { name: 'Бытовая техника',          id: '2505',       subcategories: []},
                            { name: 'Игры и игрушки',           id: '2511',       subcategories: []},
                            { name: 'Музыка',                   id: '2516',       subcategories: [
                                { name: 'Наушники',                 id: '2504',},   
                                { name: 'Наушники такие же',        id: '2504',}]},
                            { name: 'Книги и журналы',          id: '10002',      subcategories: []},
                            { name: 'Хобби и рукоделие',        id: '2503',       subcategories: []},
                            { name: 'Спорт и отдых',            id: '2512',       subcategories: []},
                            { name: 'Авто и мото',              id: '2514',       subcategories: []},
                            { name: 'Аксессуары и часы',        id: '2496',       subcategories: []},
                            { name: 'Здоровье и диета',         id: '2500',       subcategories: []},
                            { name: 'Косметика и Парфюмерия',   id: '2501',       subcategories: []},
                            { name: 'Еда и напитки',            id: '2498',       subcategories: []},
                            { name: 'Дом и интерьер',           id: '2506',       subcategories: []},
                            { name: 'Домашние питомцы',         id: '2509',       subcategories: []},
                            { name: 'Бизнес и офис',            id: '',           subcategories: []},
                            { name: 'Цветы и растения',         id: '2507',       subcategories: []},
                            { name: 'Детские товары',           id: '2497',       subcategories: []},
                            { name: 'Аниме и манга',            id: '10002',      subcategories: []},
                            { name: 'Мода',                     id: '13457',      subcategories: []},
                        ]
                    },
                    yahooauction: {
                        path: '/izibuy/yahooauctions/search.php?c=',
                        categories: [
                            { name: 'Знаменитости',             id: '',           subcategories: []},
                            { name: 'Антиквариат',              id: '',           subcategories: []},
                            { name: 'AV-камеры',                id: '',           subcategories: []},
                            { name: 'Благотворительность',      id: '',           subcategories: []},
                            { name: 'Другое',                   id: '',           subcategories: []},

                            { name: 'Мода',                     id: '23000',      subcategories: []},
                            { name: 'Аксессуары, часы',         id: '23140',      subcategories: []},
                            { name: 'Спорт',                    id: '24698',      subcategories: []},
                            { name: 'Товары для детей',         id: '24202',      subcategories: []},
                            { name: 'Красота и здоровье',       id: '42177',      subcategories: []},
                            { name: 'Авто, мото',               id: '26318',      subcategories: []},
                            { name: 'Компьютеры',               id: '23336',      subcategories: []},
                            { name: 'Бытовая техника',          id: '23632',      subcategories: []},
                            { name: 'Товары для дома',          id: '24198',      subcategories: []},
                            { name: 'Товары для офиса',         id: '22896',      subcategories: []},
                            { name: 'Книги, журналы',           id: '21600',      subcategories: []},
                            { name: 'Музыка',                   id: '22152',      subcategories: []},
                            { name: 'Игры, игрушки',            id: '25464',      subcategories: []},
                            { name: 'Товары для фанатов',       id: '2084032594', subcategories: []},
                            { name: 'Комиксы, аниме',           id: '20060',      subcategories: []},
                            { name: 'Хобби, увлечения',         id: '24242',      subcategories: []},
                            { name: 'Коллекционирование',       id: '20000',      subcategories: []},
                        ]
                    },
                    amazonjapan : {
                        path: '/izibuy/amazon/search.php?c=',
                        categories: [
                            { name: 'Сумки и чемоданы',         id: '2221077051', subcategories: []},
                            { name: 'Мужская одежда',           id: '2230005051', subcategories: []},
                            { name: 'Женская одежда',           id: '2230006051', subcategories: []},
                            { name: 'Ювелирные изделия',        id: '85895051',   subcategories: []},
                            { name: 'Детские товары',           id: '2230804051', subcategories: []},
                            { name: 'Обувь',                    id: '2016926051', subcategories: []},
                            { name: 'Часы',                     id: '324025011',  subcategories: []},
                            { name: 'Техника',                  id: '2016929051', subcategories: []},
                            { name: 'Аксессуары для авто',      id: '2319890051', subcategories: []},
                            { name: 'Аксессуары для мотоциклов',id: '2017304051', subcategories: []},
                            { name: 'Здоровье и уход',          id: '2127209051', subcategories: []},
                            { name: 'Музыкальные инструменты',  id: '2123629051', subcategories: []},
                            { name: 'Кухонные принадлежности',  id: '3828871',    subcategories: []},
                            { name: 'Косметика',                id: '52374051',   subcategories: []},
                            { name: 'Красота',                  id: '160384011',  subcategories: []},
                            { name: 'Спортивные товары',        id: '14304371',   subcategories: []},
                            { name: 'Игрушки/хобби',            id: '13299531',   subcategories: []},
                            { name: 'Продукты питания',         id: '57239051',   subcategories: []},

                        ]
                    },
                    rakuten : {
                        path: '',
                        categories: [
                            { name: 'Женская одежда',                id: '100371', subcategories: []},
                            { name: 'Мужская одежда',                id: '551177', subcategories: []},
                            { name: 'Сумки/Дизайнерские вещи',       id: '216131', subcategories: []},
                            { name: 'Нижнее бельё',                  id: '100433', subcategories: []},
                            { name: 'Обувь',                         id: '558885', subcategories: []},
                            { name: 'Наручные часы',                 id: '558929', subcategories: []},
                            { name: 'Ювелирные изделия',             id: '216129', subcategories: []},
                            { name: 'Дети/Материнство',              id: '100533', subcategories: []},
                            { name: 'Косметика/Парфюмерия',          id: '100939', subcategories: []},
                            { name: 'Питание',                       id: '100227', subcategories: []},
                            { name: 'Вода/Безалкогольные напитки',   id: '100316', subcategories: []},
                            { name: 'Европейские/японские сладости', id: '551167', subcategories: []},
                            { name: 'Игрушки, хобби',                id: '101164', subcategories: []},
                            { name: 'Товары повседневного спроса',   id: '215783', subcategories: []},
                            { name: 'Спорт/Активный отдых',          id: '101070', subcategories: []},
                            { name: 'Диета/Здоровье',                id: '100938', subcategories: []},
                            { name: 'Медикаменты',                   id: '551169', subcategories: []},
                            { name: 'Цветы/Сад/Сделай сам',          id: '100005', subcategories: []},
                            { name: 'Домашние животные',             id: '101213', subcategories: []},
                            { name: 'Компьютеры/Периферия',          id: '100026', subcategories: []},
                            { name: 'Бытовая электроника',           id: '562637', subcategories: []},
                            { name: 'ТВ/Аудио/Камеры',               id: '211742', subcategories: []},
                            { name: 'Кухонные принадлежности',       id: '558944', subcategories: []},
                            { name: 'Автомобили/Мотоциклы',          id: '101114', subcategories: []},
                            { name: 'Запчасти авто/мото',            id: '503190', subcategories: []},

                        ]
                    },
                    izibuy : {
                        path: '',
                        categories: [
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},
                            { name: '',             id: '',      subcategories: []},

                        ]
                    }
                }
            }
        },
        methods: {
            openSubCategory() {   
                // DEPRECATED, done with styles in _sidebar.sass              
                // this.$refs.catalog.querySelectorAll('.sub-category').forEach((item) => {
                //     item.classList.remove('sub-category--opened')
                // })
                // event.target.nextElementSibling.classList.add('sub-category--opened')
                // document.querySelector('.main-content').classList.add('zindex')
            },
            closeSubCategory() {   
                // DEPRECATED, done with styles in _sidebar.sass 
                // if (event.target.nextElementSibling.classList.contains('sub-category--opened')) {
                //     event.target.nextElementSibling.classList.remove('sub-category--opened')
                //     document.querySelector('.main-content').classList.remove('zindex')
                // }
            },
            closeCatalog() {
                document.querySelector('.main-content').style.display = "block"
                document.querySelector('.sidebar').style.display = "none"
            }
        }
})

app.mount('#sidebar-container')
// Vue.component('next-sub-category', {
//     template: `
//             <div class="next-sub-category-wrapper">
//                 <a href="" class="catalog-item" href="../pages/catalog.html" @click.prevent="openNextSubCategory">Подкатегория</a>
//                 <div class="next-sub-category">
//                     <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
//                     <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
//                     <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
//                     <a href="" class="catalog-item sub-catalog-item" href="../pages/catalog.html">Подкатегория #2</a>
//                 </div>
//             </div>
//     `,
//     data: function() {
//         return {
            
//         }
//     },
//     methods: {
//         openNextSubCategory() {                        
//             document.querySelectorAll('.next-sub-category').forEach((item) => {
//                 item.classList.remove('next-sub-category--opened')
//             })            
//             event.target.nextElementSibling.classList.add('next-sub-category--opened')            
//         },
//     }
// })

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