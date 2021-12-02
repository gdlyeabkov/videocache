<template>
  <div>
    <Header />
    <div clas="main">
      <Aside />
      <div class="article">
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

export default {
  name: 'Home',
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
    position: relative;
    top: 65px;
    left: 20%;
    height: 1000px;
  }

  .article {
    background-color: rgb(240, 240, 240);
    width: 80%;
    height: 100%;
  }

</style>
