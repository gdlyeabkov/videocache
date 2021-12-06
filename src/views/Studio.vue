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
                        <div class="mainBodyItem">
                            
                        </div>    
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
            activeTab: 'Main'
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
        width: 30%;
        min-height: 500px;
        border: 1px solid rgb(125, 125, 125);
        margin: 0px 15px;
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

</style>