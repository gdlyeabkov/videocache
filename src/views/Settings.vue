<template>
    <div>
        <Header />
        <div class="main">
            <SettingsAside :activeSettingsTab="activeTab" @changeActiveTab="changeActiveTabHandler" />
            <div class="article">
                <div v-if="activeTab === 'Аккаунт'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Аккаунт
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Добавьте сведения о себе и настройте доступ к функциям YouTube
                            </span>
                            <span class="accoutHeaderElement">
                                Вы вошли в аккаунт karasgames2000@gmail.com
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="separator">

                    </div>
                    <span class="seetingsTabHeader">
                        Ваш канал YouTube
                    </span>
                    <span>
                        Чтобы загружать ролики, оставлять комментарии, создавать плейлисты и пользоваться другими функциями YouTube, нужно создать канал. 
                    </span>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Мой канал
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelInfoRow">
                                <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="48px" class="myChannelInfoRowItem" />
                                <span class="myChannelInfoRowItem">
                                    KarasGames - разработчик игр
                                </span>
                            </div>
                            <span>
                                Статус канала и доступные функции
                            </span>
                            <span>
                                Создать канал
                            </span>
                            <span>
                                Перейти к расширенным настройкам
                            </span>
                        </div>
                    </div>
                    <div class="separator">

                    </div>
                    <span class="seetingsTabHeader">
                        Ваш аккаунт
                    </span>
                     <span>
                        Для входа на YouTube используется аккаунт Google. 
                    </span>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Аккаунт Google
                        </span>
                        <div class="myChannelInfo">
                            <span>
                                Настроить аккаунт Google
                            </span>
                            <span>
                                Вы будете перенаправлены на страницу аккаунта.
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Подписка
                        </span>
                        <div class="myChannelInfo">
                            <span>
                                Подписка YouTube Premium не оформлена. | Оформить YouTube Premium
                            </span>
                            <span>
                                С подпиской YouTube Premium вас ждет музыка в фоновом режиме, видео без рекламы и многое другое.
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Уведомления'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Уведомления
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Настройки уведомлений
                            </span>
                            <span class="accoutHeaderElement">
                                Укажите, какие уведомления вы хотите получать
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="separator">

                    </div>
                    <span class="seetingsTabHeader">
                        Общие
                    </span>
                    <span>
                        В этом разделе можно настроить уведомления для приложения и браузера. 
                    </span>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Ваши настройки
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Подписки
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать уведомления о каналах, на которые оформлена подписка
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Рекомендованные видео
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать рекомендации, составленные с учетом истории просмотров
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Действия на канале
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать уведомления обо всех действиях на моем канале
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Действия с комментариями
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать уведомления о действиях с моими комментариями к роликам других авторов
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Ответы на комментарии
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать уведомления о новых ответах на мои комментарии
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Упоминания
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать уведомления, когда пользователи упоминают мой канал
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Записи с моим контентом на других каналах
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать уведомления, когда другие авторы делятся моими роликами на своих каналах
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separator">

                    </div>
                    <span class="seetingsTabHeader">
                        Уведомления по электронной почте
                    </span>
                    <span>
                        Мы отправляем уведомления на адрес электронной почты karasgames2000@gmail.com. Отказаться от рассылки можно, перейдя по ссылке в нижней части любого из писем. Подробнее об уведомлениях по электронной почте… 
                    </span>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Рассылка
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Новости YouTube и YouTube Детям, а также рекомендации для всей семьи
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Получать электронные письма с рекомендациями, подсказками и новостями
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Разрешение
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Уведомления о последних действиях на моем канале и новости сервиса (кроме тех, на которые отменена подписка)
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Даже если вы отключите эту функцию, вам все равно будут приходить уведомления о важных изменениях в вашем аккаунте, новостях сервиса, а также вопросах, связанных с правовыми аспектами нашей деятельности и конфиденциальностью.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Ваши настройки
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Общие новости YouTube
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Уведомления и рекомендации
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Новости YouTube Premium
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Рекомендации и новости о YouTube Premium и YouTube Music Premium
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Новости для авторов
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Информация о новых функциях и предстоящих мероприятиях, а также советы о том, как развивать канал
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Язык
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <select class="form-select">
                                        <option value="Русский">Русский</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Эти настройки будут применены только к уведомлениям по электронной почте.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Воспроизведение'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Воспроизведение
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Настройки проигрывателя
                            </span>
                            <span class="accoutHeaderElement">
                                Здесь можно задать параметры воспроизведения видео в этом браузере
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Подсказки
                        </span>
                        <div class="playingRow">
                            <input type="checkbox" class="playingRowItem" />
                            <span class="playingRowItem">
                                Вы будете перенаправлены на страницу аккаунта.
                            </span>
                            <span class="playingRowItem material-icons-outlined">
                                help_outline
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Субтитры
                        </span>
                        <div class="playingRow">
                            <input type="checkbox" class="playingRowItem" />
                            <span class="playingRowItem">
                                Всегда показывать субтитры
                            </span>
                            <span class="playingRowItem material-icons-outlined">
                                help_outline
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            &nbsp;
                        </span>
                        <div class="playingRow">
                            <input type="checkbox" class="playingRowItem" />
                            <span class="playingRowItem">
                                Показывать автоматически созданные субтитры, если они доступны
                            </span>
                            <span class="playingRowItem material-icons-outlined">
                                help_outline
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Настройки кодека AV1
                        </span>
                        <div class="playingRow">
                            <input type="radio" class="playingRowItem" />
                            <span class="playingRowItem">
                                Автоматически (рекомендованно)
                            </span>
                            <span class="playingRowItem">
                                &nbsp;
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            &nbsp;
                        </span>
                        <div class="playingRow">
                            <input type="radio" class="playingRowItem" />
                            <span class="playingRowItem">
                                Использовать AV-1 для SD-контента
                            </span>
                            <span class="playingRowItem material-icons-outlined">
                                help_outline
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            &nbsp;
                        </span>
                        <div class="playingRow">
                            <input type="radio" class="playingRowItem" />
                            <span class="playingRowItem">
                                Всегда использовать AV1
                            </span>
                            <span class="playingRowItem material-icons-outlined">
                                help_outline
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Конфиденциальность'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Конфиденциальность
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Настройте доступ к своему контенту на YouTube
                            </span>
                            <span class="accoutHeaderElement">
                                В этом разделе можно выбрать, кому доступен список ваших подписок и сохраненные плейлисты.
                            </span>
                            <span class="accountHeaderElement">
                                Ознакомьтесь с Условиями использования YouTube и Политикой конфиденциальности Google.
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="separator">

                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Плейлисты и подписки
                        </span>
                        <div class="myChannelInfo">
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="privacyRowItem seetingsTabHeader">
                                        Не показывать информацию о сохраненных плейлистах
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        Плейлисты, созданные другими пользователями, не будут показываться на вашем канале. Для подборок, которые создали вы, будут применяться отдельные настройки доступа. Подробнее…
                                    </span>
                                    <span>
                                        С подпиской YouTube Premium вас ждет музыка в фоновом режиме, видео без рекламы и многое другое.
                                    </span>
                                </div>
                            </div>
                            <div class="myChannelColumn">
                                <div class="privacyRow">
                                    <input type="checkbox" class="privacyRowItem" />
                                    <span class="seetingsTabHeader privacyRowItem">                                    
                                        Не показывать информацию о моих подписках
                                    </span>
                                </div>
                                <div class="myChannelInfo">
                                    <span>
                                        По умолчанию ваши подписки видны только вам. О том, как изменить их видимость, рассказывается здесь. Настройки задаются на этой странице.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Реклама на YouTube
                        </span>
                        <div class="myChannelInfo">
                            <span>
                                Вам может показываться реклама на основе общих факторов, например тематики видео. Объявления подбираются с учетом ваших настроек рекламных предпочтений. О том, какая реклама демонстрируется в семейных аккаунтах, которыми также пользуются дети, можно узнать в Справочном центре Google для детей.
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Связанные приложения'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Связанные прижения
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Настройки синхронизации
                            </span>
                            <span class="accoutHeaderElement">
                                В этом разделе вы можете связать канал YouTube с аккаунтами в других сервисах.
                            </span>
                            <span class="accountHeaderElement">
                                Полный список разрешенных сервисов приведен здесь.
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="separator">

                    </div>
                    <div class="bindedApplications">
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/9OFmTb0K1ltYfSsDGtzm0QnrFUARMMZZKEBag3k6PtUMnarIVbXmE1ML7fYO5ymGT7vrIKI=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Activision
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/Iey47VziUp7kfElO_kZQfT4HkjuxM_Sq2MG6M5_PfXBhUKI90pcweCJrTEqEdHeG4QjdPvw=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Battle.net
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/UbdpbnAWSOFU_35tULIOPLmV5ey0bq6NTL59Ko7nNfig8WqNPbO3xAHsoQA9Sk8-_V0=s176-nd-rp" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Summoners War
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/2qhXXZm7rURHrwCBwuzUoe3lAVRWtq4D9fSj5A9PkJmCz8dBX5WsWdbWmQPsP0YI8_hOwk0=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Epic Games
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/qYwCY37vA51A2-m7OeWQKK-g3JJ1FoDBDzbp2mkA0oMfOf5pF3V7GXFE5m0kkrY5MMccep0=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Garena
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/mL4dB3T4SjBZZabdH6yutbfmNRzLAV4TDOc7u_OSRM6sDVlX2ZRJQu1gdagfmmyrnlcoNp0=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        MLBB
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/uPaUs8iWB2dSwVTRuyhk4b4Q810ooUeILIaMfYthdb3K4JHjocDYOJAf0aeAicjATX8=s176-nd-rp" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        NetEase Knives Out
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/8-SniYIRaeki791FyNlRggRuIjlxBpYM9k6F7q1UL75FW7IEUSWridDbrXmX5DkTokRq=s176-nd-rp" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        NetEase Identity V
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/7EabjEWAQXDfaJhXN4V2BMXY7sYVaNa3NVYNtqHkPTlKv0eU8r4SkbPeDIeXnBVaRKyZcug=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        PUBG
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/H_o6753e7ipKV6dsizTyTUaj2VfGC-cUXza44qunmFNZY6bej8uZfOM4TXo75Dgcq1oVCsk=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        PUBG MOBILE
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/AdwMGs3qF6SGNeFiMB7AwdSRe-MOu9Vf2IGluvCakJ3Fcy9DrJozeQfehihqzpAkTXNA4g=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Riot Games
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/o87hJbozgLcNjqoYv_6MP5DDtPKqypMRy5UP6qxoRnhl1QsedFCWz5AG0G6_Z787yOgeAOFD=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Supercell
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                        <div class="bindedApplication">
                            <div class="bindedApplicationInfoAside">
                                <img class="bindedApplicationInfoAsideItem" src="https://yt3.ggpht.com/C1DoT4jX7xNwS-tT2fWb3920lFEu8oMb32GD6Ws4ofbi4_1xdawIHUsf-VmwEvdt2Bq5Ums=s176-nd" alt="" width="75px" />
                                <div class="bindedApplicationInfo bindedApplicationInfoAsideItem">
                                    <span class="seetingsTabHeader">
                                        Ubisoft
                                    </span>
                                    <span>
                                        Участвуйте в розыгрышах призов: свяжите аккаунты и смотрите одобренные игровые трансляции и видео
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light enableSettingsBtn">
                                СВЯЗАТЬ
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Расчеты и платежи'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Расчеты и платежи
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Укажите, как вы будете совершать покупки на YouTube
                            </span>
                            <span class="accoutHeaderElement">
                                
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="separator">

                    </div>
                    <div class="enablePaySetting">           
                        <div class="enablePaySettingItem">
                            <span class="seetingsTabHeader">
                                Функция быстрых покупок отключена
                            </span>
                            <span>
                                При совершении покупок на YouTube вам нужно будет подтверждать свой аккаунт.
                            </span>
                            <span class="enablePaySettingDetail">
                                Подробнее…
                            </span>
                        </div>
                        <button class="btn btn-light enableSettingsBtn">
                            Включить
                        </button>
                    </div>
                </div>
                <div v-else-if="activeTab === 'Расширенные настройки'" class="settingsTabContent">
                    <span class="seetingsTabHeader">
                        Расширенные настройки
                    </span>
                    <div class="accoutHeader">
                        <div class="accoutHeaderItem">
                            <span class="accoutHeaderElement accoutHeaderElementHeader">
                                Настройте канал и аккаунт так, как вам удобно
                            </span>
                            <span class="accoutHeaderElement">
                                
                            </span>
                        </div>
                        <img src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" width="175px" />
                    </div>
                    <div class="separator">

                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Идентификатор пользователя
                        </span>
                        <button class="btn btn-light copySettingsBlock">
                            <span>
                                MSYwB_yfWxv6Xj2a_J4YDg
                            </span>
                            <span class=" copySettingsBtn">
                                Копировать
                            </span>
                        </button>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Идентификатор канала
                        </span>
                        <button class="btn btn-light copySettingsBlock">
                            <span>
                                UCMSYwB_yfWxv6Xj2a_J4YDg
                            </span>
                            <span class=" copySettingsBtn">
                                Копировать
                            </span>
                        </button>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Переместить канал
                        </span>
                        <div class="myChannelInfo">
                            <span class="extendSettingHeader">
                                Связать канал с аккаунтом бренда
                            </span>
                            <span>
                                Вы можете установить связь между своим каналом YouTube и аккаунтом бренда.
                            </span>
                        </div>
                    </div>
                    <div class="myChannel">
                        <span class="seetingsTabHeader">
                            Удалить канал
                        </span>
                        <div class="myChannelInfo">
                            <span class="extendSettingHeader">
                                Удалить канал
                            </span>
                            <span>
                                Обратите внимание, что будет удален только канал YouTube. Аккаунт Google останется доступен.
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
import SettingsAside from '@/components/SettingsAside.vue'

