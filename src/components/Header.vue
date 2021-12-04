<template>
    <div class="header">
        <div class="headerItem">
            <span @click="toggleBurger" class="headerElementMenu headerElement material-icons">
                menu
            </span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" width="60px" class="headerElement" />
        </div>
        <div class="headerItem">
            <div class="headerElement input-group search">
                <input placeholder="Введите запрос" v-model="keywords" type="text" class="form-control" />
                <span class="input-group-text material-icons">
                    search
                </span>
            </div>
            <button class="micBtn headerElement btn btn-light material-icons">
                mic
            </button>
        </div>
        <div class="headerItem">
            <span class="headerElement material-icons-outlined">
                videocam
            </span>
            <span class="headerElement material-icons-outlined">
                apps
            </span>
            <span class="headerElement material-icons-outlined">
                notifications
            </span>
            <div class="headerElement avatar" @click="avatarContextMenu = !avatarContextMenu">

            </div>
        </div>
        <div v-if="avatarContextMenu && isAuth" class="avatarContextMenu">
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
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        paid
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Покупки и платные подписки
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        settings
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
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
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        logout
                    </span>
                    <span @click="logout">
                        Выйти
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        brightness_3
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Тема: Как на устройстве
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        translate
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Язык: Русский
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        language
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Страна: Россия
                    </span>
                </div>
                <span class="material-icons">
                    chevron_right
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        settings
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
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
                    <span @click="$router.push({ name: 'Home' })">
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
                    <span @click="$router.push({ name: 'Home' })">
                        Отправить отзыв
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span class="material-icons-outlined avatarContextMenuElementIcon">
                        keyboard
                    </span>
                    <span @click="$router.push({ name: 'Home' })">
                        Быстрые клавиши
                    </span>
                </div>
                <span>
                    
                </span>
            </div>
            <div class="avatarContextMenuItem">
                <div class="avatarContextMenuElement">
                    <span @click="$router.push({ name: 'Home' })">
                        Безопасный режим: откл.
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
                        Создавая аккаунт, вы принимаете Условия использования YouTube. Если вы укажете другое имя или поменяете аватар, эти изменения будут видны только на YouTube, а не во всех сервисах Google. Подробнее…
                    </span>
                </div>
                <div class="footerBtns createChannelDialogItem">
                    <span class="footerBtn" @click="isCreateBlogerDialog = false">
                        ОТМЕНА
                    </span>
                    <span class="footerBtn createChannelLabel" @click="createBloger">
                        СОЗДАТЬ АККАУНТ
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isCreateChannelDialog" class="backdrop">
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
                    <span class="footerBtn createChannelLabel" @click="createChannel">
                        СОЗДАТЬ КАНАЛ
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as jwt from 'jsonwebtoken'

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
                channels: []
            },
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
        'toggleBurger'
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
    },
    methods: {
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

</style>