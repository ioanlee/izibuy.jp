Vue.component('sidebar', {
    template: `
            <div class="sidebar">
                <input type="search" name="" id="" placeholder="найти">
                <details class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <a class="catalog-item" href="../pages/catalog.html">Компьютеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Электроника, AV-камеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бытовая техника</a>
                    <a class="catalog-item" href="../pages/catalog.html">Игры и игрушки</a>
                    <a class="catalog-item" href="../pages/catalog.html">Музыка</a>
                    <a class="catalog-item" href="../pages/catalog.html">Книги и журналы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Хобби и рукоделие</a>
                    <a class="catalog-item" href="../pages/catalog.html">Антиквариат</a>
                    <a class="catalog-item" href="../pages/catalog.html">Спорт и отдых</a>
                    <a class="catalog-item" href="../pages/catalog.html">Авто и мото</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аксессуары и часы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Здоровье и красота</a>
                    <a class="catalog-item" href="../pages/catalog.html">Дом и интерьер</a>
                    <a class="catalog-item" href="../pages/catalog.html">Домашние питомцы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бизнес и офис</a>
                    <a class="catalog-item" href="../pages/catalog.html">Цветы и растения</a>
                    <a class="catalog-item" href="../pages/catalog.html">Детские товары</a>
                    <a class="catalog-item" href="../pages/catalog.html">Знаменитости</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аниме и манга</a>
                    <a class="catalog-item" href="../pages/catalog.html">Мода</a>
                    <a class="catalog-item" href="../pages/catalog.html">Благотворительность</a>
                    <a class="catalog-item" href="../pages/catalog.html">Другое</a>
                </details>
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
                        <div class="checkbox-row"><input type="checkbox" name="checkboxes" id=""><label
                                for="checkboxes">Ламповый</label></div>
                        <div class="checkbox-row"><input type="checkbox" name="checkboxes" id=""><label
                                for="checkboxes">Электроника</label></div>
                        <div class="checkbox-row"><input type="checkbox" name="checkboxes" id=""><label
                                for="checkboxes">Механика</label></div>
                        <div class="checkbox-row"><input type="checkbox" name="checkboxes" id=""><label
                                for="checkboxes">Нанотехнологии</label></div>
                    </div>
                </div>
            </div>
`
})

Vue.component('sidebar-no-sorting', {
    template: `
            <div class="sidebar">
                <input type="search" name="" id="" placeholder="найти">
                <details class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <a class="catalog-item" href="../pages/catalog.html">Компьютеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Электроника, AV-камеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бытовая техника</a>
                    <a class="catalog-item" href="../pages/catalog.html">Игры и игрушки</a>
                    <a class="catalog-item" href="../pages/catalog.html">Музыка</a>
                    <a class="catalog-item" href="../pages/catalog.html">Книги и журналы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Хобби и рукоделие</a>
                    <a class="catalog-item" href="../pages/catalog.html">Антиквариат</a>
                    <a class="catalog-item" href="../pages/catalog.html">Спорт и отдых</a>
                    <a class="catalog-item" href="../pages/catalog.html">Авто и мото</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аксессуары и часы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Здоровье и красота</a>
                    <a class="catalog-item" href="../pages/catalog.html">Дом и интерьер</a>
                    <a class="catalog-item" href="../pages/catalog.html">Домашние питомцы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бизнес и офис</a>
                    <a class="catalog-item" href="../pages/catalog.html">Цветы и растения</a>
                    <a class="catalog-item" href="../pages/catalog.html">Детские товары</a>
                    <a class="catalog-item" href="../pages/catalog.html">Знаменитости</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аниме и манга</a>
                    <a class="catalog-item" href="../pages/catalog.html">Мода</a>
                    <a class="catalog-item" href="../pages/catalog.html">Благотворительность</a>
                    <a class="catalog-item" href="../pages/catalog.html">Другое</a>
                </details>
            </div>
`
})

