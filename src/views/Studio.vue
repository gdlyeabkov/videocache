<template>
    <div>
        <StudioHeader />
        <div class="main">
            <StudioAside :activeTab="activeTab" @changeActiveTab="changeActiveTabHandler" @toggleSettings="toggleSettingsHandler" @toggleFeedback="toggleFeedbackHandler" />
            <div class="article">
                <div v-if="activeTab === 'Main'">
                    <div class="mainHeader">
                        <span class="mainHeaderTitle">
                            Панель управления каналом
                        </span>
                        <div class="mainHeaderItem">
                            <button class="btn btn-light material-icons mainHeaderElement">
                                upload
                            </button>
                            <button class="btn btn-light material-icons mainHeaderElement">
                                stream
                            </button>
                        </div>
                    </div>
                    <div class="mainBody">
                        <div class="mainBodyItemColumn">
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Эффективность недавно загруженного видео
                                </span>
                                <img src="https://i9.ytimg.com/vi_webp/0pZWYKEIdNQ/sddefault.webp?v=616ae74f&sqp=CLTht40G&rs=AOn4CLDLx7uPrjHOzb_rbWmPtOwHqVEmNg" alt="" />
                                <span>
                                    50 дней 20 часов после публикации:
                                </span>
                                <span class="showStatisticksByVideo">
                                    ПОСМОТРЕТЬ СТАТИСТИКУ ПО ВИДЕО
                                </span>
                                <span class="goToComments">
                                    ПЕРЕЙТИ К КОММЕНТАРИЯМ(1)
                                </span>
                            </div>
                        </div>
                        <div class="mainBodyItemColumn">
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Аналитика по каналу
                                </span>
                                <span>
                                    Подписчики
                                </span>
                                <span class="mainBodyItemFollowersCount">
                                    {{
                                        channel.followers.length
                                    }}
                                </span>
                                <span>
                                    +{{ totalViewsFromPeriod }} за последние 28 дней
                                </span>
                                <div class="separator">

                                </div>
                                <span class="mainBodyItemHeader">
                                    Сводные данные
                                </span>
                                <span>
                                    Последние 28 дней
                                </span>
                                <div class="mainBodyItemDataRow">
                                    <span>
                                        Просмотры
                                    </span>
                                    <div class="mainBodyItemDataRowCount">
                                        <span class="mainBodyItemDataRowItem">
                                            {{
                                                totalViews
                                            }}
                                        </span>
                                        <span class="mainBodyItemDataRowItem">
                                            —
                                        </span>
                                    </div>
                                </div>
                                <div class="mainBodyItemDataRow">
                                    <span>
                                        Время просмотра (часы)
                                    </span>
                                    <div class="mainBodyItemDataRowCount">
                                        <span class="mainBodyItemDataRowItem">
                                            3,0
                                        </span>
                                        <span class="mainBodyItemDataRowItem">
                                            —
                                        </span>
                                    </div>
                                </div>                                
                                <div class="separator">

                                </div>
                                <span class="mainBodyItemHeader">
                                    Лучшие видео
                                </span>
                                <span>
                                    Последние 48 часов · Просмотры
                                </span>
                                <!-- <div class="mainBodyItemDataRow">
                                    <span>
                                        СОЗДАНИЕ АНИМАЦИИ ДЛЯ 2D ПЕРСОНАЖЕЙ | ИМПОРТ АНИМАЦИИ В UNITY
                                    </span>
                                    <div class="mainBodyItemDataRowCount">
                                        <span class="mainBodyItemDataRowItem">
                                            13
                                        </span>
                                        <span class="mainBodyItemDataRowItem">
                                            —
                                        </span>
                                    </div>
                                </div>
                                <div class="mainBodyItemDataRow">
                                    <span>
                                        Сделал клон игры swamp attack
                                    </span>
                                    <div class="mainBodyItemDataRowCount">
                                        <span class="mainBodyItemDataRowItem">
                                            2
                                        </span>
                                        <span class="mainBodyItemDataRowItem">
                                            —
                                        </span>
                                    </div>
                                </div>
                                <div class="mainBodyItemDataRow">
                                    <span>
                                        Как я начал делать игры или мой путь в геймдев
                                    </span>
                                    <div class="mainBodyItemDataRowCount">
                                        <span class="mainBodyItemDataRowItem">
                                            1
                                        </span>
                                        <span class="mainBodyItemDataRowItem">
                                            —
                                        </span>
                                    </div>
                                </div>                                 -->
                                <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="mainBodyItemDataRow">
                                    <span>
                                        {{
                                            video.name
                                        }}
                                    </span>
                                    <div class="mainBodyItemDataRowCount">
                                        <span class="mainBodyItemDataRowItem">
                                            {{
                                                video.views
                                            }}
                                        </span>
                                        <span class="mainBodyItemDataRowItem">
                                            —
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Новые комментарии
                                </span>
                                <span>
                                    Комментарии, на которые вы ещё не ответили 
                                </span>
                                <!-- <div class="comment">
                                    <img class="commentItem" src="https://yt3.ggpht.com/vZ5f4p6HG9FhmCv0zkY4Cc-8Ma405_gtS3COgxhCxiXNyhxFKUQHuqif4hoWbAludibzLAtTqw=s176-c-k-c0x00ffffff-no-rj" alt="" width="50px" />
                                    <div class="commentColumn commentItem">
                                        <span>
                                            Coolinar •2 месяца назад
                                        </span>
                                        <span>
                                            для того чтобы делать много уровней не надо 
                                        </span>
                                    </div>
                                    <img class="commentItem" src="https://i9.ytimg.com/vi_webp/a7VuEDl71k4/maxresdefault.webp?v=61111ef4&sqp=CLTht40G&rs=AOn4CLCqcxDK0FS5ChN6MjdfZBiFYquH1Q" alt="" width="75px" />
                                </div> -->
                                <div v-for="post in posts" :key="post" class="comment">
                                    <img class="commentItem" :src="`http://localhost:4000/api/blogers/source/get/?blogerlogin=${post.bloger}`" alt="" width="50px" />
                                    <div class="commentColumn commentItem">
                                        <span>
                                            {{
                                                post.bloger
                                            }} •2 месяца назад
                                        </span>
                                        <span>
                                            {{
                                                post.message
                                            }}
                                        </span>
                                    </div>
                                    <img class="commentItem" src="https://i9.ytimg.com/vi_webp/a7VuEDl71k4/maxresdefault.webp?v=61111ef4&sqp=CLTht40G&rs=AOn4CLCqcxDK0FS5ChN6MjdfZBiFYquH1Q" alt="" width="35px" />
                                </div>
                                <span class="showAllComments">
                                    ЕЩЕ
                                </span>
                            </div>
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Новые подписчики
                                </span>
                                <span>
                                    Последние 90 дней
                                </span>
                                <!-- <div class="follower">
                                    <img src="https://yt3.ggpht.com/ytc/AKedOLQ52CEY-HSIxQiEd19UUyJq3HaYBCEc1viJw1In=s48-c-k-c0x00ffffff-no-rj" alt="" width="50px" class="followerAvatar" />
                                    <div class="followerInfo">
                                        <span>
                                            ANDREY BARANOV
                                        </span>
                                        <span>
                                            8 подписчиков
                                        </span>
                                    </div>
                                </div>
                                <div class="follower">
                                    <img src="https://yt3.ggpht.com/ytc/AKedOLREkANc-Nb2bLYX1PLlDTG6-uPsg_kcZh3w9R7RhQ=s48-c-k-c0x00ffffff-no-rj" alt="" width="50px" class="followerAvatar" />
                                    <div class="followerInfo">
                                        <span>
                                            Daming Home
                                        </span>
                                        <span>
                                            1 подписчик
                                        </span>
                                    </div>
                                </div>
                                <div class="follower">
                                    <img src="https://yt3.ggpht.com/ytc/AKedOLRS1LPVkmS5aSuoy03_59WO34EGE-ViZ8kPgCJH=s48-c-k-c0x00ffffff-no-rj" alt="" width="50px" class="followerAvatar" />
                                    <div class="followerInfo">
                                        <span>                                            
                                            عالم عبودي
                                        </span>
                                    </div>
                                </div> -->
                                <div v-for="follower in channel.followers" :key="follower.bloger" class="follower">
                                    <img :src="`http://localhost:4000/api/blogers/source/get/?blogerlogin=${follower.bloger}`" alt="" width="50px" class="followerAvatar" />
                                    <div class="followerInfo">
                                        <span>
                                            {{
                                                follower.bloger
                                            }}
                                        </span>
                                        <span>
                                            {{
                                                follower.followers
                                            }}
                                            <!-- {{
                                                follower.followers.toString().endsWith(1) ?
                                                    'подписчик'
                                                : (follower.followers.length.toString().endsWith(2) || channel.followers.length.toString().endsWith(3) || channel.followers.length.toString().endsWith(4)) ?
                                                    'подписчика'
                                                :
                                                    'подписчиков'
                                            }} -->
                                        </span>
                                    </div>
                                </div>
                                <span class="showAllFollowers">
                                    ПОКАЗАТЬ ВСЕХ
                                </span>
                            </div>
                        </div>
                        <div class="mainBodyItemColumn">
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Новости     
                                </span>
                                <img src="https://www.gstatic.com/youtube/img/promos/growth/b0a7a8e8d57a055c49e26107330cf6620f8d8cb6f0b14aecc65216dc27c8f152_380x170.png" alt="" />
                                <span class="mainBodyItemHeader">
                                    Сайт для поддержки авторов YouTube
                                </span>
                                <span>
                                    Мы запустили сайт YouTube для авторов, на котором вы можете найти ответы на свои самые частые вопросы
                                </span>
                            </div>
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Идеи для вас
                                </span>
                                <span>
                                    Объединяйте ролики в плейлисты
                                </span>
                                <div class="ideaRow">
                                    <span>
                                        Узнайте, как поддерживать интерес зрителей с помощью плейлистов и отложенных публикаций.
                                    </span>
                                    <img src="https://www.gstatic.com/youtube/img/promos/growth/4707cd8853fdb408085dfc785990f32494b77a242d3bddffb26481c88c0cf43c_160x160.png" alt="" width="75px" />
                                </div>
                                <span class="goIdeas">
                                    ПРОЙТИ
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Content'">
                    <span class="contentHeader">
                        Контент на канале
                    </span>
                    <div class="contentTabs">
                        <div :class="{ contentTab: true, activeContentTab: activeContentTab === 'Downloads' }" @click="activeContentTab = 'Downloads'">
                            <span>
                                Загрузки
                            </span>
                        </div>
                        <div :class="{ contentTab: true, activeContentTab: activeContentTab === 'Streams' }" @click="activeContentTab = 'Streams'">
                            <span>
                                Трансляции
                            </span>
                        </div>
                    </div>
                    <div v-if="activeContentTab === 'Downloads'" class="downloads">
                        <div class="splitter">

                        </div>
                        <div class="filterRow">
                            <span class="material-icons">
                                filter_list
                            </span>
                            <input placeholder="Фильтр" type="text" class="form-control filterInputField" />
                        </div>
                        <div class="splitter">

                        </div>  
                        <div class="contentTable">
                            <div class="contentColumn primaryContentColumn">
                                <!-- <input class="contentRow" type="checkbox" />
                                <input class="contentRow" type="checkbox" />
                                <input class="contentRow" type="checkbox" />
                                <input class="contentRow" type="checkbox" />
                                <input class="contentRow" type="checkbox" />
                                <input class="contentRow" type="checkbox" /> -->
                                 <input v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow" type="checkbox" />
                            </div>
                            <div class="contentColumn secondaryContentColumn">
                                <span class="contentRow">
                                    Видео
                                </span>
                                <!-- <div class="contentRow">
                                    <video width="150px" controls>
                                        <source />
                                    </video>
                                </div>
                                <div class="contentRow">
                                    <video width="150px" controls>
                                        <source />
                                    </video>
                                </div>
                                <div class="contentRow">
                                    <video width="150px" controls>
                                        <source />
                                    </video>
                                </div>
                                <div class="contentRow">
                                    <video width="150px" controls>
                                        <source />
                                    </video>
                                </div>
                                <div class="contentRow">
                                    <video width="150px" controls>
                                        <source />
                                    </video>
                                </div> -->
                                <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow">
                                    <video width="150px" controls>
                                        <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                    </video>
                                </div>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Параметры доступа
                                </span>
                                <!-- <div class="contentRow contentColumnDateField">
                                    <span class="material-icons contentColumnDateFieldItem">
                                        visibility
                                    </span>
                                    <span class="contentColumnDateFieldItem">
                                        Открытый
                                    </span>
                                </div>
                                <div class="contentRow contentColumnDateField">
                                    <span class="material-icons contentColumnDateFieldItem">
                                        visibility
                                    </span>
                                    <span class="contentColumnDateFieldItem">
                                        Открытый
                                    </span>
                                </div>
                                <div class="contentRow contentColumnDateField">
                                    <span class="material-icons contentColumnDateFieldItem">
                                        visibility
                                    </span>
                                    <span class="contentColumnDateFieldItem">
                                        Открытый
                                    </span>
                                </div>
                                <div class="contentRow contentColumnDateField">
                                    <span class="material-icons contentColumnDateFieldItem">
                                        visibility
                                    </span>
                                    <span class="contentColumnDateFieldItem">
                                        Открытый
                                    </span>
                                </div>
                                <div class="contentRow contentColumnDateField">
                                    <span class="material-icons contentColumnDateFieldItem">
                                        visibility
                                    </span>
                                    <span class="contentColumnDateFieldItem">
                                        Открытый
                                    </span>
                                </div> -->
                                <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow contentColumnDateField">
                                    <span class="material-icons contentColumnDateFieldItem">
                                        visibility
                                    </span>
                                    <span class="contentColumnDateFieldItem">
                                        Открытый
                                    </span>
                                </div>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Ограничения
                                </span>
                                 <!-- <span class="contentRow">
                                    Нет
                                 </span>
                                 <span class="contentRow">
                                    Нет
                                 </span>
                                 <span class="contentRow">
                                    Нет
                                 </span>
                                 <span class="contentRow">
                                    Нет
                                 </span>
                                 <span class="contentRow">
                                    Нет
                                 </span> -->
                                 <span v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow">
                                    Нет
                                 </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <div class="contentRow contentColumnDateField">
                                    <span class="contentColumnDateFieldItem">
                                        Дата
                                    </span>
                                    <span class="material-icons contentColumnDateFieldItem">
                                        expand_more
                                    </span>
                                </div>
                                <!-- <span class="contentRow">
                                    13 сент. 2021 г.
                                </span>
                                <span class="contentRow">
                                    13 сент. 2021 г.
                                </span>
                                <span class="contentRow">
                                    13 сент. 2021 г.
                                </span>
                                <span class="contentRow">
                                    13 сент. 2021 г.
                                </span>
                                <span class="contentRow">
                                    13 сент. 2021 г.
                                </span> -->
                                <span v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow">
                                    {{
                                        `${video.created.split('T')[0].split('-')[2]} ${monthLabels[video.created.split('T')[0].split('-')[1]]} ${video.created.split('T')[0].split('-')[0]} г.`
                                    }}
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Просмотры
                                </span>
                                <!-- <span class="contentRow">
                                    289
                                </span>
                                <span class="contentRow">
                                    289
                                </span>
                                <span class="contentRow">
                                    289
                                </span>
                                <span class="contentRow">
                                    289
                                </span>
                                <span class="contentRow">
                                    289
                                </span> -->
                                <span v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow">
                                    {{
                                        video.views
                                    }}
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Комментарии
                                </span>
                                <!-- <span class="contentRow">
                                    1
                                </span>
                                <span class="contentRow">
                                    1
                                </span>
                                <span class="contentRow">
                                    1
                                </span>
                                <span class="contentRow">
                                    1
                                </span>
                                <span class="contentRow">
                                    1
                                </span> -->
                                <span v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow">
                                    1
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    %'Нравиться'
                                </span>
                                <!-- <span class="contentRow">
                                    90%
                                </span>
                                <span class="contentRow">
                                    90%
                                </span>
                                <span class="contentRow">
                                    90%
                                </span>
                                <span class="contentRow">
                                    90%
                                </span>
                                <span class="contentRow">
                                    90%
                                </span> -->
                                <span v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="contentRow">
                                    {{
                                        (100 / (((video.likes.length + video.dislikes.length) / 100) * (100 / video.likes.length)))
                                    }}%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeContentTab === 'Streams'" class="downloads">
                        <div class="splitter">

                        </div>
                        <div class="filterRow">
                            <span class="material-icons">
                                filter_list
                            </span>
                            <input placeholder="Фильтр" type="text" class="form-control filterInputField" />
                        </div>
                        <div class="splitter">

                        </div>  
                        <div class="contentTable">
                            <div class="contentColumn primaryContentColumn">
                                <input class="contentRow" type="checkbox" />
                            </div>
                            <div class="contentColumn secondaryContentColumn">
                                <span class="contentRow">
                                    Видео
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Параметры доступа
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Ограничения
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <div class="contentRow contentColumnDateField">
                                    <span class="contentColumnDateFieldItem">
                                        Дата
                                    </span>
                                    <span class="material-icons contentColumnDateFieldItem">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Просмотры
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    Комментарии
                                </span>
                            </div>
                            <div class="contentColumn thirdaryContentColumn">
                                <span class="contentRow">
                                    %'Нравиться'
                                </span>
                            </div>
                        </div>
                        <div class="notFoundStreams">
                            <img width="250px" src="https://www.gstatic.com/youtube/img/creator/live_streaming/no_content_illustration_v2.svg" alt="" />
                            <span class="notFoundStreamsLabel">
                                Здесь будут собраны ваши прямые трансляции.
                            </span>
                            <span class="beginStream">
                                Начать
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'PlayLists'">
                    <div class="playListsHeader">
                        <span class="playListsHeaderTitle">
                            Плейлисты на канале
                        </span>
                        <span class="playListsHeaderCreatePlayListBtn" @click="createPlayList">
                            СОЗДАТЬ ПЛЭЙЛИСТ
                        </span>
                    </div>
                    <div class="splitter">

                    </div>
                    <div class="filterRow">
                        <span class="material-icons">
                            filter_list
                        </span>
                        <input placeholder="Фильтр" type="text" class="form-control filterInputField" />
                    </div>
                    <div class="splitter">

                    </div>
                    <div v-if="bloger.playlists.length >= 1" class="playListsTable">
                        <div class="playListsTableColumn playListsTablePrimaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Плейлист
                                </span>
                            </div>
                            <div v-for="playlist in playlists" :key="playlist._id" class="playListsTableColumnHeader">
                                <span>
                                    {{
                                        playlist.name
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="playListsTableColumn playListsTableSecondaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Доступ
                                </span>
                            </div>
                            <div v-for="playlist in playlists" :key="playlist._id" class="playListsTableColumnHeader">
                                <span>
                                    {{
                                        playlist.name
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="playListsTableColumn playListsTableSecondaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Последнее изменение
                                </span>
                            </div>
                            <div v-for="playlist in playlists" :key="playlist._id" class="playListsTableColumnHeader">
                                <span>
                                    {{
                                        playlist.name
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="playListsTableColumn playListsTableSecondaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Количество видео
                                </span>
                            </div>
                            <div v-for="playlist in playlists" :key="playlist._id" class="playListsTableColumnHeader">
                                <span>
                                    {{
                                        playlist.name
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="playListsHere">
                        <span>
                            Здесь будут собраны ваши плейлисты.
                        </span>
                    </div>
                    <div class="splitter">

                    </div>

                </div>
                <div v-else-if="activeTab === 'Analytics'" class="analytics">
                    <div class="analyticsHeader">
                        <span class="analyticsHeaderTitle">
                            Аналитика по каналу
                        </span>
                        <span class="analyticsExtendModeBtn">
                            Расширенный режим
                        </span>
                    </div>
                    <div class="analyticsHeader">
                        <div class="analyticsTabs">
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Scope' }" @click="setActiveAnalyticsTab('Scope')">
                                <span>
                                    Обзор
                                </span>
                            </div>
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Views' }" @click="setActiveAnalyticsTab('Views')">
                                <span>
                                    Просмотры
                                </span>
                            </div>
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Interaction' }" @click="setActiveAnalyticsTab('Interaction')">
                                <span>
                                    Взаимодействие
                                </span>
                            </div>
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Audition' }" @click="setActiveAnalyticsTab('Audition')">
                                <span>
                                    Аудитория
                                </span>
                            </div>
                        </div>
                        <div class="analyticsHeaderItemColumn">
                            <span class="analyticsHeaderItemColumnElement">
                                8 нояб. – 5 дек. 2021 г.
                            </span>
                            <select v-model="analyticsPeriod" class="analyticsHeaderItemColumnElement form-select" @change="drawGraph">
                                <option :value="7">Последние 7 дней</option>
                                <option :value="28">Последние 28 дней</option>
                                <option :value="90">Последние 90 дней</option>
                                <option :value="365">Последние 365 дней</option>
                                <option :value="1000">Все время</option>
                            </select>
                        </div>
                        
                    </div>
                    <div v-if="activeAnalyticsTab === 'Scope'" class="analyticsScope">
                        <div class="analyticsScopePrimaryItem analyticsScopeItem">
                            <span class="analyticsScopeItemHeader">
                                За последние {{ analyticsPeriod }} дней ваши видео набрали 
                                {{
                                    totalViewsFromPeriod
                                }}
                                 просмотров
                            </span>
                            <div class="analyticsScopeChart">
                                <div class="analyticsScopeChartTabs">
                                    <div :class="{ analyticsScopeChartTab: true, activeAnalyticsScopeChartTab: activeAnalyticsScopeChartTab === 'Views' }" @click="activeAnalyticsScopeChartTab = 'Views'">
                                        <span class="analyticsScopeChartTabHeader">
                                            Просмотры
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            {{
                                                totalViews
                                            }}
                                        </span>
                                    </div>
                                    <div :class="{ analyticsScopeChartTab: true, activeAnalyticsScopeChartTab: activeAnalyticsScopeChartTab === 'ViewTime' }" @click="activeAnalyticsScopeChartTab = 'ViewTime'">
                                        <span class="analyticsScopeChartTabHeader">
                                            Время просмотра (часы)
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            3,0
                                        </span>
                                    </div>
                                    <div :class="{ analyticsScopeChartTab: true, activeAnalyticsScopeChartTab: activeAnalyticsScopeChartTab === 'Followers' }" @click="activeAnalyticsScopeChartTab = 'Followers'">
                                        <span class="analyticsScopeChartTabHeader">
                                            Подписчики
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            +2
                                        </span>
                                    </div>
                                </div>
                                <canvas id="graph" width="60%" height="70%">
                                    
                                </canvas>
                                <span class="analyticsScopeChartDetail">
                                    ПОДРОБНЕЕ
                                </span>
                            </div>
                            <span class="analyticsScopeItemHeader">
                                Лучшие видео за выбранный период
                            </span>
                            <div class="analyticsScopeItemTable">
                                <div class="analyticsScopeItemColumn analyticsScopeItemPrimaryColumn">
                                    <span class="analyticsScopeRow">
                                        Видео
                                    </span>
                                    <div class="analyticsScopeRow">
                                        <video class="analyticsScopeRowVideo" width="150px" controls>
                                            <source src="" />
                                        </video>
                                        <div class="videoInfo">
                                            <span>
                                                Создание анимации для 2D персонажей
                                            </span>
                                            <span>
                                                16 окт. 2021 г.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="analyticsScopeRow">
                                        <video class="analyticsScopeRowVideo" width="150px" controls>
                                            <source src="" />
                                        </video>
                                        <div class="videoInfo">
                                            <span>
                                                Создание анимации для 2D персонажей
                                            </span>
                                            <span>
                                                16 окт. 2021 г.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="analyticsScopeRow">
                                        <video class="analyticsScopeRowVideo" width="150px" controls>
                                            <source src="" />
                                        </video>
                                        <div class="videoInfo">
                                            <span>
                                                Создание анимации для 2D персонажей
                                            </span>
                                            <span>
                                                16 окт. 2021 г.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="analyticsScopeRow">
                                        <video class="analyticsScopeRowVideo" width="150px" controls>
                                            <source src="" />
                                        </video>
                                        <div class="videoInfo">
                                            <span>
                                                Создание анимации для 2D персонажей
                                            </span>
                                            <span>
                                                16 окт. 2021 г.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="analyticsScopeRow">
                                        <video class="analyticsScopeRowVideo" width="150px" controls>
                                            <source src="" />
                                        </video>
                                        <div class="videoInfo">
                                            <span>
                                                Создание анимации для 2D персонажей
                                            </span>
                                            <span>
                                                16 окт. 2021 г.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="analyticsScopeItemColumn analyticsScopeItemSecondaryColumn">
                                    <span class="analyticsScopeRow">
                                        Средняя<br />продолжительность<br />просмотра
                                    </span>
                                    <span class="analyticsScopeRow">
                                        1:33(84,9%)
                                    </span>
                                    <span class="analyticsScopeRow">
                                        1:33(84,9%)
                                    </span>
                                    <span class="analyticsScopeRow">
                                        1:33(84,9%)
                                    </span>
                                    <span class="analyticsScopeRow">
                                        1:33(84,9%)
                                    </span>
                                    <span class="analyticsScopeRow">
                                        1:33(84,9%)
                                    </span>
                                </div>
                                <div class="analyticsScopeItemColumn analyticsScopeItemSecondaryColumn">
                                    <span class="analyticsScopeRow">
                                        Просмотры
                                    </span>
                                    <span class="analyticsScopeRow">
                                        78
                                    </span>
                                    <span class="analyticsScopeRow">
                                        78
                                    </span>
                                    <span class="analyticsScopeRow">
                                        78
                                    </span>
                                    <span class="analyticsScopeRow">
                                        78
                                    </span>
                                    <span class="analyticsScopeRow">
                                        78
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="analyticsScopeSecondaryItem analyticsScopeItem">
                            <div class="analyticsScopeSecondaryElement">
                                <span>
                                    В режиме реального времени
                                </span>
                                <span>
                                    В реальном времени
                                </span>
                                <span>
                                    25
                                </span>
                                <span>
                                    Подписчики
                                </span>
                                <span>
                                    ТЕКУЩАЯ СТАТИСТИКА
                                </span>
                                <span>
                                    3
                                </span>
                                <span>
                                    Просмотры · Последние 48 часов
                                </span>
                                <div class="analyticsScopeSecondaryElementTable">
                                    <div class="analyticsScopeSecondaryElementColumn">
                                        <span class="analyticsScopeSecondaryElementColumnItem">
                                            Лучшие видео
                                        </span>
                                        <div class="analyticsScopeSecondaryElementColumnItem">
                                            <video height="40px" controls>
                                                <source src="" />
                                            </video>
                                            <span>
                                                Создание анимации
                                            </span>
                                        </div>
                                        <div class="analyticsScopeSecondaryElementColumnItem">
                                            <video height="40px" controls>
                                                <source src="" />
                                            </video>
                                            <span>
                                                Создание анимации
                                            </span>
                                        </div>
                                        <div class="analyticsScopeSecondaryElementColumnItem">
                                            <video height="40px" controls>
                                                <source src="" />
                                            </video>
                                            <span>
                                                Создание анимации
                                            </span>
                                        </div>
                                    </div>
                                    <div class="analyticsScopeSecondaryElementColumn">
                                        <span class="analyticsScopeSecondaryElementColumnItem">
                                            Просмотры
                                        </span>
                                        <span class="analyticsScopeSecondaryElementColumnItem">
                                            1
                                        </span>
                                        <span class="analyticsScopeSecondaryElementColumnItem">
                                            1
                                        </span>
                                        <span class="analyticsScopeSecondaryElementColumnItem">
                                            1
                                        </span>
                                    </div>
                                </div>
                                <span>
                                    ПОДРОБНЕЕ
                                </span>
                            </div>
                            <div class="analyticsScopeSecondaryElement">
                                <span>
                                    НОВЫЕ ВИДЕО
                                </span>
                                <div>
                                    <img width="100%" src="https://i9.ytimg.com/vi/0pZWYKEIdNQ/sddefault.jpg?v=616ae74f&sqp=CMCmwY0G&rs=AOn4CLCvRGwELSAefldivD7XlbT7yPzJeA" alt="" />
                                </div>
                                <span>
                                    52 дня 15 часов после публикации: 
                                </span>
                                <div class="analyticsScopeSecondarySecondElementTable">
                                    <div class="analyticsScopeSecondarySecondElementColumn">
                                        <span class="analyticsScopeSecondarySecondElementColumnItem">
                                            Просмотры
                                        </span>
                                        <span class="analyticsScopeSecondarySecondElementColumnItem">
                                            CTR для значков видео
                                        </span>
                                        <span class="analyticsScopeSecondarySecondElementColumnItem">
                                            Средняя продолжительность просмотра
                                        </span>
                                    </div>
                                    <div class="analyticsScopeSecondarySecondElementColumn">
                                        <span class="analyticsScopeSecondarySecondElementColumnItem">
                                            289
                                        </span>
                                        <span class="analyticsScopeSecondarySecondElementColumnItem">
                                            5,4 %
                                        </span>
                                        <span class="analyticsScopeSecondarySecondElementColumnItem">
                                            1:22
                                        </span>
                                    </div>
                                </div>
                                <span>
                                    ПОСМОТРЕТЬ АНАЛИТИКУ ДЛЯ ВИДЕО
                                </span>
                                <div class="analyticsScopeSecondarySecondElementFooter">
                                    <span class="material-icons">
                                        chevron_left
                                    </span>
                                    <span>
                                        1 из 4
                                    </span>
                                    <span class="material-icons">
                                        chevron_right
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeAnalyticsTab === 'Views'" class="analyticsScope">
                        <div class="analyticsScopeMainItem analyticsScopePrimaryItem analyticsScopeItem">
                            <div class="analyticsScopeChart">
                                <div class="analyticsScopeChartTabs">
                                    <div :class="{ analyticsScopeChartTabAnother: true, analyticsScopeChartTab: true, activeAnalyticsScopeChartTab: activeAnalyticsScopeChartTab === 'Screenings' }" @click="activeAnalyticsScopeChartTab = 'Screenings'">
                                        <span class="analyticsScopeChartTabHeader">
                                            Показы
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            742
                                        </span>
                                    </div>
                                    <div class="analyticsScopeChartTabAnother analyticsScopeChartTab">
                                        <span class="analyticsScopeChartTabHeader">
                                            CTR для значков видео
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            5,0%
                                        </span>
                                    </div>
                                    <div class="analyticsScopeChartTabAnother analyticsScopeChartTab">
                                        <span class="analyticsScopeChartTabHeader">
                                            Просмотры
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            129
                                        </span>
                                    </div>
                                    <div class="analyticsScopeChartTabAnother analyticsScopeChartTab">
                                        <span class="analyticsScopeChartTabHeader">
                                            Уникальные зрители
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            100
                                        </span>
                                    </div>
                                </div>
                                <canvas id="graph" width="60%" height="70%">
                                    
                                </canvas>
                                <span class="analyticsScopeChartDetail">
                                    ПОДРОБНЕЕ
                                </span>
                            </div>
                            <div class="analyticsViewsColumns">
                                <div class="analyticsViewsColumn">
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Типы источников трафика
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>                                                    
                                                Внешние источники
                                            </span>
                                            <span>
                                                64,1 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Поиск на YouTube
                                            </span>
                                            <span>
                                                22,1 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Страницы канала
                                            </span>
                                            <span>
                                                12,2 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Функции выбора контента
                                            </span>
                                            <span>
                                                1,5 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Адресная строка, закладки, неизвестные источники
                                            </span>
                                            <span>
                                                0,0 % 
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Источник трафика: внешний
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>	
                                                ВКонтакте
                                            </span>
                                            <span>
                                                79,8 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                YouTube
                                            </span>
                                            <span>
                                                9,5 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Google Search
                                            </span>
                                            <span>
                                                1,2 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                com.huawei.android.internal.app
                                            </span>
                                            <span>
                                                1,2 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                com.perm.kate_new_6
                                            </span>
                                            <span>
                                                1,2 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Источник трафика: рекомендуемые видео
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <span>
                                            Недостаточно данных о трафике.
                                        </span>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                </div>
                                <div class="analyticsViewsColumn">
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Показы значков и время просмотра роликов
                                        </span>
                                        <span>
                                            Данные за период 10 нояб. – 7 дек. 2021 г. (28 дн.)
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Показы
                                            </span>
                                            <span>
                                                749
                                            </span>
                                        </div>
                                        <span>
                                            В 8,0 % случаев значки были показаны в рекомендациях
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Показатель CTR – 
                                            </span>
                                            <span>
                                                4,9 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Просмотры по показам значков
                                            </span>
                                            <span>
                                                37
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Среднее время просмотра – 
                                            </span>
                                            <span>
                                                1:20
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Время просмотра, связанное с показами значков (часы)
                                            </span>
                                            <span>
                                                0,83
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Источник трафика: плейлисты
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней  
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Фид "Смотреть позже"
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Источник трафика: поиск на YouTube
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Доля в общем объеме трафика на канале:
                                            </span>
                                            <span>
                                                22,1 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>                                                
                                                swamp attack  
                                            </span>
                                            <span>
                                                3,5 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                moho спрайты для игры
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                геймдев
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                игры похожие на swamp attack
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                как импортировать анимацыии из фотошоп в юнити
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeAnalyticsTab === 'Interaction'" class="analyticsScope">
                        <div class="analyticsScopeMainItem analyticsScopePrimaryItem analyticsScopeItem">
                            <div class="analyticsScopeChart">
                                <div class="analyticsScopeChartTabs">
                                    <div class="analyticsScopeChartTab analyticsScopeChartTabOther">
                                        <span class=" analyticsScopeChartTabHeader">
                                            Время просмотра (часы)
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            3,0
                                        </span>
                                    </div>
                                    <div class="analyticsScopeChartTab analyticsScopeChartTabOther">
                                        <span class="analyticsScopeChartTabHeader">
                                            Средняя продолжительность просмотра
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            14%
                                        </span>
                                    </div>
                                </div>
                                <canvas id="graph" width="60%" height="70%">
                                    
                                </canvas>
                                <span class="analyticsScopeChartDetail">
                                    ПОДРОБНЕЕ
                                </span>
                            </div>
                            <div class="analyticsViewsColumns">
                                <div class="analyticsViewsColumn">
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Лучшие видео
                                        </span>
                                        <span>
                                            Время просмотра (часы) · Последние 28 дней  
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                СОЗДАНИЕ АНИМАЦИИ ДЛЯ 2D ПЕРСОНАЖЕЙ | ИМПОРТ АНИМАЦИИ В UNITY
                                            </span>
                                            <span>
                                                2,03
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Сделал клон игры swamp attack
                                            </span>
                                            <span>
                                                0,67
                                            </span>
                                        </div>        
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Как я начал делать игры или мой путь в геймдев
                                            </span>
                                            <span>
                                                0,35
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                АНИМАЦИЯ И РИГГИНГ 2D ПЕРСОНАЖА | РИГГИНГ В MOHO
                                            </span>
                                            <span>
                                                0,06 
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">                                            
                                            Самые популярные плейлисты
                                        </span>
                                        <span>
                                            Время просмотра · Последние 28 дней
                                        </span>
                                        <span>
                                            Нет данных за выбранный диапазон дат.
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Самые популярные подсказки 
                                        </span>
                                        <span>
                                            Клики по подсказке · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Как я начал делать игры или мой путь в геймдев
                                            </span>
                                            <span>
                                                0
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Как я начал делать игры или мой путь в геймдев
                                            </span>
                                            <span>                                                
                                                0
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                </div>
                                <div class="analyticsViewsColumn">
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Топ видео с кликами по конечным заставкам
                                        </span>
                                        <span>
                                            Клики по элементам конечной заставки · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                СОЗДАНИЕ АНИМАЦИИ ДЛЯ 2D ПЕРСОНАЖЕЙ | ИМПОРТ АНИМАЦИИ В UNITY
                                            </span>
                                            <span>                                                                                                
                                                0
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Сделал клон игры swamp attack
                                            </span>
                                            <span>                                                                                                
                                                0
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Как я начал делать игры или мой путь в геймдев
                                            </span>
                                            <span>                                                                                                
                                                0
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                АНИМАЦИЯ И РИГГИНГ 2D ПЕРСОНАЖА | РИГГИНГ В MOHO
                                            </span>
                                            <span>                                                                                                
                                                0
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Самые эффективные элементы конечных заставок
                                        </span>
                                        <span>
                                            Кликов на число показов элемента конечной заставки · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Подписка
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Самое подходящее
                                            </span>
                                            <span>
                                                0,0 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeAnalyticsTab === 'Audition'" class="analyticsScope">
                        <div class="analyticsScopeMainItem analyticsScopePrimaryItem analyticsScopeItem">
                            <div class="analyticsScopeChart">
                                <div class="analyticsScopeChartTabs">
                                    <div class="analyticsScopeChartTab">
                                        <span class="analyticsScopeChartTabHeader">
                                            Постоянные зрители
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            1
                                        </span>
                                    </div>
                                    <div class="analyticsScopeChartTab">
                                        <span class="analyticsScopeChartTabHeader">
                                            Уникальные зрители
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            100
                                        </span>
                                    </div>
                                    <div class="analyticsScopeChartTab">
                                        <span class="analyticsScopeChartTabHeader">
                                            Подписчики
                                        </span>
                                        <span class="analyticsScopeChartTabContent">
                                            +2
                                        </span>
                                    </div>
                                </div>
                                <canvas id="graph" width="60%" height="70%">
                                    
                                </canvas>
                                <span class="analyticsScopeChartDetail">
                                    ПОДРОБНЕЕ
                                </span>
                                <span class="analyticsScopeChartDetail">
                                    ОЧИСТИТЬ СПРАВКУ
                                </span>
                            </div>
                            <div class="analyticsViewsColumns">
                                <div class="analyticsViewsColumn">
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Когда ваши зрители смотрят видео на YouTube
                                        </span>
                                        <span>
                                            Местное время (GMT +0300) · Последние 28 дней
                                        </span>
                                        <span class="analyticsViewsColumnItemDetail">
                                            Недостаточно данных.
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Время просмотра подписчиками
                                        </span>
                                        <span>
                                            Время просмотра · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Без подписки
                                            </span>
                                            <span>
                                                94,4 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                С подпиской
                                            </span>
                                            <span>                                                
                                                5,7 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Возраст и пол
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <span>                                        
                                            Недостаточно демографических данных.
                                        </span>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                </div>
                                <div class="analyticsViewsColumn">
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Другие каналы, которые смотрят ваши зрители
                                        </span>
                                        <span>
                                            Последние 28 дней
                                        </span>
                                        <span>
                                            Недостаточно данных. Подробнее…
                                        </span>
                                        
                                        <span class="analyticsViewsColumnItemDetail">
                                            Недостаточно данных. Подробнее...
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">
                                            Другие видео, интересные вашим зрителям
                                        </span>
                                        <span>
                                            Последние 7 дней
                                        </span>
                                        <span class="analyticsViewsColumnItemDetail">
                                            Недостаточно данных. Подробнее...
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">                                            
                                            Самые популярные регионы
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Россия
                                            </span>
                                            <span>                                                
                                                9,2 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                    <div class="analyticsViewsColumnItem">
                                        <span class="analyticsViewsColumnItemHeader">                                            
                                            Самые популярные языки субтитров
                                        </span>
                                        <span>
                                            Просмотры · Последние 28 дней
                                        </span>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                Без субтитров
                                            </span>
                                            <span>
                                                97,0 %
                                            </span>
                                        </div>
                                        <div class="typesTarrifsSource">
                                            <span>
                                                русский
                                            </span>
                                            <span>
                                                3,1 %
                                            </span>
                                        </div>
                                        <span class="analyticsViewsColumnItemDetail">
                                            ПОДРОБНЕЕ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Comments'">
                    <span class="commentsTitle">
                        Комментарии и упоминания
                    </span>
                    <div class="commentsTypes">
                        <div :class="{ commentsType: true, activeCommentsType: activeCommentsType === 'Опубликованные' }" @click="activeCommentsType = 'Опубликованные'">
                            <span>
                                Опубликованные
                            </span>
                        </div>
                        <div :class="{ commentsType: true, activeCommentsType: activeCommentsType === 'На проверке' }" @click="activeCommentsType = 'На проверке'">
                            <span>
                                На проверке
                            </span>
                        </div>
                    </div>
                    <div v-if="activeCommentsType === 'Опубликованные'">
                        <div class="commentsFilterBlock">
                            <span class="material-icons commentsFilterBlockItem">
                                filter_list
                            </span>
                            <div class="commentsFilterBlockContainer">
                                <span class="commentsFilterBlockContainerItem">
                                    Без моего ответа
                                </span>
                                <span class="commentsFilterBlockContainerItem material-icons">
                                    cancel
                                </span>
                            </div>
                        </div>
                        <div class="commentsList">
                            <div v-for="post in posts" :key="post" class="commentList">
                                <div class="commentListAside">
                                    <img class="commentListAsideItem" :src="`http://localhost:4000/api/blogers/source/get/?blogerlogin=${post.bloger}`" width="75px" alt="" />
                                    <div class="commentListAsideItem commentListAsideInfo">
                                        <div class="commentListAsideInfoItem commentListAsideInfoHeader">
                                            <span class="commentListAsideInfoHeaderItem">
                                                {{
                                                    post.bloger
                                                }}
                                            </span>
                                            <span class="commentListAsideInfoHeaderItem">
                                                2 месяца назад {{
                                                    post.followers
                                                }} подписчики
                                            </span>
                                        </div>
                                        <div class="commentListAsideInfoItem commentListAsideInfoMain">
                                            {{
                                                post.message
                                            }}
                                        </div>
                                        <div class="commentListAsideInfoItem commentListAsideFooter">
                                            <span class="commentListAsideInfElement commentListAsideInfElementAnswer">
                                                ОТВЕТИТЬ
                                            </span>
                                            <span class="commentListAsideInfElement">
                                                Нет ответов
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                expand_more
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                thumb_up
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                thumb_down
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                favorite
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                more_vert
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                play_circle
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="commentArticle">
                                    <img :src="`http://localhost:4000/api/channels/source/get/?channelname=${post.channelName}`" alt="" width="100px" />
                                    <span>
                                        {{
                                            post.videoName
                                        }}
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div v-else-if="activeCommentsType === 'На проверке'">
                        <div class="commentsFilterBlock">
                            <span class="material-icons commentsFilterBlockItem">
                                filter_list
                            </span>
                            <div class="commentsFilterBlockContainer">
                                <span class="commentsFilterBlockContainerItem">
                                    Без моего ответа
                                </span>
                                <span class="commentsFilterBlockContainerItem material-icons">
                                    cancel
                                </span>
                            </div>
                        </div>
                        <div class="commentsList">
                            <div v-for="post in posts" :key="post" class="commentList">
                                <div class="commentListAside">
                                    <img class="commentListAsideItem" :src="`http://localhost:4000/api/blogers/source/get/?blogerlogin=${post.bloger}`" width="75px" alt="" />
                                    <div class="commentListAsideItem commentListAsideInfo">
                                        <div class="commentListAsideInfoItem commentListAsideInfoHeader">
                                            <span class="commentListAsideInfoHeaderItem">
                                                {{
                                                    post.bloger
                                                }}
                                            </span>
                                            <span class="commentListAsideInfoHeaderItem">
                                                2 месяца назад {{
                                                    post.followers
                                                }} подписчики
                                            </span>
                                        </div>
                                        <div class="commentListAsideInfoItem commentListAsideInfoMain">
                                            {{
                                                post.message
                                            }}
                                        </div>
                                        <div class="commentListAsideInfoItem commentListAsideFooter">
                                            <span class="commentListAsideInfElement commentListAsideInfElementAnswer">
                                                ОТВЕТИТЬ
                                            </span>
                                            <span class="commentListAsideInfElement">
                                                Нет ответов
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                expand_more
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                thumb_up
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                thumb_down
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                favorite
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                more_vert
                                            </span>
                                            <span class="commentListAsideInfElement material-icons">
                                                play_circle
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="commentArticle">
                                    <img :src="`http://localhost:4000/api/channels/source/get/?channelname=${post.channelName}`" alt="" width="100px" />
                                    <span>
                                        {{
                                            post.videoName
                                        }}
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Subtitles'">
                    <span class="subtitlesTitle">
                        Субтитры к роликам на канале
                    </span>
                    <div class="subtitlesTabs">
                        <div :class="{ subtitlesTab: true, activeSubtitlesTab: activeSubtitlesTab === 'All' }" @click="activeSubtitlesTab = 'All'">
                            <span>
                                &nbsp;&nbsp;Все&nbsp;&nbsp;
                            </span>
                        </div>
                        <div :class="{ subtitlesTab: true, activeSubtitlesTab: activeSubtitlesTab === 'Drafts' }" @click="activeSubtitlesTab = 'Drafts'">
                            <span>
                                &nbsp;&nbsp;Черновики&nbsp;&nbsp;
                            </span>
                        </div>
                        <div :class="{ subtitlesTab: true, activeSubtitlesTab: activeSubtitlesTab === 'Published' }" @click="activeSubtitlesTab = 'Published'">
                            <span>
                                &nbsp;&nbsp;Опубликованные&nbsp;&nbsp;
                            </span>
                        </div>
                    </div>
                    <div v-if="activeSubtitlesTab === 'All'" class="subtitlesTable">
                        <div class="subtitlesTableColumn subtitlesTablePrimaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Видео
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                </video>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Языки
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Дата изменения
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    {{
                                        `${video.created.split('T')[0].split('-')[2]} ${monthLabels[video.created.split('T')[0].split('-')[1]]} ${video.created.split('T')[0].split('-')[0]} г.`
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Название и описание
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Субтитры
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSubtitlesTab === 'Drafts'" class="subtitlesTable">
                        <div class="subtitlesTableColumn subtitlesTablePrimaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Видео
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Языки
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Дата изменения
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Название и описание
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Субтитры
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSubtitlesTab === 'Published'" class="subtitlesTable">
                        <div class="subtitlesTableColumn subtitlesTablePrimaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Видео
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                </video>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Языки
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    1
                                </span>
                                <span class="material-icons subtitlesTableColumnContentItem">
                                    expand_more
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Дата изменения
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    {{
                                        `${video.created.split('T')[0].split('-')[2]} ${monthLabels[video.created.split('T')[0].split('-')[1]]} ${video.created.split('T')[0].split('-')[0]} г.`
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Название и описание
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Субтитры
                                </span>
                            </div>
                            <!-- <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div> -->
                            <div v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video.id" class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'DRM'">
                    <span class="drmTitle">
                        Авторские права канала
                    </span>
                    <div class="drmHeader">
                        <div class="drmTabs">
                            <div class="drmTab drmActiveTab">
                                <span>
                                    Запросы на удаление         
                                </span>
                            </div>
                        </div>
                        <span class="removeRequestLabel">
                            ЗАПРОСИТЬ УДАЛЕНИЕ
                        </span>
                    </div>
                    <div class="drmBody">
                        <img src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_v3.svg" alt="" />
                        <span class="drmNotFound">
                            Пока ничего нет
                        </span>
                        <span>
                            Вы не отправляли 
                            <span class="link">
                                запросов на удаление
                            </span>.
                        </span>
                        <span>
                            Хотите проверить, не заявлены ли права на какие-либо из ваших видео? Ознакомьтесь с 
                            <span class="link">
                                этим списком
                            </span>.
                        </span>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Monetization'" class="monetization">
                    <span class="monetizationHeader">
                        Монетизация канала
                    </span>
                    <div class="monetizationBody">
                        <img src="https://www.gstatic.com/youtube/img/creator/partnerprogram/ypp_signup_promo_illustration.svg" alt="" width="250px" />
                        <span class="monetizationBodyHeader monetizationBodyItem">
                            Вступите в Партнерскую программу
                        </span>
                        <span class="monetizationBodyItem">
                            Вы сможете монетизировать ролики, обращаться за помощью в службу поддержки авторов, а также пользоваться другими преимуществами. Подробнее…
                        </span>
                        <span class="monetizationBodyItem">
                            Подать заявку на участие в Партнерской программе YouTube можно, только если канал отвечает требованиям ниже. После подачи заявки мы также проверим, соблюдаются ли правила монетизации каналов YouTube.
                        </span>
                        <div class="monetizationBodyItem monetizationBodyContainer">
                            <div class="monetizationBodyContainerItem monetizationBodyContainerFirstItem">
                                <div class="monetizationBodyContainerElement">
                                    <span class="monetizationBodyContainerElementIcon monetizationBodyContainerElementItem material-icons">
                                        looks
                                    </span>
                                    <div class="monetizationBodyContainerElementColumn">
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            25 подписчиков
                                        </span>
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            Требуется 1 000 
                                        </span>
                                    </div>
                                </div>
                                <div class="monetizationBodyContainerElement">
                                    <span class="monetizationBodyContainerElementIcon monetizationBodyContainerElementItem material-icons">
                                        looks
                                    </span>
                                    <div class="monetizationBodyContainerElementColumn">
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            21 час просмотра
                                        </span>
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            Требуется 4 000
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="monetizationBodyContainerItem">
                                <div class="monetizationBodyContainerElement">
                                    <span class="monetizationBodyContainerElementIcon monetizationBodyContainerElementItem material-icons">
                                        done
                                    </span>
                                    <div class="monetizationBodyContainerElementColumn">
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            Двухэтапная аутентификация
                                        </span>
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            Включена
                                        </span>
                                    </div>
                                </div>
                                <div class="monetizationBodyContainerElement">
                                    <span class="monetizationBodyContainerElementIcon monetizationBodyContainerElementItem material-icons">
                                        done
                                    </span>
                                    <div class="monetizationBodyContainerElementColumn">
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            Действующих предупреждений нет
                                        </span>
                                        <span class="monetizationBodyContainerElementColumnItem">
                                            Если есть действующие предупреждения, подать заявку нельзя
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary monetizationBodyItem">
                            УВЕДОМИТЬ МЕНЯ КОГДА ПОКАЗАТЕЛИ ДОСТИГНУТ ТРЕБУЕМЫХ
                        </button>
                    </div>
                </div>
                <div v-else-if="activeTab === 'ChannelEdit'">
                    <span class="channelEditSubheader">
                        Настройки канала
                    </span>
                    <div class="channelEditHeader">
                        <div class="channelEditHeaderItem">
                            <span :class="{ activeChannelEditTab: activeChannelEditTab === 'Главная страница', channelEditTab: true,  }" @click="activeChannelEditTab = 'Главная страница'">
                                Главная страница
                            </span>
                            <span :class="{ activeChannelEditTab: activeChannelEditTab === 'Брендинг', channelEditTab: true,  }" @click="activeChannelEditTab = 'Брендинг'">
                                Брендинг
                            </span>
                            <span :class="{ activeChannelEditTab: activeChannelEditTab === 'Основные сведения', channelEditTab: true,  }" @click="activeChannelEditTab = 'Основные сведения'">
                                Основные сведения
                            </span>
                        </div>
                        <div class="channelEditHeaderItem">
                            <span class="channelEditHeaderItemBtn channelEditHeaderItemBtnGoToChannel" @click="$router.push({ name: 'Channel', query: { channelid: channel._id } })">
                                ПЕРЕЙТИ НА КАНАЛ
                            </span>
                            <span class="channelEditHeaderItemBtn">
                                ОТМЕНА
                            </span>
                            <button class="btn btn-secondary">
                                Опубликовать
                            </button>
                        </div>
                    </div>
                    <div v-if="activeChannelEditTab === 'Главная страница'" class="channelEditMain">
                        <div class="channelEditSectionHeader">
                            <div class="channelEditSectionHeaderColumn">
                                <span class="channelEditSectionHeaderTitle">
                                    Рекомендованные разделы
                                </span>
                                <span>
                                    Настройте вид главной страницы канала: добавьте до 12 разделов.
                                </span>
                            </div>
                            <span class="addSection">
                                ДОБАВИТЬ РАЗДЕЛ
                            </span>
                        </div>
                        <div class="channelEditSectionBody">
                            <div class="channelEditSectionBodyFirst">
                                <span class="material-icons">
                                    theaters
                                </span>
                                <div class="channelEditSectionBodyFirstItem">
                                    <div class="channelEditSectionBodyFirstElement">
                                        <span>
                                            Трейлер для зрителей, которые ещё не подписались на канал
                                        </span>
                                    </div>
                                    <div class="channelEditSectionBodyFirstElement">
                                        <span>
                                            Расскажите о том, какие видео вы предлагаете. Трейлер будет показываться тем, кто ещё не подписался на ваш канал. 
                                            Подробнее… 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span title="Действия" class="addToSection">
                                ДОБАВИТЬ
                            </span>
                        </div>
                        <div class="channelEditSectionBody">
                            <div class="channelEditSectionBodyFirst">
                                <span class="material-icons">
                                    movie
                                </span>
                                <div class="channelEditSectionBodyFirstItem">
                                    <div class="channelEditSectionBodyFirstElement">
                                        <span>
                                            Рекомендованное видео для подписчиков
                                        </span>
                                    </div>
                                    <div class="channelEditSectionBodyFirstElement">
                                        <span class="channelEditSectionBodyFirstElementItem">
                                            Продвигайте видео среди подписчиков. Ролик будет показываться в верхней части страницы тем, кто его ещё не посмотрел. 
                                            Подробнее… 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span title="Действия" class="addToSection">
                                ДОБАВИТЬ
                            </span>
                        </div>
                        <div class="channelEditSectionHeader">
                            <div class="channelEditSectionHeaderColumn">
                                <span class="channelEditSectionHeaderTitle">
                                    Рекомендованные разделы
                                </span>
                                <span>
                                    Настройте вид главной страницы канала: добавьте до 12 разделов.
                                </span>
                            </div>
                            <span class="addSection">
                                ДОБАВИТЬ РАЗДЕЛ
                            </span>
                        </div>
                        <div class="channelEditSectionBody">
                            <div class="channelEditSectionBodyFirst">
                                <span class="material-icons">
                                    drag_handle
                                </span>
                                <div class="channelEditSectionBodyFirstItem">
                                    <div class="channelEditSectionBodyFirstElement">
                                        <span>
                                            Короткое видео
                                        </span>
                                        <span>
                                            (1)
                                        </span>
                                    </div>
                                    <div class="channelEditSectionBodyFirstElement">
                                        <video width="125px" controls>
                                            <source src="" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <span title="Действия" class="material-icons">
                                more_vert
                            </span>
                        </div>
                        <div class="channelEditSectionBody">
                            <div class="channelEditSectionBodyFirst">
                                <span class="material-icons">
                                    drag_handle
                                </span>
                                <div class="channelEditSectionBodyFirstItem">
                                    <div class="channelEditSectionBodyFirstElement">
                                        <span>
                                            Все видео
                                        </span>
                                        <span>
                                            (
                                                {{
                                                    videos.filter(video => channel.videos.map(video => video.id).includes(video._id)).length
                                                }}
                                            )
                                        </span>
                                    </div>
                                    <div class="channelEditSectionBodyFirstElement">
                                        <!-- <video class="channelEditSectionBodyFirstElementItem" width="125px" controls>
                                            <source src="" />
                                        </video>
                                        <video class="channelEditSectionBodyFirstElementItem" width="125px" controls>
                                            <source src="" />
                                        </video>
                                        <video class="channelEditSectionBodyFirstElementItem" width="125px" controls>
                                            <source src="" />
                                        </video>
                                        <video class="channelEditSectionBodyFirstElementItem" width="125px" controls>
                                            <source src="" />
                                        </video> -->
                                        <video v-for="video in videos.filter(video => channel.videos.map(video => video.id).includes(video._id))" :key="video._id" class="channelEditSectionBodyFirstElementItem" width="125px" controls>
                                            <source :src="`http://localhost:4000/api/videos/source/get/?videoname=${video.name}`" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <span title="Действия" class="material-icons">
                                more_vert
                            </span>
                        </div>
                    </div>
                    <div v-else-if="activeChannelEditTab === 'Брендинг'" class="branding">
                        <div class="brandingItem">
                            <span class="brandingItemHeader">
                                Фото профиля
                            </span>
                            <span>
                                Фото профиля показывается, например, рядом с вашими видео или комментариями на YouTube. 
                            </span>
                            <div class="brandingItemFooter">
                                <img width="175px" :src="`http://localhost:4000/api/blogers/source/get/?blogerlogin=${bloger.login}`" alt="" />
                                <div class="brandingItemFooterArticle">
                                    <span>
                                        Рекомендуем использовать изображение размером не менее 98 х 98 пикселей в формате PNG или GIF. Анимированные картинки загружать нельзя. Размер файла – не более 4 МБ. Помните, что изображение должно соответствовать правилам сообщества YouTube. 
                                        <span class="brandingItemFooterDetail">
                                            Подробнее…
                                        </span>
                                    </span>
                                    <form ref="blogerLogoForm" method="POST" :action="`http://localhost:4000/api/channels/logos/bloger/?blogerlogin=${this.bloger.login}`" enctype="multipart/form-data" class="brandingItemFooterArticleBtns">
                                        <span class="brandingItemFooterArticleBtn" @click="setBlogerLogo">
                                            ИЗМЕНИТЬ
                                        </span>
                                        <input class="hidenField" ref="blogerFileUploader" type="file" name="myFile" />
                                        <span class="brandingItemFooterArticleBtn">
                                            УДАЛИТЬ
                                        </span>
                                    </form>
                                    <!-- <div class="brandingItemFooterArticleBtns">
                                        <span class="brandingItemFooterArticleBtn" @click="setBlogerLogo">
                                            ИЗМЕНИТЬ
                                        </span>
                                        <span class="brandingItemFooterArticleBtn">
                                            УДАЛИТЬ
                                        </span>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="brandingItem">
                            <span class="brandingItemHeader">
                                Баннер
                            </span>
                            <span>
                                Это изображение показывается в верхней части страницы канала.
                            </span>
                            <div class="brandingItemFooter">
                                <img width="175px" :src="`http://localhost:4000/api/channels/source/get/?channelname=${channel.name}`" alt="" />
                                <div class="brandingItemFooterArticle">
                                    <span>
                                        Чтобы канал выглядел привлекательно на всех устройствах, советуем загрузить изображение размером не менее 2048 x 1152 пикс. Размер файла – не более 6 МБ.
                                        <span class="brandingItemFooterDetail">
                                            Подробнее…
                                        </span>
                                    </span>
                                    <!-- <form ref="bannerLogoForm" method="POST" :action="`http://localhost:4000/api/channels/logos/banner/?channelname=${this.channel.name}`" enctype="multipart/form-data" class="brandingItemFooterArticleBtns">
                                        <span class="brandingItemFooterArticleBtn" @click="setBannerLogo">
                                            ИЗМЕНИТЬ
                                        </span>
                                        <input class="hidenField" ref="bannerFileUploader" type="file" name="myFile" />
                                        <span class="brandingItemFooterArticleBtn">
                                            УДАЛИТЬ
                                        </span>
                                    </form> -->
                                    <div class="brandingItemFooterArticleBtns">
                                        <span class="brandingItemFooterArticleBtn" @click="setChannelLogo">
                                            ИЗМЕНИТЬ
                                        </span>
                                        <span class="brandingItemFooterArticleBtn">
                                            УДАЛИТЬ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="brandingItem">
                            <span class="brandingItemHeader">
                                Логотип канала
                            </span>
                            <span>
                                Логотип канала показывается в правом нижнем углу проигрывателя при просмотре ваших вид
                            </span>
                            <div class="brandingItemFooter">
                                <img class="brandingItemFooterLogo" width="25px" :src="`http://localhost:4000/api/channels/source/get/?channelname=${channel.name}`" alt="" />
                                <div class="brandingItemFooterArticle">
                                    <span>
                                        Когда будет показываться логотип
                                    </span>
                                    <div class="whenShowLogoChannel">
                                        <input class="whenShowLogoChannelItem" :value="'end'" name="whenShowLogoChannel" v-model="whenShowLogoChannel" type="radio" />
                                        <span class="whenShowLogoChannelItem">
                                            В конце видео
                                        </span>
                                    </div>
                                    <div class="whenShowLogoChannel">
                                        <input class="whenShowLogoChannelItem" :value="'moment'" name="whenShowLogoChannel" v-model="whenShowLogoChannel" type="radio" />
                                        <span class="whenShowLogoChannelItem">
                                            В заданный момент
                                        </span>
                                    </div>
                                    <div class="whenShowLogoChannel">
                                        <input class="whenShowLogoChannelItem" :value="'all'" name="whenShowLogoChannel" v-model="whenShowLogoChannel" type="radio" />
                                        <span class="whenShowLogoChannelItem">
                                            На протяжении всего видео
                                        </span>
                                    </div>
                                    <form ref="channelLogoForm" method="POST" :action="`http://localhost:4000/api/channels/logos/channel/?channelname=${this.channel.name}`" enctype="multipart/form-data" class="brandingItemFooterArticleBtns">
                                        <span class="brandingItemFooterArticleBtn" @click="setChannelLogo">
                                            ИЗМЕНИТЬ
                                        </span>
                                        <input class="hidenField" ref="channelFileUploader" type="file" name="myFile" />
                                        <span class="brandingItemFooterArticleBtn">
                                            УДАЛИТЬ
                                        </span>
                                    </form>
                                    <!-- <div class="brandingItemFooterArticleBtns">
                                        <span class="brandingItemFooterArticleBtn" @click="setChannelLogo">
                                            ИЗМЕНИТЬ
                                        </span>
                                        <span class="brandingItemFooterArticleBtn">
                                            УДАЛИТЬ
                                        </span>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeChannelEditTab === 'Основные сведения'" class="channelSection">
                        <span class="channelNameLabel">
                            Название и описание канала
                        </span>
                        <div class="editChannelNameRow">
                            <span class="editChannelNameRowItem">
                                {{
                                    channel.name
                                }}
                            </span>
                            <span class="editChannelNameRowItem material-icons editChannelNameBtn" @click="isEditChannelName = !isEditChannelName">
                                edit
                            </span>
                        </div>
                        <input v-if="isEditChannelName" v-model="channelName" type="text" class="w-50 form-control editChanneNameField" @keyup.enter="setChannelName" />
                        <textarea @keyup.enter="setChannelDesc" class="channelDesc" v-model="channelDesc"></textarea>
                        <div class="addTranslate">
                            <span class="addTranslateItem material-icons">
                                add
                            </span>
                            <span class="addTranslateItem">
                                ДОБАВИТЬ ПЕРЕВОД
                            </span>
                        </div>
                        <span class="sectionHeader">
                            URL канала
                        </span>
                        <span>
                            Это стандартный веб-адрес вашего канала. Набор цифр и букв в конце ссылки – уникальный идентификатор канала. Подробнее… 
                        </span>
                        <div class="editor">
                            <button class="material-icons editorBtn">content_copy</button>
                            <p class="editorString">https://www.youtube.com/channel/UCMSYwB_yfWxv6Xj2a_J4YDg</p>
                        </div>

                        <span class="sectionHeader">
                            Ссылки
                        </span>
                        <span>
                            Добавьте ссылки на сайты, о которых хотите рассказать зрителям. 
                        </span>
                        <div class="addTranslate">
                            <span class="addTranslateItem material-icons">
                                add
                            </span>
                            <span class="addTranslateItem">
                                ДОБАВИТЬ ССЫЛКУ
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Контактная информация
                        </span>
                        <span>
                            Укажите, как связаться с вами по вопросам сотрудничества. Зрители могут увидеть адрес электронной почты на вкладке "О канале". 
                        </span>
                        <input @keyup.enter="setChannelContacts" v-model="channelContacts" type="text" class="form-control" />
                    </div>
                </div>
                <div v-else-if="activeTab === 'SoundLibrary'">
                    <span class="soundLibraryHeader">
                        Фонотека
                    </span>
                    <div class="soundLibrarySubheader">
                        <div class="soundLibrarySubheaderItem">
                            <span class="soundLibrarySubheaderElement material-icons-outlined">
                                info
                            </span>
                            <span class="soundLibrarySubheaderElement">
                                Пользуясь этим разделом, вы принимаете Условия использования фонотеки YouTube.
                            </span>
                        </div>
                        <div class="soundLibrarySubheaderItem">
                            <span class="soundLibrarySubheaderElement soundLibrarySubheaderItemBtn">
                                ПОДРОБНЕЕ
                            </span>
                            <span class="soundLibrarySubheaderElement soundLibrarySubheaderItemBtn">
                                ОК
                            </span>
                        </div>
                    </div>
                    <div class="soundLibraryTabs">
                        <div :class="{ soundLibraryTab: true, activeSoundLibraryTab: activeSoundLibraryTab === 'Бесплатаная музыка' }" @click="activeSoundLibraryTab = 'Бесплатаная музыка'">
                            <span>
                                Бесплатаная музыка
                            </span>
                        </div>
                        <div :class="{ soundLibraryTab: true, activeSoundLibraryTab: activeSoundLibraryTab === 'Звуковые эффекты' }" @click="activeSoundLibraryTab = 'Звуковые эффекты'">
                            <span>
                                Звуковые эффекты
                            </span>
                        </div>
                        <div :class="{ soundLibraryTab: true, activeSoundLibraryTab: activeSoundLibraryTab === 'Помеченные' }" @click="activeSoundLibraryTab = 'Помеченные'">
                            <span>
                                Помеченные
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isSettings" class="settingsBackdrop">
            <div class="settingsContextMenu">
                <div class="settingsContextMenuHeader">
                    <span>
                        Настройки
                    </span>
                </div>
                <div class="settingsContextMenuBody">
                    <div class="settingsContextMenuAside">
                        <div :class="{ settingsContextMenuAsideItem: true, activeSettingsContextMenuAsideItem: activeSettingsContextMenuAsideItem === 'Общие' }" @click="activeSettingsContextMenuAsideItem = 'Общие'">
                            <span>
                                Общие
                            </span>
                        </div>
                        <div :class="{ settingsContextMenuAsideItem: true, activeSettingsContextMenuAsideItem: activeSettingsContextMenuAsideItem === 'Канал' }" @click="activeSettingsContextMenuAsideItem = 'Канал'; activeSettingsContextMenuArticleTab = 'Основная информация'">
                            <span>
                                Канал
                            </span>
                        </div>
                        <div :class="{ settingsContextMenuAsideItem: true, activeSettingsContextMenuAsideItem: activeSettingsContextMenuAsideItem === 'Загрузка видео' }" @click="activeSettingsContextMenuAsideItem = 'Загрузка видео'; activeSettingsContextMenuArticleTab = 'Основная информация'">
                            <span>
                                Загрузка видео
                            </span>
                        </div>
                        <div :class="{ settingsContextMenuAsideItem: true, activeSettingsContextMenuAsideItem: activeSettingsContextMenuAsideItem === 'Разрешения' }" @click="activeSettingsContextMenuAsideItem = 'Разрешения'">
                            <span>
                                Разрешения
                            </span>
                        </div>
                        <div :class="{ settingsContextMenuAsideItem: true, activeSettingsContextMenuAsideItem: activeSettingsContextMenuAsideItem === 'Сообщество' }" @click="activeSettingsContextMenuAsideItem = 'Сообщество'; activeSettingsContextMenuArticleTab = 'Автоматические фильтры'">
                            <span>
                                Сообщество
                            </span>
                        </div>
                        <div :class="{ settingsContextMenuAsideItem: true, activeSettingsContextMenuAsideItem: activeSettingsContextMenuAsideItem === 'Соглашения' }" @click="activeSettingsContextMenuAsideItem = 'Соглашения'">
                            <span>
                                Соглашения
                            </span>
                        </div>
                    </div>
                    <div v-if="activeSettingsContextMenuAsideItem === 'Общие'" class="settingsContextMenuArticle">
                        <span class="settingsContextMenuArticleHeader">
                            Единицы измерения по умолчанию
                        </span>
                        <select v-model="currency" class="settingsContextMenuArticleItem w-50 form-select" @change="setCurrency">
                            <option :value="'USD'">Доллар США (USD)</option>
                            <option :value="'RUB'">Российский рубль (RUB)</option>
                        </select>
                    </div>
                    <div v-else-if="activeSettingsContextMenuAsideItem === 'Канал'" class="settingsContextMenuArticle">
                        <div class="settingsContextMenuArticleItem settingsContextMenuArticleTabs">
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Основная информация' }" @click="activeSettingsContextMenuArticleTab = 'Основная информация'">
                                <span>
                                    Основная информация
                                </span>
                            </div>
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Расширенные настройки' }" @click="activeSettingsContextMenuArticleTab = 'Расширенные настройки'">
                                <span>
                                    Расширенные настройки
                                </span>
                            </div>
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Доступность функций' }" @click="activeSettingsContextMenuArticleTab = 'Доступность функций'">
                                <span>
                                    Доступность функций
                                </span>
                            </div>
                        </div>
                        <div v-if="activeSettingsContextMenuArticleTab === 'Основная информация'" class="activeSettingsContextMenuArticleTabContent">
                            <select v-model="country" class="settingsContextMenuArticleItem w-50 form-select" @change="setCountry">
                                <option :value="'Россия'">Россия</option>
                                <option :value="'USA'">USA</option>
                            </select>
                            <span class="settingsContextMenuArticleItem">
                                Выберите страну, где вы сейчас проживаете. Подробнее…
                            </span>
                            <input placeholder="Ключевые слова" v-model="tags" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setKeywords" />
                            <span class="settingsContextMenuArticleItem">
                                Укажите значения через запятую.
                            </span>
                        </div>
                        <div v-else-if="activeSettingsContextMenuArticleTab === 'Расширенные настройки'"  class="activeSettingsContextMenuArticleTabContent activeSettingsContextMenuArticleTabContent">
                            <span class="auxSettingsHeader">     
                                Аудитория
                            </span>
                            <span>
                                Вы можете задать аудиторию на уровне канала. В противном случае вам понадобится указывать ее отдельно для каждого видео для детей. Эта настройка распространяется и на существующие, и на будущие ролики. Настройка для отдельного ролика будет иметь приоритет над настройкой на уровне канала.
                            </span>
                            <span class="auxSettingsHeader">
                                Указать, что канал для детей?
                            </span>
                            <span>
                                Вне зависимости от вашего местонахождения и страны проживания вы обязаны соблюдать требования Закона США о защите личных сведений детей в интернете (COPPA) и/или других законодательных актов. Вы обязаны сообщать нам, предназначены ли ваши ролики для детей. Подробнее о контенте, предназначенном для детей…
                            </span>
                            <div class="childCannelItem">
                                <input class="childCannelElement" v-model="childChannel" name="childChannel" :value="'yes'" type="radio" @keyup.enter="setChildChannel" />
                                <span class="childCannelElement">
                                    Да мой канал и все видео на нем - для детей
                                </span>
                            </div>
                            <div class="childCannelItem">
                                <input class="childCannelElement" v-model="childChannel" name="childChannel" :value="'no'" type="radio" @keyup.enter="setChildChannel" />
                                <span class="childCannelElement">
                                    Нет, мой канал не для детей и на нем нет десткого контента
                                </span>
                            </div>
                            <div class="childCannelItem">
                                <input class="childCannelElement" v-model="childChannel" name="childChannel" :value="'no'" type="radio" @keyup.enter="setChildChannel" />
                                <span class="childCannelElement">
                                    Я хочу указать аудиторию каждого ролика отдельно
                                </span>
                            </div>
                            <div class="bindAccounts">
                                <span>
                                    Связь с аккаунтами Google Рекламы
                                </span>
                                <span>
                                    СВЯЗАТЬ АККАУНТЫ
                                </span>
                            </div>
                            <span>
                                Если вы установите связь между каналом YouTube и аккаунтом Google Рекламы, то объявления к каждому ролику будут подбираться с учетом того, как с ним взаимодействуют зрители. Кроме того, вам станет доступна дополнительная статистика по видео. Подробнее… 
                            </span>
                            <span>
                                Автоматические субтитры
                            </span>
                            <div class="childCannelItem">
                                <input class="childCannelElement" v-model="autoSubtitles" type="checkbox" @keyup.enter="setAutoSubtitles" />
                                <span class="childCannelElement">
                                    Не показывать потенциально недопустимые слова
                                </span>
                            </div>
                            <span>
                                При создании автоматических субтитров система иногда допускает ошибки в тексте. Установите этот флажок, чтобы потенциально недопустимые слова не показывались. Подробнее… 
                            </span>
                            <span>
                                Число подписчиков
                            </span>
                            <div class="childCannelItem">
                                <input class="childCannelElement" v-model="showFollowers" type="checkbox" @keyup.enter="setShowFollowers" />
                                <span class="childCannelElement">
                                    Показывать количество подписчиков на канале
                                </span>
                            </div>
                            <span>
                                Реклама
                            </span>
                            <div class="childCannelItem">
                                <input class="childCannelElement" v-model="adsBaseInterests" type="checkbox" @keyup.enter="setAdsBaseInterests" />
                                <span class="childCannelElement">
                                    Отключить рекламу на основе интересов
                                </span>
                            </div>
                            <span>
                                Другие настройки
                            </span>
                            <span>
                                Управление аккаунтом Youtube
                            </span>
                            <span>
                                Удаление контента с Youtube
                            </span>
                        </div>
                        <div v-else-if="activeSettingsContextMenuArticleTab === 'Доступность функций'"  class="activeSettingsContextMenuArticleTabContent">
                            <span>
                                На этой вкладке приведены условия, которые нужно выполнить, чтобы получить доступ к определенным функциям.
                            </span>
                            <div class="auxFunction">
                                <div class="auxFunctionAside">
                                    <span class="auxFunctionAsideHeader">
                                        Функции, доступные по умолчанию
                                    </span>
                                    <span>
                                        Загрузка видео, создание плейлистов и управление ими (добавление роликов и приглашение соавторов)
                                    </span>
                                </div>
                                <span>
                                    Включены 
                                </span>
                                <span class="material-icons">
                                    expand_more
                                </span>
                            </div>
                            <div class="auxFunction">
                                <div class="auxFunctionAside">
                                    <span class="auxFunctionAsideHeader">
                                        Функции, для доступа к которым нужно подтвердить номер телефона
                                    </span>
                                    <span>
                                        Загрузка видео продолжительностью более 15 минут, свои значки, прямые трансляции, подача апелляций на заявки Content ID
                                    </span>
                                </div>
                                <span>
                                    Включены 
                                </span>
                                <span class="material-icons">
                                    expand_more
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSettingsContextMenuAsideItem === 'Загрузка видео'" class="settingsContextMenuArticle">
                        <div class="settingsContextMenuArticleItem settingsContextMenuArticleTabs">
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Основная информация' }" @click="activeSettingsContextMenuArticleTab = 'Основная информация'">
                                <span>
                                    Основная информация
                                </span>
                            </div>
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Расширенные настройки' }" @click="activeSettingsContextMenuArticleTab = 'Расширенные настройки'">
                                <span>
                                    Расширенные настройки
                                </span>
                            </div>
                        </div>
                        <div v-if="activeSettingsContextMenuArticleTab === 'Основная информация'" class="activeSettingsContextMenuArticleTabContent">
                            <input placeholder="Добавьте название, которое отражает содержание вашего ролика" v-model="title" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setTitle" />
                            <input placeholder="Расскажите о чем ваше видео" v-model="aboutVideo" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setAboutVideo" />
                            <select v-model="accessParams" class="settingsContextMenuArticleItem w-50 form-select" @change="setAccessParams">
                                <option :value="'Открытый доступ'">Открытый доступ</option>
                                <option :value="'Ограниченный доступ'">Ограниченный доступ</option>
                                <option :value="'Доступ по ссылке'">Доступ по ссылке</option>
                            </select>
                            <input placeholder="Добавить тэг" v-model="tag" type="text" class="settingsContextMenuArticleItem" @keyup.enter="addTag" />
                            <span class="settingsContextMenuArticleItem">
                                Укажите значения через запятую.
                            </span>
                        </div>
                        <div v-else-if="activeSettingsContextMenuArticleTab === 'Расширенные настройки'"  class="activeSettingsContextMenuArticleTabContent">
                            <span>
                                Автоматическая разбивка на эпизоды
                            </span>
                            <span>
                                Эпизоды помогают зрителям быстрее находить в видео нужную информацию. При необходимости автоматическую разбивку можно скорректировать вручную. Для этого достаточно исправить временные метки и названия эпизодов в описании видео. Подробнее 
                            </span>
                            <div class="settingsContextMenuArticleSendComments settingsContextMenuArticleItem">
                                <input v-model="autoEpisodsSplit" type="checkbox" class="settingsContextMenuArticleSendCommentsItem" @keyup.enter="setAutoEpisodsSplit" />
                                <span class="settingsContextMenuArticleSendCommentsItem">
                                    Разрешить автоматическую разбивку на эпизоды в случаях, когда это возможно
                                </span>
                            </div>
                            <div class="activeSettingsContextMenuArticleTabContent activeSettingsContextMenuArticleTabRowContent">
                                <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                    <select v-model="license" class="settingsContextMenuArticleItem w-50 form-select" @change="setLicense">
                                        <option :value="'standard'">Стандартная лицензия VideoCache</option>
                                        <option :value="'Creative Commons'">Creative Commons</option>
                                    </select>
                                </div>
                                <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                    <select v-model="category" class="settingsContextMenuArticleItem form-select" @change="setCategory">
                                        <option :value="'Музыка'">Музыка</option>
                                        <option :value="'Транспорт'">Транспорт</option>
                                    </select>
                                </div>
                            </div>
                            <span class="activeSettingsContextMenuArticleTabRowContentItemHeader">
                                Язык и сертификация субтитров
                            </span>
                            <div class="langsAndCerts activeSettingsContextMenuArticleTabContent activeSettingsContextMenuArticleTabRowContent">
                                <div class="activeSettingsContextMenuArticleTabRowContentItem activeSettingsContextMenuArticleTabRowContentItem">
                                    <select v-model="videoLang" class="settingsContextMenuArticleItem form-select" @change="setVideoLang">
                                        <option :value="'Русский'">Русский</option>
                                        <option :value="'English'">English</option>
                                    </select>
                                </div>
                                <div class="notSubtitlesReasonContainer activeSettingsContextMenuArticleTabRowContentItem activeSettingsContextMenuArticleTabRowContentItem">
                                    <select v-model="notSubtitlesReason" class="settingsContextMenuArticleItem w-50 form-select" @change="setNotSubtitlesReason">
                                        <option :value="'Вариант не выбран'">Вариант не выбран</option>
                                        <option :value="'Этот контент никогда не транслировался по американскому телевидению'">Этот контент никогда не транслировался по американскому телевидению</option>
                                    </select>
                                </div>
                            </div>
                            <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                <select v-model="subtitlesLang" class="settingsContextMenuArticleItem w-50 form-select" @change="setSubtitlesLang">
                                    <option :value="'Русский'">Русский</option>
                                    <option :value="'English'">English</option>
                                </select>
                            </div>
                            <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                <span class="activeSettingsContextMenuArticleTabRowContentItemHeader">
                                    Комментарии
                                </span>
                                <select v-model="comments" class="settingsContextMenuArticleItem w-50 form-select" @change="setComments">
                                    <option :value="'Разрешить все комментарии'">Разрешить все комментарии</option>
                                    <option :value="'Отправлять потенциально недопустимые комментарии на проверку'">Отправлять потенциально недопустимые комментарии на проверку</option>
                                    <option :value="'Отправлять все комментарии на проверку'">Отправлять все комментарии на проверку</option>
                                    <option :value="'Отключить комментарии'">Отключить комментарии</option>
                                </select>
                            </div>
                            <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                <span class="activeSettingsContextMenuArticleTabRowContentItemHeader">
                                    
                                </span>
                                <div class="settingsContextMenuArticleSendComments settingsContextMenuArticleItem">
                                    <span class="settingsContextMenuArticleSendCommentsItem">
                                        
                                    </span>
                                </div>
                            </div>
                            <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                <div class="settingsContextMenuArticleSendComments settingsContextMenuArticleItem">
                                    <input v-model="showVideoValues" type="checkbox" class="settingsContextMenuArticleSendCommentsItem" @keyup.enter="setShowVideoValues" />
                                    <span class="settingsContextMenuArticleSendCommentsItem">
                                        Показать оценки видео
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSettingsContextMenuAsideItem === 'Разрешения'" class="settingsContextMenuArticle">
                        <div class="permissionsRow">
                            <span class="settingsContextMenuArticleHeader">
                                Пользователи с доступом к аккаунту владельца контента "KarasGames - разработчик игр"
                            </span>
                            <span class="invite" @click="invite">
                                ПРИГЛАСИТЬ
                            </span>
                        </div>
                        <span>
                            Предоставьте другим пользователям различные права доступа к каналу или измените их роли. Имейте в виду, что пока разрешения распространяются не на все функции и разделы YouTube. 
                            <span class="link">
                                Подробнее… 
                            </span>
                        </span>
                        <div class="permissionsTable">
                            <div class="permissionsColumn">
                                <span class="permissionsColumnTab permissionsColumnItem">
                                    Аватар
                                </span>
                                <div class="permissionsColumnLogo  permissionsColumnItem">
                                    
                                </div>
                            </div>
                            <div class="permissionsColumn">
                                <span class="permissionsColumnTab permissionsColumnItem">
                                    Имя пользователя 
                                </span>
                                <div class="permissionsColumnInfo permissionsColumnItem">
                                    <span>
                                        {{
                                            bloger.login.split('@')[0]
                                        }}
                                    </span>
                                    <span>
                                        {{
                                            bloger.login
                                        }}
                                    </span>
                                </div>
                            </div>
                            <div class="permissionsColumnTab permissionsColumn">
                                <span class="permissionsColumnItem">
                                    Роль
                                </span>
                                <span class="permissionsColumnItem">
                                    Владелец 
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSettingsContextMenuAsideItem === 'Сообщество'" class="settingsContextMenuArticle">
                        <div class="settingsContextMenuArticleItem settingsContextMenuArticleTabs">
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Автоматические фильтры' }" @click="activeSettingsContextMenuArticleTab = 'Автоматические фильтры'">
                                <span>
                                    Автоматические фильтры
                                </span>
                            </div>
                            <div :class="{ settingsContextMenuArticleTab: true, activeSettingsContextMenuArticleTab: activeSettingsContextMenuArticleTab === 'Настройки по умолчанию' }" @click="activeSettingsContextMenuArticleTab = 'Настройки по умолчанию'">
                                <span>
                                    Настройки по умолчанию
                                </span>
                            </div>
                        </div>
                        <div v-if="activeSettingsContextMenuArticleTab === 'Автоматические фильтры'" class="activeSettingsContextMenuArticleTabContent">
                            <input placeholder="У вас пока нет модераторов" v-model="moderators" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setModerators" />
                            <span class="settingsContextMenuArticleItem">
                                Чтобы назначить пользователя модератором, укажите URL его канала в поле выше.
                            </span>
                            <input placeholder="У вас пока нет одобренных пользователей" v-model="acceptUsers" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setAcceptedUsers"  />
                            <span class="settingsContextMenuArticleItem">
                                Чтобы добавить пользователя в список одобренных, укажите URL его канала в поле выше.
                            </span>
                            <input placeholder="У вас пока нет заблокированных пользователей" v-model="blockedUsers" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setBlokedUsers" />
                            <span class="settingsContextMenuArticleItem">
                                Чтобы заблокировать пользователя, укажите URL его канала в поле выше.
                            </span>
                            <input placeholder="В вашем черном списке пока нет слов" v-model="blackList" type="text" class="settingsContextMenuArticleItem" @keyup.enter="setBlackList" />
                            <span class="settingsContextMenuArticleItem">
                                Укажите значения через запятую.
                            </span>
                            <div class="settingsContextMenuArticleSendComments settingsContextMenuArticleItem">
                                <input v-model="sendComments" type="checkbox" class="settingsContextMenuArticleSendCommentsItem"  @keyup.enter="setSendComments" />
                                <span class="settingsContextMenuArticleSendCommentsItem">
                                    Отправлять комментарии со ссылками на проверку
                                </span>
                            </div>
                            <span>
                                Сейчас сообщения в чате, содержащие URL, автоматически блокируются. Если вы установите флажок выше, все комментарии с URL и хештегами будут отправляться на проверку. Это ограничение не будет распространяться на комментарии, которые написали вы, модераторы или одобренные пользователи.
                            </span>
                        </div>
                        <div v-else-if="activeSettingsContextMenuArticleTab === 'Настройки по умолчанию'"  class="activeSettingsContextMenuArticleTabContent activeSettingsContextMenuArticleTabRowContent">
                            <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                <span class="activeSettingsContextMenuArticleTabRowContentItemHeader">
                                    Комментарии к новым видео
                                </span>
                                <select v-model="commentsToNewVideo" class="settingsContextMenuArticleItem w-50 form-select" @change="setCommentsToNewVideo" >
                                    <option :value="'Разрешить все комментарии'">Разрешить все комментарии</option>
                                    <option :value="'Отправлять потенциально недопустимые комментарии на проверку'">Отправлять потенциально недопустимые комментарии на проверку</option>
                                    <option :value="'Отправлять все комментарии на проверку'">Отправлять все комментарии на проверку</option>
                                    <option :value="'Отключить комментарии'">Отключить комментарии</option>
                                </select>
                            </div>
                            <div class="activeSettingsContextMenuArticleTabRowContentItem">
                                <span class="activeSettingsContextMenuArticleTabRowContentItemHeader">
                                    Сообщения в чатах прямых трансляций
                                </span>
                                <div class="settingsContextMenuArticleSendComments settingsContextMenuArticleItem">
                                    <input v-model="sendImpossibleComments" type="checkbox" class="settingsContextMenuArticleSendCommentsItem" @keyup.enter="setSendImpossibleComments" />
                                    <span class="settingsContextMenuArticleSendCommentsItem">
                                        Отправлять потенциально недопустимые комментарии на проверку
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSettingsContextMenuAsideItem === 'Соглашения'" class="settingsContextMenuArticle">
                        <div class="settingsContextMenuArticleCommunity">
                            <span>
                                Пользование сервисом регулируется Условиями использования YouTube. Подробнее… 
                            </span>
                        </div>
                    </div>
                </div>
                <div class="settingsContextMenuFooter">
                    <span class="settingsContextMenuFooterItem settingsContextMenuFooterCloseBtn" @click="isSettings = false; getBloger(bloger.login)">
                        ЗАКРЫТЬ
                    </span>
                    <span class="settingsContextMenuFooterItem" @click="saveSettings">
                        CОХРАНИТЬ
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isFeedback" class="settingsBackdrop">
            <div class="sendCommentDialog">
                <div class="sendCommentHeader">
                    <span>
                        Отправить отзыв
                    </span>
                </div>
                <div class="sendCommentBody">
                    <textarea placeholder="Не включайте в отзыв конфиденциальную информацию. Если у нас есть вопросы, в том числе." v-model="feedback" type="text" class="sendCommentBodyHeader form-control">
                    </textarea>
                    <div class="attachScreenshotContainer">
                        <input type="checkbox" />
                        <span class="attachScreenshot">
                            Прикрепить скриншот
                        </span>
                    </div>
                    <span>
                        Некоторая информация об аккаунте и системе может быть отправлена в Google. Это помогает нам устранять неполадки и улучшать наши сервисы. Ваши данные будут обрабатываться в соответствии с Политикой конфиденциальности и Условиями использования. Мы можем запрашивать у вас дополнительные сведения или сообщать вам об обновлениях по электронной почте. Подать запрос на изменение контента в связи с нарушением законодательства можно на этой странице.
                    </span>
                </div>
                <div class="sendCommentFooter">
                    <span class="sendCommentFooterBtn sendCommentFooterCancelBtn" @click="isFeedback = false">
                        ОТМЕНА
                    </span>
                    <span class="sendCommentFooterBtn sendCommentFooterSendBtn">
                        ОТПРАВИТЬ
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import StudioHeader from '@/components/StudioHeader.vue'
import StudioAside from '@/components/StudioAside.vue'

import * as jwt from 'jsonwebtoken'
const chartjs = require('chart.js')

export default {
    name: 'Studio',
    data() {
        return {
            activeTab: 'Main',
            activeContentTab: 'Downloads',
            activeAnalyticsTab: 'Scope',
            analyticsPeriod: 28,
            activeCommentsType: 'Опубликованные',
            activeSubtitlesTab: 'All',
            activeChannelEditTab: 'Главная страница',
            whenShowLogoChannel: '',
            channelName: 'карась геймс',
            channelDesc: 'это канал карась геймс, мой канал о разработке моих инди игр. Также можно следить за разработкой в группе вк https://vk.com/karasgames',
            channelContacts: '',
            activeSoundLibraryTab: 'Бесплатаная музыка',
            bloger: {
                login: '',
                channels: [],
                playlists: []
            },
            channel: {

            },
            filesList: [],
            videos: [],
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
            isEditChannelName: false,
            posts: [],
            viewsAnalytics: [],
            totalViews: 0,
            totalViewsFromPeriod: 0,
            playlists: [],
            activeAnalyticsScopeChartTab: 'Views',
            activeSettingsContextMenuAsideItem: 'Общие',
            currency: 'RUB',
            activeSettingsContextMenuArticleTab: 'Автоматические фильтры',
            moderators: [],
            acceptUsers: [],
            blockedUsers: [],
            blackList: [],
            sendComments: false,
            commentsToNewVideo: 'Отправлять потенциально недопустимые комментарии на проверку',
            sendImpossibleComments: false,
            country: 'Россия',
            tags: [],
            aboutVideo: '',
            title: '',
            accessParams: 'Открытый доступ',
            showVideoValues: true,
            isFeedback: false,
            isSettings: false,
            childChannel: 'no',
            showFollowers: true,
            adsBaseInterests: false,
            autoEpisodsSplit: true,
            subtitlesLang: 'Русский',
            notSubtitlesReason: 'Вариант не выбран',
            videoLang: 'Русский',
            category: 'Транспорт',
            license: 'standard',
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
                if (this.$route.query.activetab !== 'none') {
                    this.activeTab = this.$route.query.activetab
                }

            }
        })
    },
    methods: {
        saveSettings() {
            
            fetch(`http://localhost:4000/api/blogers/settings/save/?blogerlogin=${this.bloger.login}&adsbaseinterests=${this.adsBaseInterests}&showfollowers=${this.showFollowers}&autosubtitles=${this.sendImpossibleComments}&childchannel=${this.childChannel}&country=${this.country}&autoepisodssplit=${this.autoEpisodsSplit}&license=${this.license}&category=${this.category}&videolang=${this.videoLang}&notsubtitlesreason=${this.notSubtitlesReason}&subtitlesLang=${this.subtitlesLang}&showvideovalues=${this.showVideoValues}&accessparams=${this.accessParams}&title=${this.title}&aboutvideo=${this.aboutVideo}&sendimpossiblecomments=${this.sendImpossibleComments}&commentstonewvideo=${this.commentsToNewVideo}&sendcomments=${this.sendComments}&currency=${this.currency}`, {
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
                    alert(`Задал настройки`)
                    this.isSettings = false
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу задать настройки')
                }
            })

        },
        setAdsBaseInterests() {

        },
        setShowFollowers() {

        },
        setAutoSubtitles() {

        },
        setChildChannel() {

        },
        setKeywords() {

        },
        setCountry() {

        },
        setAutoEpisodsSplit() {

        },
        setLicense() {

        },
        setCategory() {

        },
        setVideoLang() {

        },
        setNotSubtitlesReason() {

        },
        setSubtitlesLang() {

        },
        setComments() {
            
        },
        setShowVideoValues() {

        },
        setTitle() {

        },
        setAboutVideo() {

        },
        setAccessParams() {

        },
        addTag() {

        },
        invite() {

        },
        setSendImpossibleComments() {

        },
        setCommentsToNewVideo() {

        },
        setSendComments() {

        },
        setBlackList() {

        },
        setBlokedUsers() {

        },
        setAcceptedUsers() {

        },
        setModerators() {

        },
        setCurrency() {

        },
        toggleFeedbackHandler() {
            this.isFeedback = !this.isFeedback
        },
        toggleSettingsHandler() {
            this.isSettings = !this.isSettings
        },
        getPlayLists() {
            
            fetch(`http://localhost:4000/api/playlists/all/`, {
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
                    this.playlists = JSON.parse(result).playlists
                    alert(`Получил плейлисты: ${this.playlists.length}`)
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить плейлисты')
                }
            })

        },
        createPlayList() {
            
            fetch(`http://localhost:4000/api/playlists/create/?blogerid=${this.bloger._id}`, {
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
                    alert(`Создал плейлист`)
                    this.isEditChannelName = false
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу создать плейлист')
                }
            })

        },
        setActiveAnalyticsTab(tab) {
            this.activeAnalyticsTab = tab
            setTimeout(() => this.drawGraph(), 2000)
        },
        addDays(fromDate, days) {
            let date = new Date(fromDate)
            date.setDate(date.getDate() + days)
            return date
        },
        drawGraph() {
            
            this.viewsAnalytics = []
            this.videos.map(video => video.viewsAnalytics.map(analyticsItem => analyticsItem).map(analyticsItem => {
                // alert(`analyticsItem: ${analyticsItem.date} video: ${video.name} | ${this.channel.videos.map(video => video.id).includes(video._id)}`)
                if (this.channel.videos.map(video => video.id).includes(video._id)) {
                    this.viewsAnalytics.push(analyticsItem)
                }
            }))
            
            let ctx = document.getElementById('graph').getContext('2d')
            // alert(`ctx: ${ctx}`)
            // new Chart(ctx, {
            //     type: 'line',
            //     data: {
            //         labels: [
            //             this.addDays(new Date(), -28).toLocaleDateString(),
            //             this.addDays(new Date(), -24).toLocaleDateString(),
            //             this.addDays(new Date(), -20).toLocaleDateString(),
            //             this.addDays(new Date(), -16).toLocaleDateString(),
            //             this.addDays(new Date(), -12).toLocaleDateString(),
            //             this.addDays(new Date(), -8).toLocaleDateString(),
            //             this.addDays(new Date(), -4).toLocaleDateString(),
            //         ],
            //         datasets: [{
            //             label: '',
            //             backgroundColor: 'rgb(255, 99, 132)',
            //             borderColor: 'rgb(255, 99, 132)',
            //             data: [
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -28).toLocaleDateString()).length,
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -24).toLocaleDateString()).length,
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -20).toLocaleDateString()).length,
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -16).toLocaleDateString()).length,
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -12).toLocaleDateString()).length,
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -8).toLocaleDateString()).length,
            //                 this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -4).toLocaleDateString()).length,
            //             ],
            //         }]
            //     },
            //     options: {
            //         responsive: true,
            //         maintainAspectRatio: false,
            //         scales: {
            //             yAxes: [{
            //                 ticks: {
            //                     beginAtZero:true
            //                 }
            //             }]
            //         }
            //     }
            // })
            let viewsAnalyticsDataRange = []
            this.totalViewsFromPeriod = 0
            for (let labelIdx = 0; labelIdx < 7; labelIdx++) {
                viewsAnalyticsDataRange.push(this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -this.analyticsPeriod + (this.analyticsPeriod / 7 * labelIdx)).toLocaleDateString()).length)
                this.totalViewsFromPeriod += this.viewsAnalytics.filter(viewsAnalyticsItem => `${viewsAnalyticsItem.date.split('-')[2].length >= 2 ? viewsAnalyticsItem.date.split('-')[2] : `0${viewsAnalyticsItem.date.split('-')[2]}`}.${viewsAnalyticsItem.date.split('-')[1].length >= 2 ? viewsAnalyticsItem.date.split('-')[1] : `0${viewsAnalyticsItem.date.split('-')[1]}`}.${viewsAnalyticsItem.date.split('-')[0]}` === this.addDays(new Date(), -this.analyticsPeriod + (this.analyticsPeriod / 7 * labelIdx)).toLocaleDateString()).length
            }
            let viewsAnalyticsLabelsRange = []
            for (let labelIdx = 0; labelIdx < 7; labelIdx++) {
                viewsAnalyticsLabelsRange.push(this.addDays(new Date(), -this.analyticsPeriod + (this.analyticsPeriod / 7 * labelIdx)).toLocaleDateString(),)
            }
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: viewsAnalyticsLabelsRange,
                    datasets: [{
                        label: '',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: viewsAnalyticsDataRange,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            })
        },
        setChannelName() {
            
            fetch(`http://localhost:4000/api/channel/name/set/?channelid=${this.channel._id}&channelname=${this.channelName}`, {
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
                    alert('обновил название канала')
                    this.channel.name = this.channelName
                    this.isEditChannelName = false
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить название канала')
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
                    this.videos = JSON.parse(result).videos
                    alert('Получил группу видео')
                    this.videos.map(video => video.posts.map(post => post).map(post => {
                        // alert(`post: ${post.bloger} video: ${video.name} | ${this.channel.videos.map(video => video.id).includes(video._id)}`)
                        if (this.channel.videos.map(video => video.id).includes(video._id)) {
                            this.posts.push(post)
                        }
                    }))
                    
                    this.totalViews = 0
                    this.videos.map(video => {
                        if (this.channel.videos.map(video => video.id).includes(video._id)) {
                            this.totalViews += video.views
                        }
                    })

                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить группу видео')
                }
            })

        },
        FileListItems(files){
            var b = new ClipboardEvent("").clipboardData || new DataTransfer()
            for (var i = 0, len = files.length; i<len; i++){
                b.items.add(files[i])
            }
            return b.files
        },
        setChannelLogo() {

            
            window.showOpenFilePicker({     
                types: [
                {
                    description: 'Поддерживаемы форматы',
                    accept: {
                    'image/png': ['.png']
                    },
                },
                ],
                excludeAcceptAllOption: true,
                multiple: true,
            }).then(async files => {
                console.log('files: ', files)
                this.filesList = []
                for (let file of files) {
                    this.filesList.push(await file.getFile())
                }
                console.log('this.filesList: ', this.filesList)
                this.$refs.channelFileUploader.files = new this.FileListItems(
                    this.filesList
                )
                setTimeout(() => {
                    this.$refs.channelLogoForm.submit()
                }, 1000)
            }).catch(e => console.log('windowerror: ', e))


        },
        setBannerLogo() {

            
            window.showOpenFilePicker({     
                types: [
                {
                    description: 'Поддерживаемы форматы',
                    accept: {
                    'image/png': ['.png']
                    },
                },
                ],
                excludeAcceptAllOption: true,
                multiple: true,
            }).then(async files => {
                console.log('files: ', files)
                this.filesList = []
                for (let file of files) {
                    this.filesList.push(await file.getFile())
                }
                console.log('this.filesList: ', this.filesList)
                this.$refs.bannerFileUploader.files = new this.FileListItems(
                    this.filesList
                )
                setTimeout(() => {
                    this.$refs.bannerLogoForm.submit()
                }, 1000)
            }).catch(e => console.log('windowerror: ', e))


        },
        setBlogerLogo() {
            
            window.showOpenFilePicker({     
                types: [
                {
                    description: 'Поддерживаемы форматы',
                    accept: {
                    'image/png': ['.png']
                    },
                },
                ],
                excludeAcceptAllOption: true,
                multiple: true,
            }).then(async files => {
                console.log('files: ', files)
                this.filesList = []
                for (let file of files) {
                    this.filesList.push(await file.getFile())
                }
                console.log('this.filesList: ', this.filesList)
                this.$refs.blogerFileUploader.files = new this.FileListItems(
                    this.filesList
                )
                setTimeout(() => {
                    this.$refs.blogerLogoForm.submit()
                }, 1000)
            }).catch(e => console.log('windowerror: ', e))

        },
        setChannelContacts() {
            
            fetch(`http://localhost:4000/api/channel/contacts/set/?channelid=${this.channel._id}&channelcontacts=${this.channelContacts}`, {
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
                    alert('обновил контакты канала')
                    this.channel.contacts = this.channelContacts
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить контакты канала')
                }
            })

        },
        setChannelDesc() {
            
            fetch(`http://localhost:4000/api/channel/desc/set/?channelid=${this.channel._id}&channeldesc=${this.channelDesc}`, {
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
                    alert('обновил описание канала')
                    this.channel.desc = this.channelDesc
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить описание канала')
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
                    this.bloger = JSON.parse(result).bloger
                    alert('Получил блогера')

                    this.currency = this.bloger.currency
                    this.sendComments = this.bloger.sendComments
                    this.commentsToNewVideo = this.bloger.commentsToNewVideo
                    this.sendImpossibleComments = this.bloger.sendImpossibleComments
                    this.aboutVideo = this.bloger.aboutVideo
                    this.title = this.bloger.title
                    this.accessParams = this.bloger.accessParams
                    this.showVideoValues = this.bloger.showVideoValues
                    this.subtitlesLang = this.bloger.subtitlesLang
                    this.notSubtitlesReason = this.bloger.notSubtitlesReason
                    this.videoLang = this.bloger.videoLang
                    this.category = this.bloger.category
                    this.license = this.bloger.license
                    this.autoEpisodsSplit = this.bloger.autoEpisodsSplit
                    this.country = this.bloger.country
                    this.childChannel = this.bloger.childChannel
                    this.autoSubtitles = this.bloger.autoSubtitles
                    this.showFollowers = this.bloger.showFollowers
                    this.adsBaseInterests = this.bloger.adsBaseInterests

                    this.getChannel(this.bloger.channels[0].id)
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить блогера')
                }
            })

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
                    this.channel = JSON.parse(result).channel
                    this.channelName = this.channel.name
                    this.channelDesc = this.channel.desc
                    this.channelContacts = this.channel.contacts
                    this.getVideos()
                    this.getPlayLists()
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить канал')
                }
            }) 
        },
        changeActiveTabHandler(tab) {
            this.activeTab = tab
            if (tab === 'Analytics') {
                setTimeout(() => this.drawGraph(), 2000)
            }
        }
    },
    components: {
        StudioHeader,
        StudioAside
    }
}
</script>

