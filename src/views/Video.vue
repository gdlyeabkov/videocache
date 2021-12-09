<template>
    <div>
        <Header />
        <div class="main">
            <div class="aside">
                <video ref="mainVideoSource" height="465px" width="100%" controls>
                    <source />
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
                            {{ video.views }} просмотр
                        </span>
                        <span class="videoFooterElement">
                            {{
                                `${video.created.split('T')[0].split('-')[2]} ${monthLabels[video.created.split('T')[0].split('-')[1]]} ${video.created.split('T')[0].split('-')[0]} г.`
                            }}
                        </span>
                    </div>
                    <div class="videoFooterItem videoFooterArticle">
                        <span class="material-icons videoFooterElement">
                            more_horiz
                        </span>
                        <span class="material-icons videoFooterElement videoInteractionBtn" @click="addLike">
                            thumb_up
                        </span>
                        <span class="videoFooterElement">
                            {{
                                video.likes.length
                            }}
                        </span>
                        <span class="material-icons-outlined videoFooterElement videoInteractionBtn" @click="addDisLike">
                            thumb_down
                        </span>
                        <span class="videoFooterElement">
                            {{
                                video.dislikes.length
                            }}
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
                            <div :style="`background-image: url('http://localhost:4000/api/channels/source/get/?channelname=${channel.name}');`" class="videoChannelInfoItem videoChannelInfoLogo">

                            </div>
                            <div class="videoChannelInfoItem videoChannelInfoContent">
                                <span class="videoChannelInfoContentItem">
                                    {{
                                        channel.name
                                    }}
                                </span>
                                <span class="videoChannelInfoContentItem">
                                    {{
                                        channel.followers.length
                                    }}
                                    {{
                                        channel.followers.length.toString().endsWith(1) ?
                                            'подписчик'
                                        : (channel.followers.length.toString().endsWith(2) || channel.followers.length.toString().endsWith(3) || channel.followers.length.toString().endsWith(4)) ?
                                            'подписчика'
                                        :
                                            'подписчиков'
                                    }}
                                </span>
                            </div>
                        </div>
                        <div v-if="bloger.channels.map(channel => channel.id).includes($route.query.channelid)" class="aboutVideoHeaderItem aboutVideoHeaderBtns">
                            <button class="btn btn-primary aboutVideoHeaderBtn">
                                ПОСМОТРЕТЬ АНАЛИТИКУ
                            </button>
                            <button class="btn btn-primary aboutVideoHeaderBtn">
                                ИЗМЕНИТЬ ВИДЕО
                            </button>
                        </div>
                        <div v-else>
                            <button :disabled="channel.followers.map(follower => follower.bloger).includes(bloger.login)" class="btn btn-danger aboutVideoHeaderBtn" @click="follow">
                                ПОДПИСАТЬСЯ
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
                <div class="createPostContainer">
                    <div :style="`background-image: url('http://localhost:4000/api/blogers/source/get/?blogerlogin=${bloger.login}');`" class="blogerAvatar createPostContainerItem">

                    </div>
                    <input placeholder="Оставьте комментарий" v-model="post" type="text" class="createPostContainerItem form-control" @keyup.enter="sendPost" />
                </div>
                <div class="posts">
                    <div v-for="post in video.posts" :key="post.id" class="post">
                        <img :src="`http://localhost:4000/api/blogers/source/get/?blogerlogin=${post.bloger}`" class="blogerAvatar" />
                        <div class="postArticle">
                            <div class="postArticleItem postArticleHeader">
                                <span class="postArticleHeader">
                                    {{
                                        post.bloger
                                    }}
                                </span>
                                <span class="postArticleHeader">
                                    2 года назад
                                </span>
                                <span class="postArticleHeader">
                                    29 подписчики
                                </span>
                            </div>
                            <span class="postArticleItem">
                                {{
                                    post.message
                                }}
                            </span>
                            <div class="postArticleItem postArticleFooter">
                                <span class="postArticleFooterItem material-icons">
                                    thumb_up
                                </span>
                                <span class="postArticleFooterItem">
                                    117
                                </span>
                                <span class="postArticleFooterItem material-icons">
                                    thumb_down
                                </span>
                                <span class="postArticleFooterItem">
                                    ОТВЕТИТЬ
                                </span>
                                <span class="postArticleFooterItem material-icons">
                                    play_circle
                                </span>
                            </div>
                            <div class="postAnswers">
                                <span class="postAnswersItem material-icons">
                                    arrow_drop_down
                                </span>
                                <span class="postAnswersItem">
                                    Показать 22 ответа
                                </span>
                            </div>
                        </div>
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

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Video',
    data() {
        return {
            video: {
                name: '',
                posts: [],
                likes: [],
                dislikes: [],
                views: 0
            },
            otherVideos: [],
            bloger: {
                login: '',
                channels: []
            },
            post: '',
            channel: {
                followers: []
            },
            monthLabels: {
                '1': 'янв.',
                '2': 'фев.',
                '3': 'мар.',
                '4': 'апр.',
                '5': 'мая',
                '6': 'июн.',
                '7': 'июл.',
                '8': 'авг.',
                '9': 'сен.',
                '01': 'янв.',
                '02': 'фев.',
                '03': 'мар.',
                '04': 'апр.',
                '05': 'мая',
                '06': 'июн.',
                '07': 'июл.',
                '08': 'авг.',
                '09': 'сен.',
                '10': 'окт.',
                '11': 'ноя.',
                '12': 'дек.',
            },
            token: window.localStorage.getItem("videocachetoken")
        }
    },
    mounted() {
        jwt.verify(this.token, 'videocachesecret', (err, decoded) => {
            if (err) {
                alert('Не могу получить блогера')
                this.$router.push({ name: 'Home' })
            } else {
                this.getBloger(decoded.bloger)
            }
        })
        this.getVideo()
        this.getVideos()
        this.getChannel()
        this.addView()
    },
    methods: {
        addView() {
            
            fetch(`http://localhost:4000/api/videos/views/add/?videoid=${this.$route.query.videoid}`, {
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
                    alert('добавил просмотр')
                    this.video.views++
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу добавить просмотр')
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
                    alert('получил канал')
                    this.channel = JSON.parse(result).channel
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить канал')
                }
            })

        },
        follow() {
            
            fetch(`http://localhost:4000/api/channels/followers/add/?channelid=${this.$route.query.channelid}&blogerlogin=${this.bloger.login}`, {
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
                    this.channel.followers.push({
                        bloger: this.bloger.login,
                    })
                    alert('Подписался')
                    this.post = ''
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу подписаться')
                }
            })

        },
        addDisLike() {
            
            fetch(`http://localhost:4000/api/videos/dislikes/add/?videoid=${this.$route.query.videoid}&blogerlogin=${this.bloger.login}`, {
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
                    this.video.dislikes.push({
                        id: Math.floor(Math.random() * 5000),
                        bloger: this.bloger.login                        
                    })
                    alert('Добавил дизлайк')
                    this.post = ''
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу добавить дизлайк')
                }
            })

        },
        addLike() {
            
            fetch(`http://localhost:4000/api/videos/likes/add/?videoid=${this.$route.query.videoid}&blogerlogin=${this.bloger.login}`, {
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
                    this.video.likes.push({
                        id: Math.floor(Math.random() * 5000),
                        bloger: this.bloger.login                        
                    })
                    alert('Добавил лайк')
                    this.post = ''
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу добавить лайк')
                }
            })

        },
        getBloger(login) {
            
            fetch(`http://localhost:4000/api/blogers/get/?blogerlogin=${login}`, {
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
                    this.isAuth = true
                    this.bloger = JSON.parse(result).bloger
                    alert(`Получил блогера: ${this.bloger.login}`)
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить блогера')
                }
            })

        },
        sendPost() {
            fetch(`http://localhost:4000/api/videos/posts/add/?videoid=${this.$route.query.videoid}&blogerlogin=${this.bloger.login}&blogermessage=${this.post}`, {
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
                    this.video.posts.push({
                        id: Math.floor(Math.random() * 5000),
                        bloger: this.bloger.login,
                        message: this.post
                    })
                    alert('Добавил пост')
                    this.post = ''
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу добавить пост')
                }
            })

        },
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
                    this.$refs.mainVideoSource.src = `http://localhost:4000/api/videos/source/get/?videoname=${this.video.name}`
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
        background-size: 100% 100%;
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

    .createPostContainer {
        display: flex;
        align-items: center;
    }

    .blogerAvatar {
        background-size: 100% 100%;
        border-radius: 100%;
        background-color: rgb(0, 150, 0);
        width: 75px;
        height: 75px;
    }
    
    .createPostContainerItem {
        margin: 0px 5px;
    }

    .posts {
        display: flex;
        flex-direction: column;
    }

    .post {
        margin: 25px 0px;
        display: flex;
    }

    .postAside {
        
    }

    .postArticle {
        display: flex;
        flex-direction: column;
        margin: 0px 15px;
    }

    .postArticleItem {
        margin: 5px 0px;
    }

    .postArticleHeader {
        display: flex;
    }

    .postArticleFooter {
        display: flex;
        align-items: center;
    }

    .postAnswers {
        display: flex;
        align-items: center;
    }

    .postAnswersItem, .postArticleFooterItem, .postArticleHeader {
        margin: 0px 5px;
    }

    .postArticleFooterItem {
        font-size: 14px;
    }

    .videoInteractionBtn {
        cursor: pointer;
    }

</style>