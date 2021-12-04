<template>
    <div class="aside" v-if="burger">
        <div class="asideItem" @click="changeActiveTab('Home')">
            <span :class="{ 'material-icons': activeTab === 'Home', 'material-icons-outlined': activeTab !== 'Home', asideElement: true }">
                window
            </span>
            <span class="asideElement">
                Главная
            </span>
        </div>
        <div class="asideItem" @click="changeActiveTab('Explore')">
            <span :class="{ 'material-icons': activeTab === 'Explore', 'material-icons-outlined': activeTab !== 'Explore', asideElement: true }">
                video_library
            </span>
            <span class="asideElement">
                Контент
            </span>
        </div>
        <div class="asideItem" @click="changeActiveTab('Subscriptions')">
            <span :class="{ 'material-icons': activeTab === 'Subscriptions', 'material-icons-outlined': activeTab !== 'Subscriptions', asideElement: true }">
                playlist_play
            </span>
            <span class="asideElement">
                Плейлисты
            </span>
        </div>
        <div class="separator"></div>
        <div class="asideItem">
            <span class="material-icons asideElement">
                assessment
            </span>
            <span class="asideElement">
                Аналитика
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
        <div class="separator"></div>
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
        <div class="separator"></div>
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
        <div class="separator"></div>
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
        <div class="separator"></div>
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
    <div class="asideColumn " v-else-if="!burger">
        <div class="asideColumnItem" @click="changeActiveTab('Home')">
            <span :class="{ 'material-icons': activeTab === 'Home', 'material-icons-outlined': activeTab !== 'Home', asideElement: true }">
                home
            </span>
            <span class="asideElement">
                Главная
            </span>
        </div>
        <div class="asideColumnItem" @click="changeActiveTab('Explore')">
            <span :class="{ 'material-icons': activeTab === 'Explore', 'material-icons-outlined': activeTab !== 'Explore', asideElement: true }">
                explore
            </span>
            <span class="asideElement">
                Навигатор
            </span>
        </div>
        <div class="asideColumnItem" @click="changeActiveTab('Subscriptions')">
            <span :class="{ 'material-icons': activeTab === 'Subscriptions', 'material-icons-outlined': activeTab !== 'Subscriptions', asideElement: true }">
                subscriptions
            </span>
            <span class="asideElement">
                Подписки
            </span>
        </div>
        <div class="asideColumnItem" @click="changeActiveTab('Library')">
            <span :class="{ 'material-icons': activeTab === 'Library', 'material-icons-outlined': activeTab !== 'Library', asideElement: true }">
                video_library
            </span>
            <span class="asideElement">
                Библиотека
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            
        }
    },
    props: {
        'burger': {
            type: Boolean,
            default: true
        },
        'activeTab': {
            type: String,
            default: 'Home'
        }
    },
    emits: [
        'changeActiveTab'
    ],
    methods: {
        changeActiveTab(tab) {
            this.$emit('changeActiveTab', tab)
        }
    }
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

    .separator {
        border-bottom: 1px solid rgb(225, 225, 225);
    }

    .asideItem {
        cursor: pointer;
        /* margin: 15px 0px; */
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 10px 50px;
        display: flex;
        align-items: center;
    }

    .asideColumn {
        top: 65px;
        left: 0px;
        position: fixed;
        height: calc(100% - 65px);
        width: 10%;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    .asideColumnItem {
        cursor: pointer;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 10px 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .asideItem:hover {
        background-color: rgb(240, 240, 240);
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