<style scoped>
    
    .article {
        position: absolute;
        top: 65px;
        left: 20%;
        width: 80%;
        height: 1000px;
    }

    .mainHeader {
        display: flex;
        justify-content: space-between;
    }

    .mainHeaderItem {
        display: flex;
    }

    .mainHeaderElement {
        margin: 0px 10px;
    }

    .mainHeaderTitle {
        font-size: 24px;
    }

    .mainBody {
        display: flex;
        justify-content: center;
        margin: 25px 0px;
    }

    .mainBodyItem {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        /* width: 30%; */
        margin: 15px 0px;
        /* min-height: 500px; */
        border: 1px solid rgb(125, 125, 125);
        /* margin: 0px 15px; */
        border-radius: 8px;
    }

    .mainBodyItemHeader {
        font-weight: bolder;
    }

    .mainBodyItemFollowersCount {
        font-size: 28px;
        font-weight: bolder;
    }

    .separator {
        margin: 15px 0px;
        width: 100%;
        border-bottom: 1px solid rgb(150, 150, 150);
    }

    .mainBodyItemDataRow {
        display: flex;
        justify-content: space-between;
    }

    .mainBodyItemDataRowCount {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 55%;
        margin: 10px;
    }

    .mainBodyItemDataRowItem {
        margin: 0px 5px;
    }

    .mainBodyItemColumn {
        width: 30%;
        display: flex;
        flex-direction: column;
        margin: 0px 15px;
    }

    .followerAvatar {
        border-radius: 100%;
    }

    .follower {
        margin: 15px 0px;
        display: flex;
    }

    .followerInfo {
        margin: 0px 10px;
        display: flex;
        flex-direction: column;
    }

    .showAllFollowers, .showAllComments, .goIdeas, .goToComments, .showStatisticksByVideo {
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
    }

    .commentColumn {
        display: flex;
        flex-direction: column;
    }

    .comment {
        display: flex;
        align-items: flex-start;
        margin: 15px 0px;
    }

    .commentItem {
        margin: 0px 10px;
    }

    .ideaRow {
       align-items: center;
       display: flex;
    }

    .playListsHeader {
        display: flex;
        justify-content: space-between;
    }

    .playListsHeaderTitle {
        font-weight: bolder;
        font-size: 24px;
    }

    .playListsHeaderCreatePlayListBtn {
        color: rgb(0, 100, 255);
        font-weight: bolder;
        cursor: pointer;
    }

    .splitter {
        margin: 25px 0px;
        border: 1px solid rgb(200, 200, 200);
    }

    .filterInputField {
        border: none;
        margin: 0px 5px;
    }

    .filterRow {
        display: flex;
        align-items: center;
    }

    .playListsTable {
        display: flex;
    }

    .playListsTableColumn {
        display: flex;
        flex-direction: column;
    }

    .playListsTableColumnHeader {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 25px 0px;
    }

    .playListsTablePrimaryColumn {
        width: 55%;
    }

    .playListsTableSecondaryColumn {
        width: 15%;
    }

    .playListsHere {
        display: flex;
        justify-content: center;
    }

    .monetizationsHeader {
        display: flex;
    }

    .monetization {
        display: flex;
        flex-direction: column;
    }

    .monetizationBody {
        margin: 35px auto;
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .monetizationHeader {
        font-weight: bolder;
        font-size: 24px;
    }

    .monetizationBodyHeader {
        font-weight: bolder;
        font-size: 20px;
    }

    .monetizationBodyItem {
        margin: 5px 0px;
    }

    .monetizationBodyContainer {
        border: 1px solid rgb(200, 200, 200);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
    }

    .monetizationBodyContainerItem {
        display: flex;
        height: 45%;
        width: 100%;
    }

    .monetizationBodyContainerFirstItem {
        border-bottom: 1px solid rgb(200, 200, 200);
    }

    .monetizationBodyContainerElement {
        width: 100%;
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .monetizationBodyContainerElementColumn {
        display: flex;
        flex-direction: column;
        
    }

    .monetizationBodyContainerElementIcon {
        font-size: 48px;
    }

    .monetizationBodyContainerElementItem {
        margin: 0px 20px;
    }

    .monetizationBodyContainerElementColumnItem {
        margin: 2px 0px;
        font-size: 12px;
        align-self: flex-start;
        text-align: left;
    }

    .analyticsHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0px;
    }

    .analyticsTabs {
        display: flex;
    }

    .analyticsExtendModeBtn {
        cursor: pointer;
        font-weight: bolder;
        color: rgb(0, 100, 255)
    }

    .analyticsHeaderItemColumn {
        display: flex;
        flex-direction: column
    }

    .analyticsHeaderItemColumnElement {
        margin: 3px 0px;
    }

    .analyticsTab {
        cursor: pointer;
        font-weight: bolder;
        margin: 0px 10px;
    }
    
    .activeAnalyticsTab {
        color: rgb(0, 100, 255);
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness: 3px;
    }

    .analyticsHeaderTitle {
        font-weight: bolder;
        font-size: 20px;
    }

    .commentsTitle, .subtitlesTitle, .drmTitle {
        font-weight: bolder;
        font-size: 20px;
    }

    .soundLibraryHeader {
        font-size: 24px;
    }

    .soundLibrarySubheader {
        height: 50px;
        background-color: rgb(235, 235, 235);
        margin: 25px 0px;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .soundLibrarySubheaderItem {
        display: flex;
        align-items: center;
    }
    
    .soundLibrarySubheaderElement {
        margin: 0px 5px;
    }
    .soundLibrarySubheaderItemBtn {
        font-weight: bolder;
    }

    .soundLibraryTabs {
        display: flex;
    }

    .soundLibraryTab {
        cursor: pointer;
        font-weight: bolder;
        margin: 0px 10px;
    }

    .activeSoundLibraryTab {
        color: rgb(0, 100, 255);
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness: 3px;
    }

    .channelEditSubheader {
        font-size: 20px;
        font-weight: bolder;
    }

    .channelEditHeader {
        display: flex;
        justify-content: space-between;
    }

    .channelEditHeaderItem {
        display: flex;
        align-items: center;
    }

    .channelEditHeaderItemBtn {
        font-weight: bolder;
        margin: 0px 10px;
    }
    
    .channelEditHeaderItemBtnGoToChannel {
        color: rgb(0, 100, 255);
        cursor: pointer;
    }

    .channelEditTab {
        font-weight: bolder;
        color: rgb(150, 150, 150);
        margin: 0px 15px;
        cursor: pointer;
    }

    .activeChannelEditTab {
        color: rgb(0, 100, 255);
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 10px;
    }

    .drmTabs {
        display: flex;
    }

    .drmTab {
        font-weight: bolder;
        cursor: pointer;
    }

    .drmActiveTab {
        color: rgb(0, 100, 255);
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness: 3px;
    }

    .removeRequestLabel {
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
    }

    .drmHeader {
        margin: 25px 0px;
        display: flex;
        justify-content: space-between;
    }

    .drmBody {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .link {
        cursor: pointer;
        color: rgb(0, 100, 255);
    }

    .drmNotFound {
        font-weight: bolder;
    }

    .subtitlesTabs {
        margin: 25px 0px;
        display: flex;
    }

    .subtitlesTab {
        margin: 0px 25px;
        cursor: pointer;
        font-weight: bolder;
    }

    .activeSubtitlesTab {
        color: rgb(0, 100, 255);
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness: 3px;
    }

    .subtitlesTable {
        display: flex;
        border-top: 1px solid rgb(115, 115, 115);
    }
    
    .subtitlesTableColumn {
        display: flex;
        flex-direction: column;
    }
    
    .subtitlesTablePrimaryColumn {
        width: 32%;
    }

    .subtitlesTableSecondaryColumn {
        width: 17%;
    }

    .subtitlesTableColumnHeader {
        padding: 15px 0px;
        border-top: 1px solid rgb(115, 115, 115);
        border-bottom: 1px solid rgb(115, 115, 115);
        color: rgb(115, 115, 115);
        font-weight: bolder;
    }

    .subtitlesTableColumnContent {
        height: 100px;
        margin: 15px 0px;
        display: flex;
        align-items: center;
    }

    .subtitlesTableColumnContentItem {
        margin: 0px 5px;
    }

    .commentsType {
        cursor: pointer;
        border-radius: 35px;
        width: 200px;
        height: 35px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(200, 200, 200);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 15px;
    }

    .commentsTypes {
        display: flex;
        margin: 25px 0px;
    }

    .commentsFilterBlock {
        display: flex;
        align-items: center;
    }

    .commentsFilterBlockContainer {
        border-radius: 35px;
        width: 200px;
        height: 35px;
        background-color: rgb(215, 215, 235);
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 0px 15px;
    }

    .commentsFilterBlockContainerItem {
        margin: 0px 5px;
    }

    .commentsList {
        margin: 25px 0px;
        flex-direction: column;
        display: flex;
    }

    .commentList {
        display: flex;
    }

    .commentListAside {
        display: flex;
        align-items: flex-start;
    }

    .commentListAsideItem {
        margin: 0px 5px;
    }

    .commentListAsideInfo {
        display: flex;
        flex-direction: column;
    }

    .commentListAsideInfoItem {
        display: flex;
        margin: 5px 0px;
    }

    .commentListAsideInfElement {
        margin: 0px 5px;
        color: rgb(125, 125, 125);
    }

    .commentListAsideInfoHeaderItem {
        margin: 0px 5px;
    }

    .commentListAsideInfElementAnswer {
        font-weight: bolder;
    }

    .contentHeader {
        font-weight: bolder;
        font-size: 24px;
    }

    .contentTabs {
        margin: 25px 0px;
        display: flex;
    }

    .contentTab {
        margin: 0px 10px;
        font-weight: bolder;
        cursor: pointer;
    }

    .activeContentTab {
        text-decoration: underline;
        color: rgb(0, 100, 255);
        text-decoration-thickness: 3px;
        text-underline-offset: 10px;
    }

    .contentColumnDateField {
        display: flex;
    }

    .contentColumnDateFieldItem {
        margin: 0px 5px;
    }

    .contentTable {
        display: flex;
    }

    .contentColumn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .primaryContentColumn {
        width: 3%;
    }
    
    .secondaryContentColumn {
        width: 25%;
    }

    .thirdaryContentColumn {
        width: 12%;
    }
    
    .contentRow {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .notFoundStreams {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .notFoundStreamsLabel {
        color: rgb(150, 150, 150);
    }

    .beginStream {
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
    }

    .channelNameLabel {
        font-weight: bolder;
    }

    .editChannelNameRow {
        display: flex;
        font-size: 24px;
        align-items: center;
    }

    .editChannelNameRowItem {
        margin: 0px 10px;
    }

    .addTranslate {
        color: rgb(0, 100, 255);
        font-weight: bolder;
        display: flex;
    }

    .addTranslateItem {
        margin: 0px 5px;
    }

    .sectionHeader {
        font-weight: bolder;
    }

    .channelSection {
        display: flex;
        flex-direction: column;
    }

    .editor {
        border-radius: 15px;
        margin: 5px;
        background-color: rgb(235, 235, 235);    
        
    }

    
    .editorString {
        padding: 5px;
        width: 500px;
    }

    .editorBtn {
        font-size: 12px;
        float: right;
        width: 45px;
        height: 25px;
    }

    .channelDesc {
        height: 175px;
    }
    
    .branding {
        display: flex;
        flex-direction: column;
    }

    .brandingItem {
        display: flex;
        flex-direction: column;
        margin: 40px 0px;
    }

    .brandingItemFooter {
        display: flex;
        margin: 25px 0px;
        align-items: center;
    }

    .brandingItemFooterArticle {
        margin: 0px 25px;
        display: flex;
        flex-direction: column;
    }

    .brandingItemFooterArticleBtns {
        margin: 25px 0px;
        display: flex;
    }

    .brandingItemFooterArticleBtn {
        margin: 0px 5px;
        color: rgb(0, 100, 255);
        font-weight: bolder;
        cursor: pointer;
    }

    .brandingItemHeader {
        font-weight: bolder;
        margin: 15px 0px;
    }

    .brandingItemFooterDetail {
        cursor: pointer;
        color: rgb(0, 100, 255)
    }

    .whenShowLogoChannel {
        display: flex;
        align-items: center;
    }

    .whenShowLogoChannelItem {
        margin: 0px 5px;
    }

    .channelEditMain {
        display: flex;
        flex-direction: column;
    }

    .channelEditSectionHeader {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .channelEditSectionHeaderTitle {
        margin: 5px 0px;
        font-weight: bolder;
    }

    .addSection {
        color: rgb(0, 100, 255);
        font-weight: bolder;
        cursor: pointer;
    }

    .channelEditSectionHeaderColumn {
        display: flex;
        flex-direction: column;
    }

    .channelEditSectionBody {
        border: 1px solid rgb(200, 200, 200);
        height: 150px;
        width: 85%;
        margin: 15px auto;
        background-color: rgb(255, 255, 255);
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        align-items: center;
        justify-content: space-between;
    }

    .channelEditSectionBodyFirst {
        display: flex;
    }

    .channelEditSectionBodyFirstItem {
        margin: 0px 15px;
        display: flex;
        flex-direction: column;
    }

    .channelEditSectionBodyFirstElement {
        margin: 10px 0px;
        display: flex;
    }

    .channelEditSectionBodyFirstElementItem {
        margin: 0px 5px;
    }

    .addToSection {
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
        
    }

    .activeCommentsType {
        background-color: rgb(215, 215, 235) !important;
        border: none !important;
    }

    .analyticsScope {
        display: flex;
    }

    .analyticsScopeItem {
        display: flex;
        flex-direction: column;
        margin: 0px 15px;
    }

    .analyticsScopePrimaryItem {
        width: 75%;
    }

    .analyticsScopeSecondaryItem {
        width: 25%;
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeChart {
        margin: 25px 0px;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
        height: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeChartTabs {
        display: flex;
        justify-content: center;
        height: 25%;
    }

    .analyticsScopeChartTab {
        width: 33%;
        height: 100px;
        border-left: 1px solid rgb(175, 175, 175);
        background-color: rgb(225, 225, 225);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .analyticsScopeChartGraph {
        box-sizing: border-box;
        padding: 0px 25px;
        height: 70%;
        width: 100%;
    }

    .analytics {
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeItemHeader {
        font-weight: bolder;
        font-size: 24px;
        text-align: center;
    }

    .analyticsScopeChartDetail {
        color: rgb(0, 100, 255);
        font-weight: bolder;
        cursor: pointer;
    }

    .analyticsScopeChartTabHeader {
        font-weight: bolder;
        font-size: 20px;
        text-align: center;
    }

    .analyticsScopeChartTabContent {
        font-weight: bolder;
        font-size: 28px;
        text-align: center;
    }

    .analyticsScopeItemTable {
        display: flex;
    }

    .analyticsScopeItemColumn {
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeItemPrimaryColumn {
        width: 40%;
    }

    .analyticsScopeItemSecondaryColumn {
        width: 30%;
    }

    .videoInfo {
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeRow {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .analyticsScopeRowVideo {
        margin: 0px 10px;
    }

    .analyticsScopeSecondaryElement {
        margin: 15px 0px;
        border-radius: 8px;
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        min-height: 250px;
        box-shadow: 0px 0px 5px rgb(200, 200, 200);
    }

    .analyticsScopeSecondarySecondElementFooter {
        display: flex;
        justify-content: space-between;
    }

    .analyticsScopeSecondarySecondElementTable {
        display: flex;
    }

    .analyticsScopeSecondarySecondElementColumn {
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeSecondarySecondElementColumnItem {
        height: 75px;
    }

    .analyticsScopeSecondaryElementTable {
        display: flex;
    }

    .analyticsScopeSecondaryElementColumn {
        display: flex;
        flex-direction: column;
    }

    .analyticsScopeSecondaryElementColumnItem {
        height: 100px;
        margin: 15px 0px;
        display: flex;
        justify-content: flex-end;
    }

    .analyticsScopeChartTabOther {
        width: 50%;
    }

    .analyticsScopeChartTabAnother {
        width: 25%;
    }

    .analyticsScopeMainItem {
        width: 100%;
    }

    .analyticsViewsColumns {
        display: flex;
    }

    .analyticsViewsColumn {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .analyticsViewsColumnItem {
        margin: 25px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        border: 1px solid rgb(150, 150, 150);
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
    }

    .analyticsViewsColumnItemDetail {
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
    }

    .typesTarrifsSource {
        display: flex;
        justify-content: space-between;
    }

    .analyticsViewsColumnItemHeader {
        font-weight: bolder;
    }

    .hidenField {
        opacity: 0;
    }

    .brandingItemFooterLogo {
        border-radius: 100%;
    }

    .editChanneNameField {
        margin: 15px 0px;
    }

    .editChannelNameBtn {
        cursor: pointer;
    }

    #graph {
        max-height: 65%;
        /* background-color: rgb(255, 0, 0); */
    }

    .activeAnalyticsScopeChartTab {
        background-color: rgb(255, 255, 255);
        border-top: 5px solid rgb(0, 100, 255);
    }

    .settingsContextMenu {
        width: 65%;
        height: 85%;
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
    }

    .settingsBackdrop {
        /* width: 100%;
        height: 100%; */
        z-index: 25;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .settingsContextMenuHeader {
        align-items: center;
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        font-weight: bolder;
        font-size: 18px;
        height: 7%;
        border-bottom: 1px solid rgb(175, 175, 175);
    }

    .settingsContextMenuBody {
        display: flex;
        height: calc(100% - 7% - 7%);
    }

    .settingsContextMenuAside {
        width: 25%;
        border-right: 1px solid rgb(175, 175, 175);
    }

    .settingsContextMenuArticle {
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 25px;
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .settingsContextMenuFooter {
        height: 7%;
        border-top: 1px solid rgb(175, 175, 175);
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .settingsContextMenuAsideItem {
        box-sizing: border-box;
        padding: 25px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        font-weight: bolder;
    }

    .settingsContextMenuAsideItem:hover {
        background-color: rgb(240, 240, 240);
    }

    .activeSettingsContextMenuAsideItem {
        background-color: rgb(240, 240, 240);
        border: 1px solid rgb(0, 100, 255)
    }

    .settingsContextMenuFooterItem {
        margin: 0px 8px;
        font-weight: bolder;
        cursor: pointer;
    }

    .settingsContextMenuFooterCloseBtn {
        color: rgb(0, 100, 255)
    }

    .settingsContextMenuArticleHeader {
        font-weight: bolder;
        font-size: 18px;
    }

    .settingsContextMenuArticleItem {
        margin: 15px 0px;
    }

    .settingsContextMenuArticleCommunity {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        font-size: 12px;
    }

    .settingsContextMenuArticleTabs {
        height: 35px;
        display: flex;
        border-bottom: 1px solid rgb(175, 175, 175);
    }

    .settingsContextMenuArticleTab {
        height: 35px;
        cursor: pointer;
        margin: 0px 15px;
        font-weight: bolder;
        font-size: 14px;
    }

    .activeSettingsContextMenuArticleTab {
        border-bottom: 3px solid rgb(0, 100, 255);
    }

    .settingsContextMenuArticleSendComments {
        display: flex;
        align-items: center;
    }
    
    .settingsContextMenuArticleSendCommentsItem {
        margin: 0px 5px;
    }

    .activeSettingsContextMenuArticleTabContent {
        display: flex;
        flex-direction: column;
    }

    .activeSettingsContextMenuArticleTabRowContent {
        flex-direction: row;
    }

    .activeSettingsContextMenuArticleTabRowContentItem {
        display: flex;
        flex-direction: column;
    }

    .activeSettingsContextMenuArticleTabRowContentItemHeader {
        font-weight: bolder;
    }

    .auxFunction {
        margin: 15px 0px;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 8px;
    }

    .auxFunctionAside {
        display: flex;
        flex-direction: column;
    }

    .auxFunctionAsideHeader {
        font-weight: bolder;
    }

    .sendCommentDialog {
        position: fixed;
        top: 10%;
        left: 35%;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 80%;
    }

    .sendCommentHeader {
        color: rgb(255, 255, 255);
        background-color: rgb(85, 85, 85);
        height: 75px;
        font-weight: bolder;
        font-size: 20px;
        box-sizing: border-box;
        padding: 10px 15px;
    }

    .sendCommentBody {
        box-sizing: border-box;
        padding: 10px 15px;
    }

    .sendCommentFooter {
        height: 50px;
        border-top: 1px solid rgb(200, 200, 200);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        padding: 0px 15px;
    }

    .sendCommentFooterBtn {
        cursor: pointer;
        font-weight: bolder;
        color: rgb(0, 100, 255);
        margin: 0px 5px;
    }

    .sendCommentFooterCancelBtn {
        color: rgb(100, 100, 100);
    }

    .sendCommentFooterSendBtn {
        color: rgb(0, 100, 255);
    }

    .attachScreenshot {
        font-weight: bolder;
        margin: 0px 10px;
    }

    .attachScreenshotContainer {
        display: flex;
        align-items: center;
        margin: 15px 0px;
    }

    .sendCommentBodyHeader {
        color: rgb(125, 125, 125);
        font-weight: bolder;
        border: none;
    }

    .backdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .childCannelElement {
        margin: 0px 5px;
    }

    .auxSettingsHeader {
        font-size: 20px;
    }

    .bindAccounts {
        display: flex;
        justify-content: space-between;
    }

    .permissionsTable {
        margin: 25px 0px;
        justify-content: space-between;
        display: flex;
    }

    .permissionsColumn {
        display: flex;
        flex-direction: column;
    }

    .permissionsColumnItem {
        align-self: center;
        height: 50px;
    }

    .permissionsColumnLogo {
        border-radius: 100%;
        width: 50px;
        background-color: rgb(0, 150, 0);
    }

    .permissionsColumnInfo {
        display: flex;
        flex-direction: column;
    }

    .permissionsColumnTab {
        color: rgb(125, 125, 125);
    }

    .permissionsRow {
        display: flex;
        justify-content: space-between;
    }

    .invite {
        font-weight: bolder;
        color: rgb(0, 100, 255);
        cursor: pointer;
    }

    .link {
        color: rgb(0, 100, 255);
        cursor: pointer;
    }

    .notSubtitlesReasonContainer {
        margin-left: 35px;
    }

    .langsAndCerts {
        justify-content: space-between;
    }

</style>
