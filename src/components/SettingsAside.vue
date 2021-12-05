<template>
    <div class="aside">
        <span class="asideHeader asideItem">
            Настройки
        </span>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Аккаунт' }" @click="changeActiveTab('Аккаунт')">
            <span class="asideElement">
                Аккаунт
            </span>
        </div>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Уведомления' }" @click="changeActiveTab('Уведомления')">
            <span class="asideElement">
                Уведомления
            </span>
        </div>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Воспроизведение' }" @click="changeActiveTab('Воспроизведение')">
            <span class="asideElement">
                Воспроизведение
            </span>
        </div>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Конфиденциальность' }" @click="changeActiveTab('Конфиденциальность')">
            <span class="asideElement">
                Конфиденциальность
            </span>
        </div>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Связанные приложения' }" @click="changeActiveTab('Связанные приложения')">
            <span class="asideElement">
                Связанные приложения
            </span>
        </div>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Расчеты и платежи' }" @click="changeActiveTab('Расчеты и платежи')">
            <span class="asideElement">
                Расчеты и платежи
            </span>
        </div>
        <div :class="{ asideItem: true, activeSettingsTab: activeSettingsTab === 'Расширенные настройки' }" @click="changeActiveTab('Расширенные настройки')">
            <span class="asideElement">
                Расширенные настройки
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            
        }
    },
    props: {
        'activeSettingsTab': {
            type: String,
            default: 'Аккаунт'
        }
    },
    emits: [
        'changeActiveTab'
    ],
    methods: {
        changeActiveTab(tab) {
            this.$emit('changeActiveTab', tab)
        }
    }
}
</script>

<style scoped>

    .aside {
        overflow-x: hidden;
        top: 65px;
        left: 0px;
        position: fixed;
        height: calc(100% - 65px);
        width: 20%;
        background-color: rgb(235, 235, 235);
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    .separator {
        border-bottom: 1px solid rgb(225, 225, 225);
    }

    .asideItem {
        cursor: pointer;
        /* margin: 15px 0px; */
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 10px 50px;
        display: flex;
        align-items: center;
    }

    .asideColumn {
        top: 65px;
        left: 0px;
        position: fixed;
        height: calc(100% - 65px);
        width: 10%;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    .asideColumnItem {
        cursor: pointer;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 10px 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .asideItem:hover {
        background-color: rgb(240, 240, 240);
    }

    .asideItem.activeSettingsTab:hover {
        background-color: rgb(200, 200, 200);
    }

    .asideElement {
        margin: 0px 10px;
    }

    .agreement {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
    }

    .agreementItem {
        margin: 10px 0px;
    }

    .asideHeader {
        font-weight: bold;
    }

    .activeSettingsTab {
        background-color: rgb(215, 215, 215);
        font-weight: bold;
    }

</style>