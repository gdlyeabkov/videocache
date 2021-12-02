<template>
    <div class="aside">
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                home
            </span>
            <span class="asideElement">
                Главная
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                explore
            </span>
            <span class="asideElement">
                Навигатор
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                subscriptions
            </span>
            <span class="asideElement">
                Подписки
            </span>
        </div>
        <hr />
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                video_library
            </span>
            <span class="asideElement">
                Библиотека
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                history
            </span>
            <span class="asideElement">
                История
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                watch_later
            </span>
            <span class="asideElement">
                Смотреть позже
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                thumb_up
            </span>
            <span class="asideElement">
                Понравившиеся
            </span>
        </div>
        <hr />
        <span class="asideHeader asideItem">
            ПОДПИСКИ
        </span>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                music_note
            </span>
            <span class="asideElement">
                Музыка
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                emoji_events
            </span>
            <span class="asideElement">
                Спорт
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                sports_esports
            </span>
            <span class="asideElement">
                Видеоигры
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                theaters
            </span>
            <span class="asideElement">
                Фильмы
            </span>
        </div>
        <hr />
        <span class="asideHeader asideItem">
            ДРУГИЕ ВОЗМОЖНОСТИ
        </span>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                smart_display
            </span>
            <span class="asideElement">
                YouTube Premium
            </span>
        </div>        
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                theaters
            </span>
            <span class="asideElement">
                Фильмы
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                sports_esports
            </span>
            <span class="asideElement">
                Видеоигры
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                stream
            </span>
            <span class="asideElement">
                Трансляции
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                emoji_events
            </span>
            <span class="asideElement">                
                Спорт
            </span>
        </div>
        <hr />
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                settings
            </span>
            <span class="asideElement">
                Настройки
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                flag
            </span>
            <span class="asideElement">
                Жалобы
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                help_outline
            </span>
            <span class="asideElement">
                Справка
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                announcement
            </span>
            <span class="asideElement">
                Отправить отзыв
            </span>
        </div>
        <hr />
        <div class="agreement">
            <span class="agreementItem">
                О сервисеПрессеАвторские праваСвязаться с намиАвторамРекламодателямРазработчикам
            </span>
            <span class="agreementItem">
                Условия использованияКонфиденциальностьПравила и безопасностьКак работает YouTubeТестирование новых функций
            </span>
            <span class="agreementItem">
                © 2021 Google LLC
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside'
}
</script>

<style scoped>

    .aside {
        overflow-y: scroll;
        overflow-x: hidden;
        top: 65px;
        left: 0px;
        position: fixed;
        height: calc(100% - 65px);
        width: 20%;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    .asideItem {
        margin: 15px 0px;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 0px 50px;
        display: flex;
        align-items: center;
    }

    .asideElement {
        margin: 0px 10px;
    }

    .agreement {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
    }

    .agreementItem {
        margin: 10px 0px;
    }

    .asideHeader {
        font-weight: bold;
    }

</style>