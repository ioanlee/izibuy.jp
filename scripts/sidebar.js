Vue.component('sidebar', {
    template: `
            <div class="sidebar">
                <input type="search" name="" id="" placeholder="найти в каталоге">
                <details class="catalog" open>
                    <summary class="catalog-summary"></summary>
                    <a class="catalog-item" href="#">Компьютеры</a>
                    <a class="catalog-item" href="#">Электроника, AV-камеры</a>
                    <a class="catalog-item" href="#">Бытовая техника</a>
                    <a class="catalog-item" href="#">Игры и игрушки</a>
                    <a class="catalog-item" href="#">Музыка</a>
                    <a class="catalog-item" href="#">Книги и журналы</a>
                    <a class="catalog-item" href="#">Хобби и рукоделие</a>
                    <a class="catalog-item" href="#">Антиквариат</a>
                    <a class="catalog-item" href="#">Спорт и отдых</a>
                    <a class="catalog-item" href="#">Авто и мото</a>
                    <a class="catalog-item" href="#">Аксессуары и часы</a>
                    <a class="catalog-item" href="#">Здоровье и красота</a>
                    <a class="catalog-item" href="#">Дом и интерьер</a>
                    <a class="catalog-item" href="#">Домашние питомцы</a>
                    <a class="catalog-item" href="#">Бизнес и офис</a>
                    <a class="catalog-item" href="#">Цветы и растения</a>
                    <a class="catalog-item" href="#">Детские товары</a>
                    <a class="catalog-item" href="#">Знаменитости</a>
                    <a class="catalog-item" href="#">Аниме и манга</a>
                    <a class="catalog-item" href="#">Мода</a>
                    <a class="catalog-item" href="#">Благотворительность</a>
                    <a class="catalog-item" href="#">Другое</a>
                </details>
            </div>
`
})

new Vue({ el: '#sidebar-container' })