export default {
    name: 'Settings',
    data() {
        return {
            activeTab: 'Аккаунт'
        }
    },
    methods: {
        changeActiveTabHandler(tab) {
            this.activeTab = tab
        },
    },
    components: {
        Header,
        SettingsAside
    }
}
</script>

<style scoped>
    
    .accoutHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .accoutHeaderItem {
        display: flex;
        flex-direction: column;
        margin: 0px 25px;
    }

    .article {
        position: absolute;
        top: 65px;
        left: 20%;
        width: 80%;
    }

    .seetingsTabHeader {
        font-weight: bolder;
        margin: 25px 0px;
    }

    .accoutHeaderElement {
        margin: 10px 0px;
    }

    .accoutHeaderElementHeader {
        font-size: 18px;
        font-weight: bolder;
    }

    .separator {
        border-bottom: 1px solid rgb(225, 225, 225);
    }

    .settingsTabContent {
        display: flex;
        flex-direction: column;
    }
    
    .myChannel {
        display: flex;
        align-items: flex-start;
    }

    .myChannelInfo {
        margin: 35px 15px;
        display: flex;
        flex-direction: column;
    }

    .myChannelInfoRow {
        display: flex;
        align-items: center;
    }

    .myChannelInfoRowItem {
        margin: 0px 10px;
    }

    .copySettingsBlock {
        margin-top: 50px;
        margin-left: 75px;
        border: 1px solid rgb(175, 175, 175);
    }
    
    .copySettingsBtn {
        color: rgb(0, 100, 255);
        font-weight: bolder;
    }

    .extendSettingHeader {
        color: rgb(0, 100, 255);
        font-weight: bolder;
    }

    .enablePaySetting {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .enablePaySettingItem {
        display: flex;
        flex-direction: column;
    }

    .enableSettingsBtn {
        border: 1px solid rgb(100, 0, 255);
        font-weight: bolder;
        color: rgb(100, 0, 255);
    }

    .enablePaySettingDetail {
        cursor: pointer;
        color: rgb(100, 0, 255);
    }

    .bindedApplications {
        display: flex;
        flex-direction: column;
    }

    .bindedApplication {
        margin: 15px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .bindedApplicationInfo {
        display: flex;
        flex-direction: column;
    }

    .bindedApplicationInfoAside {
        display: flex;
        align-items: center;
    }

    .bindedApplicationInfoAsideItem {
        margin: 0px 15px;
    }

    .myChannelColumn {
        flex-direction: column;
    }

    .privacyRow {
        display: flex;
        align-items: center;
    }

    .privacyRowItem {
        margin: 0px 10px;
    }

    .playingRow {
        display: flex;
        align-items: center;
        margin-top: 50px;
    }

    .playingRowItem {
        margin: 0px 10px;
    }

</style>