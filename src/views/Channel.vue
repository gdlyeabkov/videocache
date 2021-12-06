<template>
    <div>
        <Header :burger="burger" @toggleBurger="toggleBurgerHandler" />
        <div class="main">
            <Aside :burger="burger" :activeTab="activeTab" @changeActiveTab="changeActiveTabHandler" />        
            <div class="article" :style="`left: ${burger ? '20%' : '10%'}`">
                <div v-if="activeTab === 'Channel'">
                    <div class="aso" :style="`background-image: url('http://localhost:4000/api/channels/source/get/?channelname=${channel.name}');`">
                        
                    </div>
                    <div class="channelHeader">
                        <div class="channelInfo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" width="60px" class="channelInfoItem" />
                            <div class="channelInfoTextContent">
                                <span class="channelInfoItem channelName">
                                    {{
                                        channel.name
                                    }}
                                </span>
                                <span class="channelInfoItem channelFollowers">
                                    {{
                                        channel.followers.length
                                    }} подписчиков
                                </span>
                            </div>
                        </div>
                        <div class="channelBtns">
                            <button class="btn btn-primary channelBtn">
                                Настроить вид канала
                            </button>
                            <button class="btn btn-primary channelBtn" @click="$router.push({ name: 'Studio', query: { channelid: channel._id } })">
                                Видео
                            </button>
                            <span class="exportCSVLabel">
                                ЭКСПОРТ CSV
                            </span>
                        </div>
                    </div>
                    <div class="channelTabs">
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'Main' }" @click="activeChannelTab = 'Main'">
                            <span>
                                ГЛАВНАЯ
                            </span>
                        </div>
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'Video' }" @click="activeChannelTab = 'Video'">
                            <span>
                                ВИДЕО
                            </span>
                        </div>
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'PlayLists' }" @click="activeChannelTab = 'PlayLists'">
                            <span>
                                ПЛЭЙЛИСТЫ
                            </span>
                        </div>
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'Channels' }" @click="activeChannelTab = 'Channels'">
                            <span>
                                КАНАЛЫ
                            </span>
                        </div>
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'About' }" @click="activeChannelTab = 'About'">
                            <span>
                                О КАНАЛЕ
                            </span>
                        </div>
                        <div :class="{ channelTab: true, searchChannelTab: true, activeChannelTab: activeChannelTab === 'Search' }" @click="activeChannelTab = 'Search'">
                            <span class="material-icons">
                                search
                            </span>
                            <input v-if="activeChannelTab === 'Search'" v-model="keywords" placeholder="Поиск" type="text" class="form-control searchField" />
                        </div>
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'Popular' }" @click="activeChannelTab = 'Popular'">
                            <span>
                                ПОПУЛЯРНОЕ
                            </span>
                        </div>
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'Statistics' }" @click="activeChannelTab = 'Statistics'">
                            <span>
                                СТАТИСТИКА
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div v-if="activeChannelTab === 'Main'">
                        <div class="videoFormats">
                            <div class="videoFormat">
                                <div class="videoFormatHeader">
                                    <span class="allVideosLabel videoFormatHeaderItem">
                                        Все видео
                                    </span>
                                    <span class="playAllLabel videoFormatHeaderItem">
                                        ВОСПРОИЗВЕСТИ ВСЕ
                                    </span>
                                </div>
                                <div class="videoFormatBody">
                                    <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id } })">
                                        <video controls >
                                            <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                        </video>
                                        <span>
                                            {{
                                                video.name
                                            }}
                                        </span>
                                        <div class="videoFooter">
                                            <span>
                                                {{
                                                    video.views
                                                }} просмотр
                                            </span>
                                            <span>
                                                {{
                                                    `${video.created.split('T')[0].split('-')[2]}/${video.created.split('T')[0].split('-')[1]}/${video.created.split('T')[0].split('-')[0]}`
                                                }}
                                                1 месяц назад
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeChannelTab === 'Video'">
                        <div class="videoFormats">
                            <div class="videoFormat">
                                <div class="videoFormatHeader">
                                    <span class="allVideosLabel videoFormatHeaderItem">
                                        Загрузки
                                    </span>
                                    <span class="playAllLabel videoFormatHeaderItem">
                                        ВОСПРОИЗВЕСТИ ВСЕ
                                    </span>
                                    <span class="allVideosLabel videoFormatHeaderItem">
                                        ТОП ТЕГИ
                                    </span>
                                </div>
                                <div class="videoFormatBody">
                                    <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id } })">
                                        <video controls >
                                            <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                        </video>
                                        <span>
                                            {{
                                                video.name
                                            }}
                                        </span>
                                        <div class="videoFooter">
                                            <span>
                                                {{
                                                    video.views
                                                }} просмотр
                                            </span>
                                            <span>
                                                {{
                                                    `${video.created.split('T')[0].split('-')[2]}/${video.created.split('T')[0].split('-')[1]}/${video.created.split('T')[0].split('-')[0]}`
                                                }}
                                                1 месяц назад
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeChannelTab === 'PlayLists'">
                        <div class="videoFormats">
                            <div class="videoFormat">
                                <div class="videoFormatHeader">
                                    <span class="allVideosLabel videoFormatHeaderItem">
                                        Все плэйлисты
                                    </span>
                                    <span class="allVideosLabel videoFormatHeaderItem">
                                        ТОП ТЕГИ
                                    </span>
                                </div>
                                <div class="videoFormatBody">
                                    <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id } })">
                                        <video controls >
                                            <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                        </video>
                                        <span class="likedVideoLabel">
                                            Понравившиеся
                                        </span>
                                        <div class="videoFooter">
                                            <span class="material-icons-outlined">
                                                shopping_bag
                                            </span>
                                            <span>
                                                Ограниченный доступ
                                            </span>
                                        </div>
                                        <span class="showPlayListLabel">
                                            ПОСМОТРЕТЬ ВЕСЬ ПЛЭЙЛИСТ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeChannelTab === 'Channels'">
                        <div class="notFoundChannels">
                            <span>
                                Здесь нет ссылок на другие каналы.
                            </span>
                        </div>
                    </div>
                    <div v-else-if="activeChannelTab === 'About'">
                        <div class="aboutChannel">
                            <div class="aboutChannelAside">
                                <span class="aboutChannelElement aboutChannelAsideItemHeader">
                                    Описание
                                </span>
                                <span class="aboutChannelElement">
                                    это канал карась геймс, мой канал о разработке моих инди игр. Также можно следить за разработкой в группе вк
                                </span>
                                <span class="aboutChannelElement">
                                    https://vk.com/karasgames
                                </span>
                            </div>
                            <div class="aboutChannelArticle">
                                    <span class="aboutChannelElement aboutChannelArticleItem aboutChannelArticleItemHeader">
                                        Статистика
                                    </span>
                                    <span class="aboutChannelElement aboutChannelArticleItem">
                                        Дата регистрации: 26 июн. 2021 г.
                                    </span>
                                    <span class="aboutChannelElement aboutChannelArticleItem">
                                        1 564 просмотра
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeChannelTab === 'Search'">
                        <div v-if="videos.filter(video => video.name.toLowerCase().includes(keywords.toLowerCase())).length <= 0" class="notFoundChannels">
                            <span>
                                На этом канале нет материалов, которые соответствуют запросу "{{ keywords }}".
                            </span>
                        </div>
                        <div v-else-if="videos.filter(video => video.name.toLowerCase().includes(keywords.toLowerCase())).length >= 1" class="videoFormats">
                            <div class="videoFormat">
                                <div class="videoFormatHeader">
                                    <span class="allVideosLabel videoFormatHeaderItem">
                                        Все видео
                                    </span>
                                    <span class="playAllLabel videoFormatHeaderItem">
                                        ВОСПРОИЗВЕСТИ ВСЕ
                                    </span>
                                </div>
                                <div class="videoFormatBody">
                                    <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id } })">
                                        <video controls >
                                            <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                        </video>
                                        <span>
                                            {{
                                                video.name
                                            }}
                                        </span>
                                        <div class="videoFooter">
                                            <span>
                                                {{
                                                    video.views
                                                }} просмотр
                                            </span>
                                            <span>
                                                {{
                                                    `${video.created.split('T')[0].split('-')[2]}/${video.created.split('T')[0].split('-')[1]}/${video.created.split('T')[0].split('-')[0]}`
                                                }}
                                                1 месяц назад
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Explore'">
                    B
                </div>
                <div v-else-if="activeTab === 'Subscriptions'">
                    C
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

