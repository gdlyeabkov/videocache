<template>
    <div>
        <StudioHeader />
        <div class="main">
            <StudioAside :activeTab="activeTab" @changeActiveTab="changeActiveTabHandler" />
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
                                    25
                                </span>
                                <span>
                                    +2 за последние 28 дней
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
                                            128
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
                                <div class="mainBodyItemDataRow">
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
                                </div>                                
                            </div>
                            <div class="mainBodyItem">
                                <span class="mainBodyItemHeader">
                                    Новые комментарии
                                </span>
                                <span>
                                    Комментарии, на которые вы ещё не ответили 
                                </span>
                                <div class="comment">
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
                                <div class="follower">
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

                </div>
                <div v-else-if="activeTab === 'PlayLists'">
                    <div class="playListsHeader">
                        <span class="playListsHeaderTitle">
                            Плейлисты на канале
                        </span>
                        <span class="playListsHeaderCreatePlayListBtn">
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
                    <div class="playListsTable">
                        <div class="playListsTableColumn playListsTablePrimaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Плейлист
                                </span>
                            </div>
                        </div>
                        <div class="playListsTableColumn playListsTableSecondaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Доступ
                                </span>
                            </div>
                        </div>
                        <div class="playListsTableColumn playListsTableSecondaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Последнее изменение
                                </span>
                            </div>
                        </div>
                        <div class="playListsTableColumn playListsTableSecondaryColumn">
                            <div class="playListsTableColumnHeader">
                                <span>
                                    Количество видео
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="playListsHere">
                        <span>
                            Здесь будут собраны ваши плейлисты.
                        </span>
                    </div>
                    <div class="splitter">

                    </div>

                </div>
                <div v-else-if="activeTab === 'Analytics'">
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
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Scope' }" @click="activeAnalyticsTab = 'Scope'">
                                <span>
                                    Обзор
                                </span>
                            </div>
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Views' }" @click="activeAnalyticsTab = 'Views'">
                                <span>
                                    Просмотры
                                </span>
                            </div>
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Interaction' }" @click="activeAnalyticsTab = 'Interaction'">
                                <span>
                                    Взаимодействие
                                </span>
                            </div>
                            <div :class="{ analyticsTab: true, activeAnalyticsTab: activeAnalyticsTab === 'Audition' }" @click="activeAnalyticsTab = 'Audition'">
                                <span>
                                    Аудитория
                                </span>
                            </div>
                        </div>
                        <div class="analyticsHeaderItemColumn">
                            <span class="analyticsHeaderItemColumnElement">
                                8 нояб. – 5 дек. 2021 г.
                            </span>
                            <span class="analyticsHeaderItemColumnElement">
                                Последние 28 дней
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Comments'">
                    <span class="commentsTitle">
                        Комментарии и упоминания
                    </span>
                    <div class="commentsTypes">
                        <div class="commentsType">
                            <span>
                                Опубликованные
                            </span>
                        </div>
                        <div class="commentsType">
                            <span>
                                На проверке
                            </span>
                        </div>
                    </div>
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
                        <div class="commentList">
                            <div class="commentListAside">
                                <img class="commentListAsideItem" src="https://yt3.ggpht.com/vZ5f4p6HG9FhmCv0zkY4Cc-8Ma405_gtS3COgxhCxiXNyhxFKUQHuqif4hoWbAludibzLAtTqw=s48-c-k-c0x00ffffff-no-rj" alt="" />
                                <div class="commentListAsideItem commentListAsideInfo">
                                    <div class="commentListAsideInfoItem commentListAsideInfoHeader">
                                        <span class="commentListAsideInfoHeaderItem">
                                            Coolinar Coolinar • 
                                        </span>
                                        <span class="commentListAsideInfoHeaderItem">
                                            2 месяца назад 56 подписчики
                                        </span>
                                    </div>
                                    <div class="commentListAsideInfoItem commentListAsideInfoMain">
                                        для того чтобы делать много уровней не надо делать много сцен, просто делаешь настройки игры в скриптбл объектах и потому применяешь их к сцене (количесвто врагов их тип задний фон и тд)
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
                                <img src="https://i.ytimg.com/vi_webp/a7VuEDl71k4/mqdefault.webp" alt="" width="100px" />
                                <span>
                                    Сделал
                                </span>
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
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Языки
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
                            </div>
                            <div class="subtitlesTableColumnContent">
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
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Название и описание
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
                            </div>
                            <div class="subtitlesTableColumnContent">
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
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="activeSubtitlesTab === 'Draft'" class="subtitlesTable">
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
                            <div class="subtitlesTableColumnContent">
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
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <video controls height="115px">
                                    <source />
                                </video>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Языки
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
                            </div>
                            <div class="subtitlesTableColumnContent">
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
                            </div>
                            <div class="subtitlesTableColumnContent">
                                <span class="subtitlesTableColumnContentItem">
                                    16 окт. 2021 г.
                                </span>
                            </div>
                        </div>
                        <div class="subtitlesTableColumn subtitlesTableSecondaryColumn">
                            <div class="subtitlesTableColumnHeader">
                                <span>
                                    Название и описание
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
                            </div>
                            <div class="subtitlesTableColumnContent">
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
                            </div>
                            <div class="subtitlesTableColumnContent">
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
                            <span class="channelEditHeaderItemBtn channelEditHeaderItemBtnGoToChannel">
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
    </div>
</template>

<script>

import StudioHeader from '@/components/StudioHeader.vue'
import StudioAside from '@/components/StudioAside.vue'

export default {
    name: 'Studio',
    data() {
        return {
            activeTab: 'Main',
            activeAnalyticsTab: 'Scope',
            activeSubtitlesTab: 'All',
            activeChannelEditTab: 'Главная страница',
            activeSoundLibraryTab: 'Бесплатаная музыка'
        }
    },
    methods: {
        changeActiveTabHandler(tab) {
            this.activeTab = tab
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
        border-radius: 35px;
        width: 200px;
        height: 35px;
        background-color: rgb(215, 215, 235);
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

</style>