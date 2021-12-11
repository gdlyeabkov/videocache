<template>
    <div class="header">
        <div class="headerItem">
            <span @click="toggleBurger" class="headerElementMenu headerElement material-icons">
                menu
            </span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" width="60px" class="videoCacheLogo headerElement" @click="$router.push({ name: 'Home' })" />
        </div>
        <div class="headerItem">
            <div class="headerElement input-group search">
                <input placeholder="Введите запрос" v-model="keywords" type="text" class="form-control" />
                <span class="input-group-text material-icons" @click="changeActiveTab('Filters'); $emit('changeFilter', keywords)">
                    search
                </span>
            </div>
            <button class="micBtn headerElement btn btn-light material-icons" @click="toggleRecording">
                mic
            </button>
        </div>
        <div class="headerItem">
            <span class="contextMenuBtn headerElement material-icons-outlined" @click="createContextMenu = !createContextMenu" title="Создать">
                videocam
            </span>
            <span class="contextMenuBtn headerElement material-icons-outlined" @click="appsContextMenu = !appsContextMenu" title="Приложения">
                apps
            </span>
            <span class="contextMenuBtn headerElement material-icons-outlined" @click="notificationsContextMenu = !notificationsContextMenu" title="Уведомления">
                notifications
            </span>
            <div :style="`background-image: url('http://localhost:4000/api/blogers/source/get/?blogerlogin=${bloger.login}');`" class="headerElement avatar" @click="avatarContextMenu = !avatarContextMenu">

            </div>
        </div>
        <div v-if="avatarContextMenu && isCountrySwitchDialog" class="avatarContextMenu">
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon" @click="isCountrySwitchDialog = false">
                        arrow_back    
                    </span>
                    <span>
                        Выберите страну
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchCountry('Russia')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.country === 'Russia', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.country === 'Russia' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        Россия
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchCountry('USA')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.country === 'USA', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.country === 'USA' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        Америка
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchCountry('China')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.country === 'China', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.country === 'China' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        中国
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
        <div v-else-if="avatarContextMenu && isLanguageSwitchDialog" class="avatarContextMenu">
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon" @click="isLanguageSwitchDialog = false">
                        arrow_back    
                    </span>
                    <span>
                        Выберите язык
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchLanguage('Russian')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.language === 'Russian', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.language === 'Russian' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        Русский
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchLanguage('English')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.language === 'English', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.language === 'English' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        English
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchLanguage('Chinese')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.language === 'Chinese', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.language === 'Chinese' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        中国人
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
        <div v-else-if="avatarContextMenu && isThemeSwitchDialog" class="avatarContextMenu">
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon" @click="isThemeSwitchDialog = false">
                        arrow_back    
                    </span>
                    <span>
                        Выберите тему
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchTheme('Light')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.theme === 'Light', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.theme === 'Light' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        Светлая
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="switchTheme('Dark')">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': bloger.theme === 'Dark', avatarContextMenuElementIcon: true }">
                        {{
                            bloger.theme === 'Dark' ?
                                'done'
                            :
                                ''
                        }}
                    </span>
                    <span>
                        Темная
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
        <div v-else-if="avatarContextMenu && isAuth" class="avatarContextMenu">
            <div class="avatarContextMenuItem" @click="toChannel">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        person
                    </span>
                    <span>
                        {{
                            bloger.channels.length <= 0 ?
                                'Создать канал'
                            :
                                'Мой канал'
                        }}
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="changeActiveTab('Purchases')">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        paid
                    </span>
                    <span>
                        Покупки и платные подписки
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="$router.push({ name: 'Studio', query: { channelid: bloger.channels[0].id, activetab: 'none', action: 'none' } })">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        settings
                    </span>
                    <span>
                        Творческая студия VideoCache
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        switch_account
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Сменить аккаунт
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="logout">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        logout
                    </span>
                    <span>
                        Выйти
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="isThemeSwitchDialog = true">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        brightness_3
                    </span>
                    <span>
                        Тема: Как на устройстве
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="isLanguageSwitchDialog = true">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        translate
                    </span>
                    <span>
                        {{
                            bloger.language === 'Russian' ?
                                'Язык: Русский'
                            : bloger.language === 'English' ?
                                'English language'
                            : bloger.language === 'Chinese' ?
                                '语言：中文'
                            :
                                'Язык: Русский'
                        }}
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="isCountrySwitchDialog = true">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        language
                    </span>
                    <span>
                        Страна: {{ bloger.country }}
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="$router.push({ name: 'Settings' })">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        settings
                    </span>
                    <span>
                        Настройки
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        person_pin_circle
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Личные данные на VideoCache
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        help_outline
                    </span>
                    <span @click="avatarContextMenu = false; isHelpDialog = true">
                        Справка
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        announcement
                    </span>
                    <span @click="isSendCommentDialog = true">
                        Отправить отзыв
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="isFastKeysDialog = true">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        keyboard
                    </span>
                    <span>
                        Быстрые клавиши
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="setIsSecurityMode">
                <div class="avatarContextMenuElement">
                    <span>
                        Безопасный режим:
                        {{
                            bloger.isSecurityMode ?
                                'откл.'
                            :
                                'вкл.'
                        }}
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
        </div>
        <div v-else-if="avatarContextMenu && !isAuth" class="avatarContextMenu">
            <div class="avatarContextMenuItem" @click="avatarContextMenu = false; isCheckBlogerDialog = true">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        login
                    </span>
                    <span>
                        Войти
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem" @click="isCreateBlogerDialog = false; isCreateBlogerDialog = true">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        add
                    </span>
                    <span>
                        Зарегестрироваться
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
        <div v-if="isCheckBlogerDialog" class="backdrop">
            <div class="createChannelDialog">
                <div class="createChannelDialogItem mainDetails">
                    <span class="mainDetailsLabel">
                        Основные сведения
                    </span>
                </div>
                <div class="channelLogo">

                </div>
                <span class="uploadImageLabel">
                    ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
                </span>
                <div class="createChannelDialogItem w-75">
                    <input placeholder="Имя аккаунта" v-model="blogerLogin" type="text" class="form-control">
                </div>
                <div class="createChannelDialogItem w-75">
                    <input placeholder="Пароль аккаунта" v-model="blogerPassword" type="password" class="form-control">
                </div>
                <div class="channelAgreement createChannelDialogItem">
                    <span class="channelAgreementItem material-icons-outlined">
                        info
                    </span>
                    <span class="channelAgreementItem">
                        Войдите в аккаунт, чтобы получить больше возможностей
                    </span>
                </div>
                <div class="footerBtns createChannelDialogItem">
                    <span class="footerBtn" @click="isCheckBlogerDialog = false">
                        ОТМЕНА
                    </span>
                    <span class="footerBtn createChannelLabel" @click="checkBloger">
                        ВОЙТИ В АККАУНТ
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isCreateBlogerDialog" class="backdrop">
            <!-- <div class="createChannelDialog"> -->
            <form class="createChannelDialog" ref="createBlogerFormRef" method="POST" enctype="multipart/form-data" :action="`http://localhost:4000/api/blogers/create/?blogerlogin=${blogerLogin}&blogerpassword=${blogerPassword}`">
                <div class="createChannelDialogItem mainDetails">
                    <span class="mainDetailsLabel">
                        Основные сведения
                    </span>
                </div>
                <div class="channelLogo">

                </div>
                <span class="uploadImageLabel">
                    ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
                </span>
                <input ref="blogerFileUploader" type="file" name="myFile" class="hiddenField" id="uploader" />
                <div class="createChannelDialogItem w-75">
                    <input placeholder="Имя аккаунта" v-model="blogerLogin" type="text" class="form-control">
                </div>
                <div class="createChannelDialogItem w-75">
                    <input placeholder="Пароль аккаунта" v-model="blogerPassword" type="password" class="form-control">
                </div>
                <div class="channelAgreement createChannelDialogItem">
                    <span class="channelAgreementItem material-icons-outlined">
                        info
                    </span>
                    <span class="channelAgreementItem">
                        Создавая аккаунт, вы принимаете Условия использования YouTube. Если вы укажете другое имя или поменяете аватар, эти изменения будут видны только на YouTube, а не во всех сервисах Google. Подробнее…
                    </span>
                </div>
                <div class="footerBtns createChannelDialogItem">
                    <span class="footerBtn" @click="isCreateBlogerDialog = false">
                        ОТМЕНА
                    </span>
                    <!-- <span class="footerBtn createChannelLabel" @click="createBloger">
                        СОЗДАТЬ АККАУНТ
                    </span> -->
                    <span class="footerBtn createChannelLabel" @click="createBlogerDrivenPost">
                        СОЗДАТЬ АККАУНТ
                    </span>
                </div>
            <!-- </div> -->
            </form>
        </div>
        <div v-if="isCreateChannelDialog" class="backdrop">
            <div class="createChannelDialog">
                <form class="createChannelDialogForm" ref="createChannelFormRef" method="POST" enctype="multipart/form-data" :action="`http://localhost:4000/api/channels/create/?channelname=${channelName}&blogerid=${bloger._id}`">
                    <div class="createChannelDialogItem mainDetails">
                        <span class="mainDetailsLabel">
                            Основные сведения
                        </span>
                    </div>
                    <div class="channelLogo">

                    </div>
                    <!-- <span class="uploadImageLabel">
                        ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
                    </span> -->
                    <label class="uploadImageLabel" for="uploader">
                        ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
                    </label>
                    <input ref="fileUploader" type="file" name="myFile" class="hiddenField" id="uploader" />
                    <div class="createChannelDialogItem w-75">
                        <input placeholder="Имя канала" v-model="channelName" type="text" class="form-control">
                    </div>
                    <div class="channelAgreement createChannelDialogItem">
                        <span class="channelAgreementItem material-icons-outlined">
                            info
                        </span>
                        <span class="channelAgreementItem">
                            Создавая канал, вы принимаете Условия использования YouTube. Если вы укажете другое имя или поменяете аватар, эти изменения будут видны только на YouTube, а не во всех сервисах Google. Подробнее…
                        </span>
                    </div>
                    <div class="footerBtns createChannelDialogItem">
                        <span class="footerBtn" @click="isCreateChannelDialog = false">
                            ОТМЕНА
                        </span>
                        <!-- <span class="footerBtn createChannelLabel" @click="createChannel">
                            СОЗДАТЬ КАНАЛ
                        </span> -->
                        <span class="footerBtn createChannelLabel" @click="createChannelDrivenPost">
                            СОЗДАТЬ КАНАЛ
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="isFastKeysDialog" class="backdrop">
            <div class="fastKeys">
                <span class="fastKeysHeader">
                    Быстрые клавиши
                </span>
                <div class="fastKeysRow">
                    <div class="fastKeysColumn">
                        <div class="fastKeysContainer">
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Воспроизведение
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Приостановить или продолжить воспроизведение
                                </span>
                                <span>
                                    k
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перемотать ролик на 10 секунд назад
                                </span>
                                <span>
                                    j
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перемотать ролик на 10 секунд вперед
                                </span>
                                <span>
                                    l
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к предыдущему видео
                                </span>
                                <span>
                                    P (Shift + p)
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к следующему видео
                                </span>
                                <span>
                                    N (Shift + n)
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к следующему кадру (когда воспроизведение приостановлено)
                                </span>
                                <span>
                                    ,
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к следующему кадру (когда воспроизведение приостановлено)
                                </span>
                                <span>
                                    .
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Уменьшить скорость воспроизведения
                                </span>
                                <span>
                                    < (SHIFT+,)
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Увеличить скорость воспроизведения
                                </span>
                                <span>
                                    > (SHIFT+.)
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к определенному моменту видео (например, при нажатии на цифру "7" ролик будет перемотан до временной отметки, которая соответствует 70% от длительности видео)
                                </span>
                                <span>
                                    0..9
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к предыдущему эпизоду
                                </span>
                                <span>
                                    Control + Стрелка влево
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Перейти к следующему эпизоду
                                </span>
                                <span>
                                    Control + Стрелка вправо
                                </span>
                            </div>
                        </div>
                        <div class="fastKeysContainer">
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemHeader">
                                    Субтитры
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Включить или отключить субтитры
                                </span>
                                <span>
                                    c
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Настроить прозрачность текста
                                </span>
                                <span>
                                    o
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Настроить прозрачность окна
                                </span>
                                <span>
                                    w
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Увеличить размер шрифта
                                </span>
                                <span>
                                    +
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Уменьшить размер шрифта
                                </span>
                                <span>
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="fastKeysColumn">
                        <div class="fastKeysContainer">
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemHeader">
                                    Общие
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Включить или выключить полноэкранный режим
                                </span>
                                <span>
                                    f
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Увеличить/уменьшить окно проигрывателя
                                </span>
                                <span>
                                    t
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Включить или отключить мини-проигрыватель
                                </span>
                                <span>
                                    i
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Закрыть мини-проигрыватель или текущее диалоговое окно
                                </span>
                                <span>
                                    Esc
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Включить или отключить звук
                                </span>
                                <span>
                                    m
                                </span>
                            </div>
                        </div>
                        <div class="fastKeysContainer fastKeysMockContainer">
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemHeader">
                                    Субтитры
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Включить или отключить субтитры
                                </span>
                                <span>
                                    c
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Настроить прозрачность текста
                                </span>
                                <span>
                                    o
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Настроить прозрачность окна
                                </span>
                                <span>
                                    w
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Увеличить размер шрифта
                                </span>
                                <span>
                                    +
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Уменьшить размер шрифта
                                </span>
                                <span>
                                    -
                                </span>
                            </div>
                        </div>
                        <div class="fastKeysContainer">
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemHeader">
                                    Панорамные видео
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Передвинуть вверх
                                </span>
                                <span>
                                    w
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Посмотреть влево
                                </span>
                                <span>
                                    a
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Передвинуть вниз
                                </span>
                                <span>
                                    s
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Передвинуть вправо
                                </span>
                                <span>
                                    d
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Приблизить
                                </span>
                                <span>
                                    Плюс (+) на цифровой клавиатуре или ]
                                </span>
                            </div>
                            <div class="fastKeysContainerItem">
                                <span class="fastKeysContainerItemContent">
                                    Отдалить
                                </span>
                                <span>
                                    Минус (-) на цифровой клавиатуре или [
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fastKeysFooter">
                    <span class="fastKeysFooterCloseBtn" @click="isFastKeysDialog = false">
                        ЗАКРЫТЬ
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isSendCommentDialog" class="backdrop">
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
                    <span class="sendCommentFooterBtn sendCommentFooterCancelBtn" @click="isSendCommentDialog = false">
                        ОТМЕНА
                    </span>
                    <span class="sendCommentFooterBtn sendCommentFooterSendBtn">
                        ОТПРАВИТЬ
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isHelpDialog" class="help">
            <div class="helpHeader">
                <span>

                </span>
                <span class="helpHeaderItemHeader">
                    Справка
                </span>
                <span class="material-icons helpHeaderItemCloseBtn" @click="isHelpDialog = false">
                    close
                </span>
            </div>
        </div>
        <div v-if="createContextMenu && isAuth" class="createContextMenu">
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': true, avatarContextMenuElementIcon: true }">
                        play_circle
                    </span>
                    <span @click="$router.push({ name: 'Studio', query: { channelid: bloger.channels[0].id, activetab: 'none', action: 'add_video' } })">
                        Добавить видео
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': true, avatarContextMenuElementIcon: true }">
                        stream
                    </span>
                    <span>
                        Начать трансляцию
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
        <div v-if="appsContextMenu && isAuth" class="appsContextMenu">
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon" @click="isCountrySwitchDialog = false">
                        desktop_windows
                    </span>
                    <span>
                        VideoCache TV
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': true, avatarContextMenuElementIcon: true }">
                        
                    </span>
                    <span>
                        VideoCache Music
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span :class="{ 'material-icons-outlined': true, avatarContextMenuElementIcon: true }">
                        
                    </span>
                    <span>
                        VideoCache детям
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon" @click="isCountrySwitchDialog = false">
                        play_circle
                    </span>
                    <span>
                        VideoCache для музыкантов
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
        <div v-if="notificationsContextMenu && isAuth" class="notificationsContextMenu">
            <div class="avatarContextMenuItemHeader avatarContextMenuItem">
                <span>
                    Уведомления
                </span>
                <span class="material-icons-outlined">
                    settings
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="follow avatarContextMenuElement">
                    <img class="followItem followerLogo" src="https://yt3.ggpht.com/ytc/AKedOLQ52CEY-HSIxQiEd19UUyJq3HaYBCEc1viJw1In=s96-c-k-c0x00ffffff-no-rj" alt="" width="45px" />
                    <div class="followItem followInfo">
                        <span>
                            У вас новый подписчик
                        </span>
                        <span>
                            4 недели назад
                        </span>
                    </div>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="follow avatarContextMenuElement">
                    <img class="followItem followerLogo" src="https://yt3.ggpht.com/ytc/AKedOLQ52CEY-HSIxQiEd19UUyJq3HaYBCEc1viJw1In=s96-c-k-c0x00ffffff-no-rj" alt="" width="45px" />
                    <div class="followItem followInfo">
                        <span>
                            У вас новый подписчик
                        </span>
                        <span>
                            4 недели назад
                        </span>
                    </div>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="follow avatarContextMenuElement">
                    <img class="followItem followerLogo" src="https://yt3.ggpht.com/ytc/AKedOLQ52CEY-HSIxQiEd19UUyJq3HaYBCEc1viJw1In=s96-c-k-c0x00ffffff-no-rj" alt="" width="45px" />
                    <div class="followItem followInfo">
                        <span>
                            У вас новый подписчик
                        </span>
                        <span>
                            4 недели назад
                        </span>
                    </div>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="follow avatarContextMenuElement">
                    <img class="followItem followerLogo" src="https://yt3.ggpht.com/ytc/AKedOLQ52CEY-HSIxQiEd19UUyJq3HaYBCEc1viJw1In=s96-c-k-c0x00ffffff-no-rj" alt="" width="45px" />
                    <div class="followItem followInfo">
                        <span>
                            У вас новый подписчик
                        </span>
                        <span>
                            4 недели назад
                        </span>
                    </div>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="follow avatarContextMenuElement">
                    <img class="followItem followerLogo" src="https://yt3.ggpht.com/ytc/AKedOLQ52CEY-HSIxQiEd19UUyJq3HaYBCEc1viJw1In=s96-c-k-c0x00ffffff-no-rj" alt="" width="45px" />
                    <div class="followItem followInfo">
                        <span>
                            У вас новый подписчик
                        </span>
                        <span>
                            4 недели назад
                        </span>
                    </div>
                </div>
                <span>
                    
                </span>
            </div>
        </div>
    </div>
</template>

<script>

import * as jwt from 'jsonwebtoken'
import STT from 'stt.js'

export default {
    name: 'Header',
    data() {
        return {
            keywords: '',
            avatarContextMenu: false,
            isCreateChannelDialog: false,
            channelName: '',
            isAuth: false,
            blogerLogin: '',
            blogerPassword: '',
            isCreateBlogerDialog: false,
            isCheckBlogerDialog: false,
            bloger: {
                login: '',
                password: '',
                channels: [],
                isSecurityMode: ''
            },
            filesList: [],
            isFastKeysDialog: false,
            isSendCommentDialog: false,
            feedback: '',
            isHelpDialog: false,
            helpKeywords: '',
            isCountrySwitchDialog: false,
            isLanguageSwitchDialog: false,
            isThemeSwitchDialog: false,
            createContextMenu: false,
            appsContextMenu: false,
            notificationsContextMenu: false,
            stt: null,
            isMicro: false,
            intermmediateResult: '',
            token: window.localStorage.getItem("videocachetoken")
        }
    },
    props: {
        'burger': {
            type: Boolean,
            default: true
        }
    },
    emits: [
        'toggleBurger',
        'changeActiveTab'
    ],
    mounted() {
        jwt.verify(this.token, 'videocachesecret', (err, decoded) => {
            if (err) {
                alert('Не могу получить блогера')
                this.$router.push({ name: 'Home' })
            } else {
                this.getBloger(decoded.bloger)
            }
        })
        this.stt = new STT({
            continuous: false,
            interimResults: true
        })
        this.stt.on('start', () => {
            
        })
        this.stt.on('end', () => {
            // this.keywords = this.intermmediateResult
            // this.isMicro = false
        })
        this.stt.on('result', ({ finalTranscript, interimTranscript }) => {
            this.intermeddiateResult = finalTranscript
            this.keywords = finalTranscript
            // this.isMicro = false
        })
        this.stt.on('error', (error) => {
            console.log('error :>> ', error);
        })
    },
    methods: {
        toggleRecording() {
            this.isMicro = !this.isMicro
            if (this.isMicro) {
                this.stt.start()
            } else if (!this.isMicro) {
                this.stt.end()
            }
        },
        createBlogerDrivenPost() {
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
                for (let file of files) {
                    this.filesList.push(await file.getFile())
                }
                console.log('this.filesList: ', this.filesList)
                this.$refs.blogerFileUploader.files = new this.FileListItems(
                    this.filesList
                )
                // blogerData.login
                setTimeout(() => {
                    this.token = jwt.sign({
                        bloger: this.blogerLogin
                    }, 'videocachesecret', { expiresIn: '5m' })
                    localStorage.setItem('videocachetoken', this.token)
                    this.$refs.createBlogerFormRef.submit()
                }, 1000)
            }).catch(e => console.log('windowerror: ', e))
        },
        refreshSearch(tab) {
        
        },
        changeActiveTab(tab) {
            this.$emit('changeActiveTab', tab)
        },
        switchTheme(theme) {
            
            fetch(`http://localhost:4000/api/blogers/theme/set/?blogerlogin=${this.bloger.login}&value=${theme}`, {
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
                    this.bloger.theme = theme
                    this.isThemeSwitchDialog = false
                    alert('Обновил тему')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить тему')
                }
            })

        },
        switchCountry(country) {
            
            fetch(`http://localhost:4000/api/blogers/country/set/?blogerlogin=${this.bloger.login}&value=${country}`, {
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
                    this.bloger.country = country
                    this.isCountrySwitchDialog = false     
                    alert('Обновил страну')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить страну')
                }
            })

        },
        switchLanguage(language) {
            
            fetch(`http://localhost:4000/api/blogers/language/set/?blogerlogin=${this.bloger.login}&value=${language}`, {
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
                    this.bloger.language = language
                    this.isLanguageSwitchDialog = false
                    alert('Обновил язык')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить язык')
                }
            })

        },
        setIsSecurityMode() {
            
            fetch(`http://localhost:4000/api/blogers/issecuritymode/set/?blogerlogin=${this.bloger.login}&value=${!this.bloger.isSecurityMode}`, {
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
                    this.bloger.isSecurityMode = !this.bloger.isSecurityMode
                    alert('Обновил безопасный режим')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу обновить безопасный режим')
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
        createChannelDrivenPost() {
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
                for (let file of files) {
                    this.filesList.push(await file.getFile())
                }
                console.log('this.filesList: ', this.filesList)
                this.$refs.fileUploader.files = new this.FileListItems(
                    this.filesList
                )
                setTimeout(() => {
                    this.$refs.createChannelFormRef.submit()
                }, 1000)
            }).catch(e => console.log('windowerror: ', e))
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
                    alert('Получил блогера')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу получить блогера')
                }
            })

        },
        toChannel() {
            if (this.bloger.channels.length <= 0) {
                this.avatarContextMenu = false
                this.isCreateChannelDialog = true
            } else if (this.bloger.channels.length >= 1) {
                this.$router.push({ name: 'Channel', query: { channelid: this.bloger.channels[0].id } })
            }
        },
        logout() {
            this.token = jwt.sign({
                bloger: this.blogerLogin
            }, 'videocachesecret', { expiresIn: 1 })
            localStorage.removeItem('videocachetoken')
            this.isAuth = false
            this.avatarContextMenu = false
            if (this.$route.path !== '/') {
                this.$router.push({ name: 'Home' })
            }
        },
        checkBloger() {

            fetch(`http://localhost:4000/api/blogers/check/?blogerlogin=${this.blogerLogin}&blogerpassword=${this.blogerPassword}`, {
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
                    this.token = jwt.sign({
                        bloger: this.blogerLogin
                    }, 'videocachesecret', { expiresIn: '5m' })
                    localStorage.setItem('videocachetoken', this.token)
                    this.isAuth = true
                    this.isCheckBlogerDialog = false
                    this.getBloger(this.blogerLogin)
                    alert('Вошел блогером')
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу войти блогером')
                }
            })

        },
        createBloger() {
            
            fetch(`http://localhost:4000/api/blogers/create/?blogerlogin=${this.blogerLogin}&blogerpassword=${this.blogerPassword}`, {
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
                    this.isCreateBlogerDialog = false
                    alert('Создал блогера')
                    let blogerData = JSON.parse(result).bloger
                    this.getBloger(blogerData.login)
                    this.token = jwt.sign({
                        bloger: blogerData.login
                    }, 'videocachesecret', { expiresIn: '5m' })
                    localStorage.setItem('videocachetoken', this.token)
                    
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу создать блогера')
                }
            })

        },
        createChannel() {
            
            fetch(`http://localhost:4000/api/channels/create/?blogerid=${this.bloger._id}&channelname=${this.channelName}`, {
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
                    this.isCreateChannelDialog = false
                    alert('Создал канал')
                    this.getBloger(this.bloger.login)
                } else if (JSON.parse(result).status === 'Error') {
                    alert('Не могу создать канал')
                }
            })

        },
        toggleBurger() {
            this.$emit('toggleBurger', !this.burger)
        }
    }
}
</script>