export default {
    name: 'Channel',
    data() {
        return {
            burger: false,
            activeTab: 'Channel',
            activeChannelTab: 'Main',
            channel: {

            },
            videos: [],
            keywords: '',
            token: window.localStorage.getItem("videocachetoken")
        }
    },
    mounted() {
        this.getChannel()
        this.getVideos()
    },
    methods: {
        getVideos() {
            fetch(`http://localhost:4000/api/videos/all/`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    this.videos = JSON.parse(result).videos
                    this.videos = this.videos.filter(video => video.channel === this.$route.query.channelid)
                    alert('Получил группу видео')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить группу видео')
                }
            })
        },
        getChannel() {
            fetch(`http://localhost:4000/api/channels/get/?channelid=${this.$route.query.channelid}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    this.channel = JSON.parse(result).channel
                    alert('Получил канал')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить канал')
                }
            })
        },
        changeActiveTabHandler(tab) {
          this.activeTab = tab
        },
        toggleBurgerHandler(toggler) {
          this.burger = toggler
        },
    },
    components: {
        Header,
        Aside
    }
}
</script>

<style scoped>
    
    .main {
        display: flex;
        width: 100%;
        /* position: fixed; */
        /* top: 65px; */
        /* left: 20%; */
        
        height: 1000px;
    }

    .article {
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 35px;
        position: absolute;
        left: 10%;
        top: 65px;
        background-color: rgb(240, 240, 240);
        width: 90%;
        height: 1000px;
    }

    .aso {
        width: 100%;
        height: 250px;
        background-color: rgb(0, 100, 255);
    }

    .channelHeader {
        display: flex;
        justify-content: space-between;
    }

    .channelInfo {
        align-items: center;
        display: flex;
    }

    .channelInfoTextContent {
        display: flex;
        flex-direction: column;
    }

    .channelInfoItem {
        margin: 0px 10px;
    }

    .channelName {
        font-size: 24px;
        /* font-weight: bolder; */
    }

    .channelFollowers {

    }

    .channelBtns {
        display: flex;
        align-items: center;
    }

    .channelBtn {
        margin: 0px 10px;
    }

    .exportCSVLabel {
        color: rgb(150, 150, 150);
        font-weight: bolder;
    }

    .channelTabs {
        display: flex;
    }

    .channelTab {
        justify-content: center;
        display: flex;
        padding: 5px;
        width: calc(100% / 8);
        cursor: pointer;
        font-weight: bolder;
        color: rgb(125, 125, 125);
    }

    .channelTab:hover {
        color: rgb(0, 0, 0);
    }

    .activeChannelTab {
        border-bottom: 3px solid rgb(115, 115, 115);
        color: rgb(0, 0, 0);
    }

    .videoFormats {
        display: flex;
        flex-direction: column;
    }

    .videoFormat {
        display: flex;
        flex-direction: column;
    }

    .videoFormatHeader {
        cursor: pointer;
        display: flex;
    }

    .video {
        cursor: pointer;
        width: 225px;
        float: left;
        display: flex;
        flex-direction: column;
        margin: 25px;
    }

    .videoFormatHeaderItem {
        margin: 0px 10px;
    }

    .allVideosLabel {
        font-weight: bolder;
    }

    .playAllLabel {
        font-size: 18px;
        color: rgb(125, 125, 125);
    }

    .videoFooter {
        display: flex;
        font-size: 12px;
        color: rgb(125, 125, 125);
        justify-content: space-between;
    }

    .likedVideoLabel {
        font-weight: bolder;
    }

    .showPlayListLabel {
        font-weight: bolder;
        color: rgb(125, 125, 125);
    }

    .notFoundChannels {
        margin: 75px 0px;
        display: flex;
        justify-content: center;
    }

    .aboutChannel {
        display: flex;
        justify-content: space-between;
    }

    .aboutChannelAside {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid rgb(150, 150, 150);
    }

    .aboutChannelArticle {
        display: flex;
        flex-direction: column;
    }

    .aboutChannelArticleItem {
        border-bottom: 1px solid rgb(150, 150, 150);
    }

    .aboutChannelArticleItemHeader, .aboutChannelAsideItemHeader {
        font-weight: bolder;
        font-size: 18px;
        padding: 15px 0px;
    }

    .aboutChannelElement {
        margin: 15px 0px;
    }

    .searchField {
        width: 135px;
        margin: 0px 5px;
        height: 28px;
    }

    .searchChannelTab {
        display: flex;
        align-items: center;
    }
    

</style>