<template>
  <div>
    <Header :burger="burger" @toggleBurger="toggleBurgerHandler" />
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
          <div class="videos">
            <div class="videosColum">
              <div v-for="video in 10" :key="video" class="video">
                <video class="videoHeader" controls>
                  <source src="../assets/video_example.mp4" />
                </video>
                <div class="videoFooter">
                  <div class="videoAvatar videoItem">
                    
                  </div>
                  <div class="aboutVideo videoItem">
                    <span class="videoName">
                      Selena Gomez, Ava Max - Break My Heart
                    </span>
                    <span>
                      Atlantic Music
                    </span>
                    <span>
                      2,9 млн просмотров
                    </span>
                    <span>
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
  name: 'Home',
  data() {
    return {
      burger: false,
      activeTab: 'Home',
      videoFilter: 'Все'
    }
  },
  methods: {
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
    width: 20%;
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

</style>
