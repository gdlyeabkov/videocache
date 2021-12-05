<template>
    <div>
        <Header />
        <div class="main">
            <div class="aside">
                <video height="465px" width="100%" controls>
                    <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                </video>
                <div class="videoHeader">
                    <span class="videoHeaderItem">
                        {{
                            video.name
                        }}
                    </span>
                </div>
                <div class="videoFooter">
                    <div class="videoFooterItem videoFooterAside">
                        <span class="videoFooterElement">
                            281 просмотр
                        </span>
                        <span class="videoFooterElement">
                            16 окт. 2021 г.
                        </span>
                    </div>
                    <div class="videoFooterItem videoFooterArticle">
                        <span class="material-icons videoFooterElement">
                            more_horiz
                        </span>
                        <span class="material-icons videoFooterElement">
                            thumb_up
                        </span>
                        <span class="videoFooterElement">
                            10
                        </span>
                        <span class="material-icons-outlined videoFooterElement">
                            thumb_down
                        </span>
                        <span class="videoFooterElement">
                            Не нравится
                        </span>
                        <span class="material-icons-outlined videoFooterElement">
                            reply
                        </span>
                        <span class="videoFooterElement">
                            Поделиться
                        </span>
                        <span class="videoFooterElement">
                            Сохранить
                        </span>
                        <span class="material-icons videoFooterElement">
                            more_horiz
                        </span>
                    </div>
                </div>
                <hr />
                <div class="aboutVideo">
                    <div class="aboutVideoHeader">
                        <div class="aboutVideoHeaderItem videoChannelInfo">
                            <div class="videoChannelInfoItem videoChannelInfoLogo">

                            </div>
                            <div class="videoChannelInfoItem videoChannelInfoContent">
                                <span class="videoChannelInfoContentItem">
                                    s
                                </span>
                                <span class="videoChannelInfoContentItem">
                                    25 подписчиков
                                </span>
                            </div>
                        </div>
                        <div class="aboutVideoHeaderItem aboutVideoHeaderBtns">
                            <button class="btn btn-primary aboutVideoHeaderBtn">
                                ПОСМОТРЕТЬ АНАЛИТИКУ
                            </button>
                            <button class="btn btn-primary aboutVideoHeaderBtn">
                                ИЗМЕНИТЬ ВИДЕО
                            </button>
                        </div>
                    </div>
                    <span class="aboutVideoContent">
                        В этом видео показываю как я делаю анимацию и импортирую в unity.
                    </span>
                    <span class="aboutVideoContent">
                        Это канал карась геймс, мой канал о разработке моих инди игр. Также можно следить за
                    </span>
                    <span class="aboutVideoContentMore">
                        ЕЩЕ
                    </span>
                </div>
                <hr />
                <div class="commentsHeader">
                    <span class="commentsHeaderItem">
                        1 комментарий
                    </span>
                    <div class="commentsHeaderItem">
                        <span class="commentsHeaderItem">
                            1 комментарий
                        </span>
                        <span class="commentsHeaderItem">
                            1 комментарий
                        </span>
                    </div>
                </div>
            </div>
            <div class="article">
                <div class="otherVideos">
                    <div v-for="otherVideo in otherVideos" :key="otherVideo._id" class="otherVideo">
                        <video controls class="otherVideoPreview">
                            <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${otherVideo.name}`" />
                        </video>
                        <div class="otherVideoAside">
                            <span class="otherVideoAsideItem otherVideoAsideHeader">
                                {{
                                    otherVideo.name
                                }}
                            </span>
                            <span class="otherVideoAsideItem otherVideoAsideContent">
                                {{
                                    otherVideo.channelName
                                }}
                            </span>
                            <span class="otherVideoAsideItem otherVideoAsideContent">
                                {{
                                    otherVideo.views
                                }} просмотров
                            </span>
                            <span class="otherVideoAsideItem otherVideoAsideContent">
                                {{
                                    `${otherVideo.created.split('T')[0].split('-')[2]}/${otherVideo.created.split('T')[0].split('-')[1]}/${otherVideo.created.split('T')[0].split('-')[0]}`
                                }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
    name: 'Video',
    data() {
        return {
            video: {
                name: ''
            },
            otherVideos: [],
        }
    },
    mounted() {
        this.getVideo()
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
                    this.otherVideos = JSON.parse(result).videos
                    alert('Получил группу видео')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить группу видео')
                }
            })
        },
        getVideo() {
            fetch(`http://localhost:4000/api/video/get/?videoid=${this.$route.query.videoid}`, {
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
                    this.video = JSON.parse(result).video
                    alert(`Получил видео: ${this.video.name}`)
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить видео')
                }
            })
        }
    },
    components: {
        Header
    }
}
</script>

<style scoped>
    
    .main {
        display: flex;
        position: absolute;
        top: 65px;
        background-color: rgb(240, 240, 240);
        width: 100%;
        height: 1000px;
        box-sizing: border-box;
        padding: 25px;
    }

    .aside {
        width: 70%;
        display: flex;
        flex-direction: column;
        margin: 0px 15px;
    }

    .article {
        width: 30%;
        margin: 0px 15px;
    }

    .otherVideo {
        display: flex;
        margin: 15px 0px;
    }

    .otherVideoAside {
        display: flex;
        flex-direction: column;
    }

    .otherVideoAsideItem {
        margin: 2px 15px;
    }

    .otherVideoAsideHeader {
        font-weight: bolder;
    }

    .otherVideoAsideContent {
        color: rgb(125, 125, 125);
        font-size: 12px;
    }

    .otherVideoPreview {
        width: 200px;
        height: 150px;
    }

    .videoHeader {
        margin: 15px 0px;
        display: flex;
        justify-content: flex-start;
    }

    .videoHeaderItem {
        font-size: 24px;
    }

    .videoFooter {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .videoFooterItem {
        display: flex;
        align-items: center;
    }

    .videoFooterAside {
        width: 35%;
        color: rgb(125, 125, 125);
    }

    .videoFooterArticle {
        width: 75%;
        justify-content: flex-end;
        font-weight: bolder;
    }

    .videoFooterElement {
        margin: 0px 5px;
    }

    .aboutVideo {
        display: flex;
        flex-direction: column;
    }

    .aboutVideoHeader {
        display: flex;
        justify-content: space-between;
    }

    .aboutVideoHeaderItem {
        
    }

    .aboutVideoContent {
        
    }

    .aboutVideoContentMore {
        font-size: 18px;
        color: rgb(125, 125, 125);
    }

    .aboutVideoHeaderBtn {
        margin: 0px 5px;
    }

    .videoChannelInfo {
        display: flex;
        align-items: center;
    }

    .videoChannelInfoLogo {
        border-radius: 100%;
        width: 35px;
        height: 35px;
        background-color: rgb(0, 150, 0);
    }

    .videoChannelInfoContent {
        display: flex;
        flex-direction: column;
    }

    .videoChannelInfoItem {
        margin: 0px 10px;
    }

    .commentsHeader {
        display: flex;
    }

</style>