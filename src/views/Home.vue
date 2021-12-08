<template>
  <div>
    <Header :burger="burger" @toggleBurger="toggleBurgerHandler" @changeActiveTab="changeActiveTabHandler" />
    <div clas="main">
      <Aside :burger="burger" :activeTab="activeTab" @changeActiveTab="changeActiveTabHandler" />
      <div class="article" :style="`left: ${burger ? '20%' : '10%'}`">
        <div v-if="activeTab === 'Home'">
          <div class="videoFilterControls">
            <span @click="videoFiltersMove(false)" class="videoFiltersMoverBtn material-icons videoFilterControl">
              chevron_left
            </span>
            <div class="videoFilters videoFilterControl" ref="videoFilters">
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Все' }" @click="videoFilter = 'Все'">
                <span>
                  Все
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Сейчас в эфире' }" @click="videoFilter = 'Сейчас в эфире'">
                <span>
                  Сейчас в эфире
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Музыка' }" @click="videoFilter = 'Музыка'">
                <span>
                  Музыка
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Природа' }" @click="videoFilter = 'Природа'">
                <span>
                  Природа
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Туризм' }" @click="videoFilter = 'Туризм'">
                <span>
                  Туризм
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Мультфильмы' }" @click="videoFilter = 'Мультфильмы'">
                <span>
                  Мультфильмы
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Скетч-шоу' }" @click="videoFilter = 'Скетч-шоу'">
                <span>
                  Скетч-шоу
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Рэп' }" @click="videoFilter = 'Рэп'">
                <span>
                  Рэп
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Экшн и приключения' }" @click="videoFilter = 'Экшн и приключения'">
                <span>
                  Экшн и приключения
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Кулинария' }" @click="videoFilter = 'Кулинария'">
                <span>
                  Кулинария
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Изобразительное искусство' }" @click="videoFilter = 'Изобразительное искусство'">
                <span>
                  Изобразительное искусство
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Последние опубликованные видео' }" @click="videoFilter = 'Последние опубликованные видео'">
                <span>
                  Последние опубликованные видео
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Просмотрено' }" @click="videoFilter = 'Просмотрено'">
                <span>
                  Просмотрено
                </span>
              </div>
              <div :class="{ videoFilter: true, activeVideoFilter: videoFilter === 'Новое для вас' }" @click="videoFilter = 'Новое для вас'">
                <span>
                  Новое для вас
                </span>
              </div>
            </div>
            <span @click="videoFiltersMove(true)" class="videoFiltersMoverBtn material-icons videoFilterControl">
              chevron_right
            </span>
          </div>
          <div v-if="videos.length <= 0" class="notFoundVideo">
            <span>
              Нет опубликованных видео
            </span>
          </div>
          <div v-else class="videos">
            <div class="videosColum">
              <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id, channelid: video.channel } })">
                <video class="videoHeader" controls  :id="`videoElement${video._id}Id`" @mouseenter="videoHoverHandler(`videoElement${video._id}Id`)" @mouseleave="videoHoutHandler(`videoElement${video._id}Id`)">
                  <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                </video>
                <div class="videoFooter">
                  <div :style="`background-image: url('${`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`}');`" class="videoAvatar videoItem">
                    
                  </div>
                  <div class="aboutVideo videoItem">
                    <span class="videoName">
                      {{
                        video.name
                      }}
                    </span>
                    <span>
                      {{
                        video.channelName
                      }}
                    </span>
                    <span>
                      {{
                        video.views
                      }} просмотров
                    </span>
                    <span>
                      {{
                        `${video.created.split('T')[0].split('-')[2]}/${video.created.split('T')[0].split('-')[1]}/${video.created.split('T')[0].split('-')[0]}`
                      }}
                      2 недели назад
                    </span>
                  </div>
                  <span class="material-icons videoItem">
                    more_vert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeTab === 'Explore'">
          <div class="exploreHeader">
            <div class="exploreHeaderItem">
              <div class="exploreElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconTrand">
                  whatshot
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  В тренде
                </span>
              </div>
              <div class="exploreElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconMusic">
                  music_note
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  Музыка
                </span>
              </div>
              <div class="exploreElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconFilms">
                  theaters
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  Фильмы
                </span>
              </div>
              <div class="exploreElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconTrand">
                  stream
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  Трансляции
                </span>
              </div>
              <div class="exploreElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconVideoGames">
                  sports_esports
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  Спорт
                </span>
              </div>
            </div>
            <div class="exploreHeaderItem">
              <div class="exploreElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconSport">
                  emoji_events
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  Спорт
                </span>
              </div>
              <div class="exploreElement exploreMockElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconTrand">
                  
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  
                </span>
              </div>
              <div class="exploreElement exploreMockElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconTrand">
                  
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  
                </span>
              </div>
              <div class="exploreElement exploreMockElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconTrand">
                  
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  
                </span>
              </div>
              <div class="exploreElement exploreMockElement">
                <span class="material-icons exploreElementItem exploreElementIcon exploreElementIconTrand">
                  
                </span>
                <span class="exploreElementItem exploreElemenContent">
                  
                </span>
              </div>
            </div>
          </div>
          <span class="popularVideosHeader">
            Популярные видео
          </span>
          <div class="popularVideos">
            <div class="popularVideo">
              <video controls width="250px">
                <source />
              </video>
              <div class="popularVideoInfo">
                <span class="popularVideoInfoItem popularVideoInfoItemHeader">
                  Новогоднее наступление 2022: Арнольд Шварценеггер и много подарков! [World of Tanks]
                </span>
                <div class="popularVideoInfoContainer popularVideoInfoItem">
                  <span class="popularVideoInfoContainerItem">
                    World of Tanks. Официальный видеоканал
                  </span>
                  <span class="popularVideoInfoContainerItem">
                    184 тыс. просмотров 6 часов назад
                  </span>
                </div>
                <span class="popularVideoInfoItem">
                  В World of Tanks начинается Новогоднее наступление 2022! В этом году тебя ждет еще больше подарков и сюрпризов, давн...
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeTab === 'Subscriptions'">
          <div class="subscriptionsHeader">
            <span class="lastDownloadsLabel">
              Последние загрузки
            </span>
            <div class="subscriptionsHeaderItem">
              <span class="subscriptionsHeaderElement subsControlLabel">
                УПРАВЛЕНИЕ ПОДПИСКАМИ
              </span>
              <span class="material-icons subscriptionsHeaderElement">
                view_module
              </span>
              <span class="material-icons subscriptionsHeaderElement">
                list
              </span>
            </div>
          </div>
          <div v-if="videos.length <= 0" class="notFoundVideo">
            <span>
              Нет загрузок
            </span>
          </div>
          <div v-else class="videos">
            <div class="videosColum">
              <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id } })">
                <video class="videoHeader" controls  :id="`videoElement${video._id}Id`" @mouseenter="videoHoverHandler(`videoElement${video._id}Id`)" @mouseleave="videoHoutHandler(`videoElement${video._id}Id`)">
                  <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                </video>
                <div class="videoFooter">
                  <div :style="`background-image: url('${`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`}');`" class="videoAvatar videoItem">
                    
                  </div>
                  <div class="aboutVideo videoItem">
                    <span class="videoName">
                      {{
                        video.name
                      }}
                    </span>
                    <span>
                      {{
                        video.channelName
                      }}
                    </span>
                    <span>
                      {{
                        video.views
                      }} просмотров
                    </span>
                    <span>
                      {{
                        `${video.created.split('T')[0].split('-')[2]}/${video.created.split('T')[0].split('-')[1]}/${video.created.split('T')[0].split('-')[0]}`
                      }}
                      2 недели назад
                    </span>
                  </div>
                  <span class="material-icons videoItem">
                    more_vert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeTab === 'Library'" class="library">
          <div class="libraryAside">
            <div class="libraryAsideHeader">
              <div class="libraryAsideHeaderHistory">
                <span class="libraryAsideHeaderHistoryItem material-icons">
                  history
                </span>
                <span class="libraryAsideHeaderHistoryItem">
                  История
                </span>
              </div>
              <span class="libraryAsideHeaderMore">
                ЕЩЕ
              </span>
            </div>
            
            <div v-if="videos.length <= 0" class="notFoundVideo">
            <span>
              Нет опубликованных видео
            </span>
          </div>
          <div v-else class="videos">
            <div class="videosColum">
              <div v-for="video in videos" :key="video" class="video" @click="$router.push({ name: 'Video', query: { videoid: video._id } })">
                <video class="videoHeader" controls  :id="`videoElement${video._id}Id`" @mouseenter="videoHoverHandler(`videoElement${video._id}Id`)" @mouseleave="videoHoutHandler(`videoElement${video._id}Id`)">
                  <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                </video>
                <div class="videoFooter">
                  <div :style="`background-image: url('${`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`}');`" class="videoAvatar videoItem">
                    
                  </div>
                  <div class="aboutVideo videoItem">
                    <span class="videoName">
                      {{
                        video.name
                      }}
                    </span>
                    <span>
                      {{
                        video.channelName
                      }}
                    </span>
                    <span>
                      {{
                        video.views
                      }} просмотров
                    </span>
                    <span>
                      {{
                        `${video.created.split('T')[0].split('-')[2]}/${video.created.split('T')[0].split('-')[1]}/${video.created.split('T')[0].split('-')[0]}`
                      }}
                      2 недели назад
                    </span>
                  </div>
                  <span class="material-icons videoItem">
                    more_vert
                  </span>
                </div>
              </div>
            </div>
          </div>

          </div>
          <div classs="libraryArticle">
            <img class="libraryArticleItem" width="75px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s160-c-k-c0x00ffffff-no-rj" alt="" />
            <span class="libraryArticleItem">
              KarasGames - разработчик игр
            </span>
            <div class="libraryArticleItem libraryArticleContainer">
              <span>
                Подписки
              </span>
              <span>
                1
              </span>
            </div>
            <div class="libraryArticleItem libraryArticleContainer">
              <span>
                Загрузки
              </span>
              <span>
                4
              </span>
            </div>
            <div class="libraryArticleItem libraryArticleContainer">
              <span>
                Отметки "Нравится"
              </span>
              <span>
                3
              </span>
            </div>
          </div>
        </div>
        <div v-else-if="activeTab === 'Purchases'">
          <span class="offersLabel">
            Специальные предложения VideoCache
          </span>
          <div class="offers">
            <div class="offer">
              <img src="https://www.gstatic.com/youtube/img/unlimited/ytu_desktop_premium_offer_450x254.png" alt="" />
              <span>
                Бесплатная пробная подписка YouTube Premium на месяц                
              </span>
              <span class="offerDesc">
                Оформите подписку YouTube Premium и смотрите видео без рекламы, в фоновом режиме и офлайн.
              </span>
              <span class="offerDetail">Подробнее</span>
            </div>
            <div class="offer">
              <img src="https://www.gstatic.com/youtube/img/unlimited/ytu_desktop_music_offer_450x254.png" alt="" />
              <span>
                Бесплатная пробная подписка YouTube Premium на месяц                
              </span>
              <span class="offerDesc">
                Оформите подписку YouTube Premium и смотрите видео без рекламы, в фоновом режиме и офлайн.
              </span>
              <span class="offerDetail">Подробнее</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

