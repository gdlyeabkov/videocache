<template>
    <div class="header">
        <div class="headerItem">
            <span class="headerElement material-icons">
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
            <div class="headerElement avatar">

            </div>
        </div>
    </div>
</template>

<script>
export default {

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

</style>