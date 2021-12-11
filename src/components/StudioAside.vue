<template>
    <div class="aside" v-if="burger">
        <div :class="{ asideItem: true, activeTab: activeTab === 'Main' }" @click="changeActiveTab('Main')">
            <span :class="{ 'material-icons': true, asideElement: true }">
                window
            </span>
            <span class="asideElement">
                Главная
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'Content' }" @click="changeActiveTab('Content')">
            <span :class="{ 'material-icons': true,  asideElement: true }">
                video_library
            </span>
            <span class="asideElement">
                Контент
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'PlayLists' }" @click="changeActiveTab('PlayLists')">
            <span :class="{ 'material-icons': true, asideElement: true }">
                playlist_play
            </span>
            <span class="asideElement">
                Плейлисты
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'Analytics' }" @click="changeActiveTab('Analytics')">
            <span class="material-icons asideElement">
                assessment
            </span>
            <span class="asideElement">
                Аналитика
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'Comments' }" @click="changeActiveTab('Comments')">
            <span class="material-icons-outlined asideElement">
                chat
            </span>
            <span class="asideElement">
                Комментарии
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'Subtitles' }" @click="changeActiveTab('Subtitles')">
            <span class="material-icons-outlined asideElement">
                subtitles
            </span>
            <span class="asideElement">
                Субтитры
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'DRM' }" @click="changeActiveTab('DRM')">
            <span class="material-icons-outlined asideElement">
                copyright
            </span>
            <span class="asideElement">
                Авторские права
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'Monetization' }" @click="changeActiveTab('Monetization')">
            <span class="material-icons-outlined asideElement">
                monetization_on
            </span>
            <span class="asideElement">
                Монетизация
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'ChannelEdit' }" @click="changeActiveTab('ChannelEdit')">
            <span class="material-icons-outlined asideElement">
                auto_fix_high
            </span>
            <span class="asideElement">
                Настройка канала
            </span>
        </div>
        <div :class="{ asideItem: true, activeTab: activeTab === 'SoundLibrary' }" @click="changeActiveTab('SoundLibrary')">
            <span class="material-icons-outlined asideElement">
                library_music
            </span>
            <span class="asideElement">
                Фонотека
            </span>
        </div>
        <div class="separator"></div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Ежедневные идеи
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Инспектор тегов
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Конекуренты
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Уведомления о трендах
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Наиболле просматриваемое
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Аудит канала
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Достижения
            </span>
        </div>
        <div class="asideItem">
            <span class="material-icons-outlined asideElement">
                play_circle
            </span>
            <span class="asideElement">
                Академия vidlQ
            </span>
        </div>
        <div class="separator"></div>
        <div class="asideItem" @click="toggleSettings">
            <span class="material-icons-outlined asideElement">
                settings
            </span>
            <span class="asideElement">
                Настройки
            </span>
        </div>
        <div class="asideItem" @click="isFeedback = !isFeedback">
            <span class="material-icons-outlined asideElement">
                announcement
            </span>
            <span class="asideElement">
                Отправить отзыв
            </span>
        </div>
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
        <div v-if="true" class="settingsBackdrop">
            <div class="settingsContextMenu">
                <span>
                    &nbsp;
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            isFeedback: false,
            isSettings: false
        }
    },
    props: {
        'burger': {
            type: Boolean,
            default: true
        },
        'activeTab': {
            type: String,
            default: 'Main'
        }
    },
    emits: [
        'changeActiveTab'
    ],
    methods: {
        toggleSettings() {
            this.isSettings = !this.isSettings
            alert(`this.isSettings: ${this.isSettings}`)
        },
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

    .activeTab {
        color: rgb(255, 0, 0);
    }

    .settingsContextMenu {
        width: 65%;
        height: 65%;
        display: flex;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;

    }

    .settingsBackdrop {
        /* width: 100%;
        height: 100%; */
        width: 1000px;
        height: 1000px;
        top: 0px;
        left: 0px;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    }

</style>