<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for=" item in lunbotulist" :key="item.title">
                <img :src="item.img_url || item" :class="{ full: isfull }">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    props: ["lunbotulist","isfull"]
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
    
}
.mint-swipe-item{
    text-align: center;
}
.mint-swipe img{
    height: 100%;
}
.full{
    width: 100%;
}
</style>