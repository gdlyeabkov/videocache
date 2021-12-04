<template>
    <div>
        <Header :burger="burger" @toggleBurger="toggleBurgerHandler" />
        <div clas="main">
            <Aside :burger="burger" :activeTab="activeTab" @changeActiveTab="changeActiveTabHandler" />        
            <div class="article" :style="`left: ${burger ? '20%' : '10%'}`">
                <div v-if="activeTab === 'Channel'">
                    <div class="aso">
                        
                    </div>
                    <div class="channelHeader">
                        <div class="channelInfo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" width="60px" class="channelInfoItem" />
                            <div class="channelInfoTextContent">
                                <span class="channelInfoItem channelName">
                                    KarasGames - разработчик игр
                                </span>
                                <span class="channelInfoItem channelFollowers">
                                    25 подписчиков
                                </span>
                            </div>
                        </div>
                        <div class="channelBtns">
                            <button class="btn btn-primary channelBtn">
                                Настроить вид канала
                            </button>
                            <button class="btn btn-primary channelBtn">
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
                        <div :class="{ channelTab: true, activeChannelTab: activeChannelTab === 'Search' }" @click="activeChannelTab = 'Search'">
                            <span class="material-icons">
                                search
                            </span>
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
                    <div class="videoFormats">
                        <div class="videoFormat">
                            <div class="videoFormatHeader">
                                <span>
                                    Все видео
                                </span>
                                <span>
                                    ВОСПРОИЗВЕСТИ ВСЕ
                                </span>
                            </div>
                            <div class="videoFormatBody">
                                
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
            token: window.localStorage.getItem("videocachetoken")
        }
    },
    mounted() {
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
    methods: {
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
        position: fixed;
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
        display: flex;
    }


</style>