export default {
  name: 'Home',
  data() {
    return {
      burger: false,
      activeTab: 'Home',
      videoFilter: 'Все',
      videos: []
    }
  },
  mounted() {
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
            alert('Получил группу видео')
        } else if (JSON.parse(result).status === 'Error') {
            alert('Не могу получить группу видео')
        }
    })
  },
  methods: {
    videoHoutHandler(videoId) {
      document.getElementById(videoId).pause()
    },
    videoHoverHandler(videoId) {
      document.getElementById(videoId).play()
      
    },
    getChannel(channelId) {
      fetch(`http://localhost:4000/api/channels/get/?channelid=${channelId}`, {
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
        alert('Получил канал')
        return JSON.parse(result).channel
      } else if (JSON.parse(result).status === 'Error') {
        alert('Не могу получить канал')
      }
    })
  },
    toggleBurgerHandler(toggler) {
      this.burger = toggler
    },
    changeActiveTabHandler(tab) {
      this.activeTab = tab
    },
    videoFiltersMove(isForward) {
      let speedScroll = 100
      let delta = -1
      if (isForward) {
        delta = 1
      } else if (!isForward) {
        delta = -1
      }
      this.$refs.videoFilters.scrollLeft += speedScroll * delta
    }
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

  .videoFilterControls {
    display: flex;
    align-items: center;
    height: 75px;
    border-top: 1px solid rgb(150, 150, 150);
    border-bottom: 1px solid rgb(150, 150, 150);
  }

  .videoFilterControl {
    margin: 0px 10px;
  }

  .videoFilters {
    display: flex;
    height: 100%;
    align-items: center;
    overflow-x: hidden;
  }

  .videoFilter {
    margin: 0px 15px;
    border-radius: 15px;
    min-width: 285px;
    /* padding: 5px 15px; */
    height: 35px;
    background-color: rgb(235, 235, 235);
    border: 1px solid rgb(150, 150, 150);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }

  .activeVideoFilter {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }

  .videoFiltersMoverBtn {
    cursor: pointer;
  }

  .videos {
    display: flex;
    width: 100%;
    margin: 25px 0px;
  }

  .videosColumn {
    margin: 0px 15px;
    display: flex;
    flex-direction: column;
    width: 22%;
  }
  
  .video {
    cursor: pointer;
    /* width: 20%; */
    width: 225px;
    float: left;
    margin: 25px;
    display: flex;
    /* width: 100%; */
    /* height: 150px; */
    flex-direction: column;
  }

  .videoHeader {
    height: 150px;
    /* background-color: rgb(0, 0, 0); */
  }

  .videoFooter {
    display: flex;
    justify-content: space-between;
  }

  .videoAvatar {
    border-radius: 100%;
    width: 60px;
    height: 40px;
    background-color: rgb(255, 0, 0);
    margin: 5px;
  }

  .videoName {
    font-weight: bolder;
  }

  .aboutVideo {
    font-size: 12px;
    display: flex;
    flex-direction: column;
  }

  .videoItem {
    margin: 5px;
  }

  .notFoundVideo {
    display: flex;
    justify-content: center;
    margin: 50px 0px;
  }

  .exploreHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .exploreHeaderItem {
    display: flex;
    margin: 15px 0px;
  }

  .exploreElement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 20%;
    height: 150px;
    box-sizing: border-box;
    padding: 15px;
    background-color: rgb(255, 255, 255);
    margin: 0px 15px;
  }

  .exploreElementItem {
    margin: 15px 0px;
  }

  .exploreElementIcon {
    font-size: 48px;
  }

  .exploreElementIconTrand {
    color: rgb(255, 0, 0);
  }

  .exploreElementIconSport {
    color: rgb(0, 100, 255);
  }

  .exploreElementIconVideoGames {
    color: rgb(230, 0, 0);
  }

  .exploreElementIconFilms {
    color: rgb(150, 10, 255);
  }

  .exploreElementIconMusic {
    color: rgb(255, 225, 0);
  }

  .exploreElemenContent {
    font-weight: bolder;
  }

  .exploreMockElement {
    background-color: transparent;
  }

  .popularVideos {
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
  }

  .popularVideo {
    display: flex;
  }

  .popularVideoInfo {
    margin: 0px 50px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .popularVideoInfoContainer {
    display: flex;
    align-items: center;
  }

  .popularVideoInfoContainerItem {
    margin: 0px 5px;
  }

  .popularVideosHeader {
    font-weight: bolder;
  }

  .popularVideoInfoItem {
    margin: 3px 0px;
  }

  .popularVideoInfoItemHeader {
    font-weight: bolder;
    font-size: 18px;
  }

  .subscriptionsHeader {
    display: flex;
    justify-content: space-between;
  }

  .subscriptionsHeaderItem {
    display: flex;
    align-items: center;
  }

  .subscriptionsHeaderElement {
    margin: 0px 5px;
  }

  .subsControlLabel {
   cursor: pointer;
   font-weight: bolder;
   color: rgb(0, 100, 255); 
  }

  .lastDownloadsLabel {
    font-weight: bolder;
  }

  .offersLabel {
    font-size: 24px;
  }

  .offers {
    display: flex;
    margin: 15px;
  }

  .offer {
    box-sizing: border-box;
    padding: 15px;
    margin: 0px 25px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(150, 150, 150);
    width: 275px;
    height: 300px;
  }

  .offerDesc {
    font-size: 12px;
  }

  .offerDetail {
    cursor: pointer;
    font-weight: bolder;
    color: rgb(0, 100, 255);
  }

  .library {
    display: flex;
  }

  .libraryAside {
    width: 75%;
    /* display: flex; */
  }

  .libraryArticle {
    align-items: center;
    width: 25%;
    display: flex;
    flex-direction: column;
  }

  .libraryArticleContainer {
    padding: 10px 0px;
    border-top: 1px solid rgb(175, 175, 175);
    border-bottom: 1px solid rgb(175, 175, 175);
    justify-content: space-between;
  }

  .libraryArticleItem {
    display: flex;
  }

  .libraryAsideHeader {
    display: flex;
    justify-content: space-between;
  }

  .libraryAsideHeaderMore {
    color: rgb(0, 100, 255);
    font-weight: bolder;
    cursor: pointer;
  }

  .libraryAsideHeaderHistory {
    display: flex;
    align-items: center;
  }

  .libraryAsideHeaderHistoryItem {
    margin: 0px 5px;
  }

</style>