Vue.component('sidebar-short-sorting', {
    template: `
            <div class="sidebar">
                <input type="search" name="" id="" placeholder="найти">
                <details class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <a class="catalog-item" href="../pages/catalog.html">Компьютеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Электроника, AV-камеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бытовая техника</a>
                    <a class="catalog-item" href="../pages/catalog.html">Игры и игрушки</a>
                    <a class="catalog-item" href="../pages/catalog.html">Музыка</a>
                    <a class="catalog-item" href="../pages/catalog.html">Книги и журналы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Хобби и рукоделие</a>
                    <a class="catalog-item" href="../pages/catalog.html">Антиквариат</a>
                    <a class="catalog-item" href="../pages/catalog.html">Спорт и отдых</a>
                    <a class="catalog-item" href="../pages/catalog.html">Авто и мото</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аксессуары и часы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Здоровье и красота</a>
                    <a class="catalog-item" href="../pages/catalog.html">Дом и интерьер</a>
                    <a class="catalog-item" href="../pages/catalog.html">Домашние питомцы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бизнес и офис</a>
                    <a class="catalog-item" href="../pages/catalog.html">Цветы и растения</a>
                    <a class="catalog-item" href="../pages/catalog.html">Детские товары</a>
                    <a class="catalog-item" href="../pages/catalog.html">Знаменитости</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аниме и манга</a>
                    <a class="catalog-item" href="../pages/catalog.html">Мода</a>
                    <a class="catalog-item" href="../pages/catalog.html">Благотворительность</a>
                    <a class="catalog-item" href="../pages/catalog.html">Другое</a>
                </details>
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
            </div>
`
})

Vue.component('sidebar-profile', {
    template: `
            <div class="sidebar">
                <input type="search" name="" id="" placeholder="найти в каталоге">
                <details class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <a class="catalog-item" href="../pages/catalog.html">Компьютеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Электроника, AV-камеры</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бытовая техника</a>
                    <a class="catalog-item" href="../pages/catalog.html">Игры и игрушки</a>
                    <a class="catalog-item" href="../pages/catalog.html">Музыка</a>
                    <a class="catalog-item" href="../pages/catalog.html">Книги и журналы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Хобби и рукоделие</a>
                    <a class="catalog-item" href="../pages/catalog.html">Антиквариат</a>
                    <a class="catalog-item" href="../pages/catalog.html">Спорт и отдых</a>
                    <a class="catalog-item" href="../pages/catalog.html">Авто и мото</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аксессуары и часы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Здоровье и красота</a>
                    <a class="catalog-item" href="../pages/catalog.html">Дом и интерьер</a>
                    <a class="catalog-item" href="../pages/catalog.html">Домашние питомцы</a>
                    <a class="catalog-item" href="../pages/catalog.html">Бизнес и офис</a>
                    <a class="catalog-item" href="../pages/catalog.html">Цветы и растения</a>
                    <a class="catalog-item" href="../pages/catalog.html">Детские товары</a>
                    <a class="catalog-item" href="../pages/catalog.html">Знаменитости</a>
                    <a class="catalog-item" href="../pages/catalog.html">Аниме и манга</a>
                    <a class="catalog-item" href="../pages/catalog.html">Мода</a>
                    <a class="catalog-item" href="../pages/catalog.html">Благотворительность</a>
                    <a class="catalog-item" href="../pages/catalog.html">Другое</a>
                </details>
                <div class="sidebar-nav">                            
                    <p>Личный кабинет</p>
                    <a href="../pages/orders.html">Заказы</a>
                    <a class="active-tab" href="../pages/payments.html">Платежи (85 000р)</a>
                    <a href="../pages/adresses.html">Адреса доставки (2)</a>
                    <a href="../pages/profile.html">Личная информация</a>                    
                </div>
            </div>
`
})

new Vue({ el: '#sidebar-container' })