<style scoped>
    
    .header {
        z-index: 3;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        background-color: rgb(255, 255, 255);
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 25px;
    }

    .headerItem {
        display: flex;
        align-items: center;
    }

    .avatar {
        cursor: pointer;
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: rgb(0, 150, 0);
        background-size: 100% 100%;
    }

    .headerElement {
        margin: 0px 10px;
    }

    .micBtn {
        border-radius: 100%;
    }

    .search {
        width: 575px;
        display: flex;
        align-items: center;
    }

    .headerElementMenu {
        cursor: pointer;
    }

    .avatarContextMenu {
        user-select: none;
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        border-radius: 8px;
        position: absolute;
        top: 25px;
        left: calc(100% - (330px + 65px));
        background-color: rgb(255, 255, 255);
        width: 330px;
        height: 400px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .avatarContextMenuItem {
        cursor: pointer;
        /* margin: 10px 0px; */
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        box-sizing: border-box;
    }

    .avatarContextMenuItem:hover {
        background-color: rgb(240, 240, 240);
    }

    .avatarContextMenuElement {
        display: flex;
    }

    .avatarContextMenuElementIcon {
        margin: 0px 5px;
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

    .createChannelDialog {
        box-sizing: border-box;
        padding: 15px 35px;
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        width: 50%;
        height: 75%;
        align-items: center;
        justify-content: space-between;
    }

    .createChannelDialogForm {
        height: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

    .uploadImageLabel {
        cursor: pointer;
        color: rgb(0, 100, 255);
        font-weight: bolder;
    }

    .footerBtns {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    
    .footerBtn {
        cursor: pointer;
        font-weight: bolder;
        font-size: 14px;
        margin: 0px 10px;
    }

    .createChannelLabel {
        color: rgb(0, 100, 255);
    }

    .channelAgreement {
        display: flex;
        align-items: flex-start;
    }

    .channelAgreementItem {
        margin: 0px 5px;
        color: rgb(150, 150, 150);
    }

    .mainDetails {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }

    .mainDetailsLabel {
        font-size: 20px;
    }

    .channelLogo {
        border-radius: 100%;
        width: 150px;
        height: 150px;
        /* background-color: rgb(0, 100, 255); */
        background-image: url('https://yt3.ggpht.com/a/default-user=s200-c-k-c0x00ffffff-no-rj');
        background-size: 100% 100%; 
    }

    .hiddenField {
        visibility: hidden;
    }

    .videoCacheLogo {
        cursor: pointer;
    }

    .fastKeys {
        overflow: hidden;
        position: fixed;
        top: 5%;
        left: 5%;
        border-radius: 8px;
        width: 90%;
        height: 90%;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 25px;
        display: flex;
        flex-direction: column;
    }

    .fastKeysHeader {
        font-weight: bolder;
        font-size: 22px;
    }

    .fastKeysRow {
        height: 85%;
        display: flex;
        justify-content: space-between;
        overflow-y: scroll;
        height: 100%;
    }

    .fastKeysColumn {
        width: 49%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .fastKeysContainer {
        display: flex;
        flex-direction: column;
    }

    .fastKeysContainerItem {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(150, 150, 150);
        padding: 10px 0px;
    }

    .fastKeysContainerItemHeader {
        font-weight: bolder;
        color: rgb(150, 150, 150);
    }

    .fastKeysContainerItemContent {
        color: rgb(115, 115, 115);
    }

    .fastKeysMockContainer {
        color: transparent;
        user-select: none;
        opacity: 0;
    }

    .fastKeysFooter {
        display: flex;
        height: 50px;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .fastKeysFooterCloseBtn {
        color: rgb(0, 100, 255);
        font-weight: bolder;
        cursor: pointer;
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

    .help {
        position: fixed;
        top: 35%;
        left: 65%;
        background-color: rgb(255, 255, 255);
        width: 350px;
        height: 400px;
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 15px;
    }

    .helpHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .helpHeaderItemHeader {
        font-size: 20px;
    }

    .helpHeaderItemCloseBtn {
        cursor: pointer;
    }

    .avatarContextMenuItemHeader {
        display: flex;
        justify-content: space-between;
    }

    .followInfo {
        display: flex;
        flex-direction: column;
    }

    .followerLogo {
        border-radius: 100%;
    }

    .follow {
        display: flex;
        margin: 25px 0px;
    }

    .followItem {
        margin: 0px 10px;
    }

    
    .notificationsContextMenu {
        user-select: none;
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        border-radius: 8px;
        position: absolute;
        top: 25px;
        left: 68%;
        background-color: rgb(255, 255, 255);
        width: 330px;
        height: 400px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .createContextMenu {
        user-select: none;
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        border-radius: 8px;
        position: absolute;
        top: 25px;
        left: 65%;
        background-color: rgb(255, 255, 255);
        width: 250px;
        height: 100px;
        display: flex;
        flex-direction: column;
    }

    .appsContextMenu {
        user-select: none;
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        border-radius: 8px;
        position: absolute;
        top: 25px;
        left: 65%;
        background-color: rgb(255, 255, 255);
        width: 330px;
        height: 215px;
        display: flex;
        flex-direction: column;
    }

    .contextMenuBtn {
        cursor: pointer;
    }

</style>