<template>
    <div>
        <StudioHeader />
        <div class="main">
            <StudioAside />
            <div class="article">

            </div>
        </div>
    </div>
</template>

<script>

import StudioHeader from '@/components/StudioHeader.vue'
import StudioAside from '@/components/StudioAside.vue'

export default {
    name: 'Studio',
    components: {
        StudioHeader,
        StudioAside
    }
}
</script>

<style scoped>

</style>